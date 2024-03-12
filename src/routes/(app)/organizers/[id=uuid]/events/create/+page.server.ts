import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
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
    emailValidation: z.string(),
  })
  .refine(data => data.startsAt < data.endsAt, {
    message: 'Event start date must be before end date.',
    path: ['startsAt'],
  });

export const load = (async ({locals}) => {

  const session = await locals.auth()

  const organizer = await e
    .select(e.Organizer, () => ({
      email: true
    }))
    .run(client);

  const sessionEmail = session?.user?.email;
  const emailMatched = (await organizer).find(organizer => organizer.email == sessionEmail);

  if(!emailMatched){
    throw redirect(307, "/events")
  }
 
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

  },
} satisfies Actions;