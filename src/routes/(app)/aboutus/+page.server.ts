import type { RequestEvent } from "./$types"
import e from '@/edgeql-js';
import type { PageServerLoad } from './$types';
import { client } from "@/lib/server/edgedb";
import { redirect } from "@sveltejs/kit";

export const load = (async ({locals}: RequestEvent) => {

  const session = await locals.auth()
  const searchSessionEmail = session?.user?.email;
  const afterAt = searchSessionEmail?.split('@')[1];
  const result: string = afterAt as string;
  const searchSessionEmailString = searchSessionEmail as string;

  const user = e.select(e.User, () => ({
    email: true,
  }))
  .run(client);
  const foundUserEmail = (await user).find(user => user.email == searchSessionEmail);

  const organizer = e.select(e.Organizer, () => ({
    email: true,
    id: true,
  }))
  .run(client);
  const foundOrganizerEmail = (await organizer).find(organizer => organizer.email == searchSessionEmail);

  const emailFound = foundUserEmail || foundOrganizerEmail

  if (session?.user && !emailFound) {
    throw redirect(307, "/registration");
  }
  else if(foundOrganizerEmail){
    return {
      organizer: await e
          .select(e.Organizer, () => ({
            id: true,
            email: true,
            filter_single: {email: e.str(searchSessionEmailString)}
          }))
          .run(client),
          company: await e
        .select(e.Company, () => ({  
          id: true,
          name: true,
          filter_single: {companyEmail: e.str(result)}
        }))
        .run(client),
    }
  }
  else if(foundUserEmail){
    return {
      user: await e
          .select(e.User, () => ({
            id: true,
            email: true,
            filter_single: {email: e.str(searchSessionEmailString)}
          }))
          .run(client),
          company: await e
        .select(e.Company, () => ({  
          id: true,
          name: true,
          filter_single: {companyEmail: e.str(result)}
        }))
        .run(client),
    }
  }
}) satisfies PageServerLoad;
