import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';

const schema = z
  .object({
    country: z.string().min(1),
    zipCode: z.string().min(1),
    city: z.string().min(1),
    address: z.string().min(1),
    addressDetail: z.string(),

    title: z.string().min(1),
    description: z.string(),
    startsAt: z.date(),
    endsAt: z.date(),
    startsAtHour: z.string().min(1),
    placeName: z.string().min(1),
    emailValidation: z.string(),
  })
  .refine(data => data.startsAt < data.endsAt, {
    message: 'Event start date must be before end date.',
    path: ['startsAt'],
  });

export const load = (async ({locals, params}) => {

  const session = await locals.auth()

  const sessionEmail = session?.user?.email;
  const sessionEmailString = sessionEmail as string;
  const afterAt = sessionEmail?.split('@')[1];
  const result: string = afterAt as string;

  const organizer = await e
    .select(e.Organizer, () => ({
      email: true,
      id: true,
      filter_single: {email: e.str(sessionEmailString)}
    }))
    .run(client);

  const idMatched = organizer?.id == params.id

  if(organizer && idMatched){
    return {organizer,company: await e
      .select(e.Company, () => ({  
        id: true,
        name: true,
        filter_single: {companyEmail: e.str(result)}
      }))
      .run(client),}
  }
  else{
    throw redirect(307, '/');
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