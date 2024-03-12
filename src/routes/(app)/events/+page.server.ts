import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';
import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types"


export const load = (async ({ locals }: RequestEvent) => {

  const session = await locals.auth()

  if (session?.user) {

    const sessionEmail = session?.user?.email;
    const afterAt = sessionEmail?.split('@')[1];
    const result: string = afterAt as string;

    return {
      event: await e
        .select(e.Event, (event) => ({
          id: true,
          title: true,
          placeName: true,
          startsAt: true,
          endsAt: true,
          organizer: {firstName: true, lastName: true},
          emailValidation: true,
          filter: e.op(event.emailValidation, '=', result)
        }))
        .run(client),
    };
  }

  else {
    throw redirect(307, '/');
  }
  
}) satisfies PageServerLoad;

