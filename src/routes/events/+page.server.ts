import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load = (async () => {
  return {
    events: await e
      .select(e.Event, () => ({
        id: true,
        title: true,

        startsAt: true,
        endsAt: true,

        organizer: { name: true },
      }))
      .run(client),
  };
}) satisfies PageServerLoad;