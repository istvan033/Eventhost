import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';

const schema = z
  .object({
    country: z.string(),
    zipCode: z.string(),
    city: z.string(),
    address: z.string(),
    addressDetail: z.string(),

    title: z.string(),
    description: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    placeName: z.string(),
    emailValidation: z.string()
  })

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

    const events = e.update(e.Event, (event) => ({
      filter_single: { id: e.uuid(params.id) },
      set: {
        country: form.data.country,
        zipCode: form.data.zipCode,
        city: form.data.city,
        address: form.data.address,
        addressDetail: form.data.addressDetail,

        title: form.data.title,
        description: form.data.description,
        startsAt: form.data.startsAt,
        endsAt: form.data.endsAt,
        placeName: form.data.placeName,
        emailValidation: form.data.emailValidation,
      },
    }))
    .run(client);

    return {form, events}
  },
} satisfies Actions;
