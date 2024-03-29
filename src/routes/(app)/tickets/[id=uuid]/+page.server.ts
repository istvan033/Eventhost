import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';

export const load = (async ({ params }) => {
  return {
    tickets: await e
      .select(e.Ticket, () => ({
        ...e.Ticket['*'],
        filter_single: { id: e.uuid(params.id) },
      }))
      .run(client)
      
  };
}) satisfies PageServerLoad;
