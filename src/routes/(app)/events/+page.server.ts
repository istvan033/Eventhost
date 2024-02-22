import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';
import { json, error, redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types"


export const load = (async ({ locals }: RequestEvent) => {
  const session = await locals.auth()
  if (!session?.user) {
    throw redirect(307, '/');
  }
  else {
    return {
      event: await e
        .select(e.Event, () => ({
          id: true,
          title: true,
          placeName: true,
          startsAt: true,
          endsAt: true,
  
          organizer: { name: true },
        }))
        .run(client),
    };
  }
}) satisfies PageServerLoad;

