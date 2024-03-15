import type { RequestEvent } from "./$types"
import e from '@/edgeql-js';
import type { PageServerLoad } from './$types';
import { client } from "@/lib/server/edgedb";

export const load = (async ({locals}: RequestEvent) => {

  const session = await locals.auth()
  const searchSessionEmail = session?.user?.email;
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
    return
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
    }
  }
}) satisfies PageServerLoad;
