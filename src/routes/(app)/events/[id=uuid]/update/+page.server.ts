import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e, { params } from '@/edgeql-js';
import { client } from '@/services/edgedb';

const schema = z
  .object({
    // HasAddress
    country: z.string(),
    // zipCode: z.string(),
    // city: z.string(),
    // address: z.string(),
    // addressDetail: z.string(),

    // title: z.string(),
    // // description: z.string(),
    // // startsAt: z.date(),
    // // endsAt: z.date(),
    // // placeName: z.string(),
  })
//   .refine(data => data.startsAt < data.endsAt, {
//     message: 'Event start date must be before end date.',
//     path: ['startsAt'],
//   });

export const load = (async ({ params }) => {
  const event = await e
    .select(e.Event, () => ({
      ...e.Event['*'],
      filter_single: { id: params.id },
    }))
    .run(client);

  const form = superValidate(schema);

  return { form, event };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, params }) => {
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    e.update(e.Event, () => ({
      filter_single: { id: e.uuid(params.id) },
      set: {
        country: "Avengers: Endgame"
      }
    }))
  },
} satisfies Actions;
