import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load: PageServerLoad = async ({ params }) => {
  const event = await e
    .select(e.Event, event => ({
      ...e.Event['*'],
      ticketCount: e.count(event.tickets),
      tickets: true,
      filter_single: { id: e.uuid(params.id) },
    }))
    .run(client);

  if (!event) {
    throw error(404);
  }

  return {
    event
  };
};


