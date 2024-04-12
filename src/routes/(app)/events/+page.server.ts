import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';
import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types"


export const load = (async ({ locals }: RequestEvent) => {

  const session = await locals.auth()
  const sessionEmail = session?.user?.email;
  const afterAt = sessionEmail?.split('@')[1];
  const result: string = afterAt as string;
  const searchSessionEmailString = sessionEmail as string;

    const organizer = e.select(e.Organizer, () => ({
      email: true,
      id: true,
      filter_single: {email: e.str(searchSessionEmailString)}
    }))
    .run(client);
    const user = e.select(e.User, () => ({
      email: true,
      id: true,
      filter_single: {email: e.str(searchSessionEmailString)}
    }))
    .run(client);

  if (session?.user) {
    return {
      event: await e
        .select(e.Event, (event) => ({
          id: true,
          title: true,
          placeName: true,
          startsAt: true,
          endsAt: true,
          description: true,
          createdAt: true,
          organizer: {firstName: true, lastName: true},
          emailValidation: true,
          filter: e.op(event.emailValidation, '=', result)
        }))
        .run(client),
      organizer,
      user
    };
  }
  else {
    throw redirect(307, '/');
  }
  
}) satisfies PageServerLoad;

