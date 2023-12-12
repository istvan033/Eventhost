import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';

const schema = z
  .object({
    // HasAddress
    country: z.string().min(2).max(2),
    zipCode: z.string(),
    city: z.string(),
    address: z.string(),
    addressDetail: z.string(),

    // HasTimestamps
    createdAt: z.date(),
    updatedAt: z.date(),

    title: z.string(),
    description: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    placeName: z.string().nonempty(),
  })
  .refine(data => data.startsAt < data.endsAt, {
    message: 'Event start date must be before end date.',
    path: ['startsAt'],
  });

export const load = (async () => {
  const form = superValidate(schema);
  return { form };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, params }) => {
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    await e
      .insert(e.Event, {
        ...form.data,
        organizer: e.select(e.Organizer, () => ({
          filter_single: { id: e.uuid(params.id) },
        })),
      })
      .run(client);

    return { form };
  },
} satisfies Actions;
