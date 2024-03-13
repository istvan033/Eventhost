import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';
import { error } from 'console';

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
  .refine(data => data.startsAt < data.endsAt, {
    message: 'Event start date must be before end date.',
    path: ['startsAt'],
  });

export const load = (async ({ params, locals }) => {

  const session = await locals.auth();
  const sessionEmail = session?.user?.email;

  const organizer = e.select(e.Organizer, () => ({
    email: true,
    id: true,
  }))
  .run(client);
  const foundOrganizerEmail = (await organizer).find(organizer => organizer.email == sessionEmail);

  const event = await e
    .select(e.Event, () => ({
      ...e.Event['*'],
      filter_single: { id: params.id },
    }))
    .run(client);

  const afterAt = sessionEmail?.split('@')[1];
  const afterAtString: string = afterAt as string;
  const emailMatched = event?.emailValidation.includes(afterAtString)

  const pageRequirementsPassed = emailMatched && foundOrganizerEmail;

  if(pageRequirementsPassed){
    return { event };
  }
  else {
    throw error(404)
  }

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

  },

} satisfies Actions;
