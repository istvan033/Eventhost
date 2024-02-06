import type { PageServerLoad, Actions, PageData } from './$types';
import { fail, error, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { randomBytes } from 'crypto';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';



const schema = z
  .object({
    fullName: z.string(),
    email: z.string(),
    firstName: z.string(),
    inviteCode: z.string(),
    lastName: z.string(),
    phone: z.string(),
  });

  export const load = (async ({ params }) => {
    const event = await e
      .select(e.Event, () => ({
        ...e.Event['*'],
        filter_single: { id: params.id },
      }))
      .run(client);
  
    const form = superValidate(schema);
  
    if (event === null) {
      throw error(404, { message: 'Not found' });
    }
  
    return { form, event };
  }) satisfies PageServerLoad;

  export const actions = {
    default: async ({ request, params }) => {
      const formData = await request.formData();
      const form = await superValidate(formData, schema);
  
      if (!form.valid) {
        return fail(400, { form });
      }
  
      const {
        fullName,
        email,
        firstName,
        inviteCode,
        lastName,
        phone,
        ...fillFields
      } = form.data;

    await e
    .insert(e.Ticket, {
      token: randomBytes(32).toString('base64url').slice(0, 32),
      ...fillFields,
      fullName: fullName || '',
      email: email || '',
      firstName: firstName || '',
      inviteCode: inviteCode || '',
      lastName: lastName || '',
      phone: phone || '',
      
      event: e.select(e.Event, () => ({
        filter_single: { id: e.uuid(params.id) },
      })),
    })
    .run(client);

    throw redirect(302, `/events/${params.id}/tickets`);
  },
} satisfies Actions;

