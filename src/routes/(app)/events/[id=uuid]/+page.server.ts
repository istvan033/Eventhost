import type { PageServerLoad, Actions } from './$types';
import { error } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
  title: z.string(),
  
});

export const load: PageServerLoad = async ({ params }) => {
  const event = await e
    .select(e.Event, event => ({
      ...e.Event['*'],
      ticketCount: e.count(event.tickets),
      tickets: true,
      filter_single: { id: e.uuid(params.id) },
    }))
    .run(client);

  const form = superValidate(schema);

  if (!event) {
    throw error(404, {
      message: 'Esemény nem található.',
    });
  }

  return {
    event,
    form,
  };
};


