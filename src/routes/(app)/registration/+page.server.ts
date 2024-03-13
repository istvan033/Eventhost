import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';
import { z } from 'zod';

const schema = z
  .object({
    address: z.string().min(1),
    addressDetail: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    zipCode: z.string().min(1),

    email: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phone: z.string().min(1),

    organizerCode: z.string(),
  });

export const load = (async () => {
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {

    const form = await superValidate(request, schema);

    const companies = e.select(e.Company, () => ({
      organizerCode: true,
      companyEmail: true,
    }))
    .run(client);

    const organizerCodeData = form.data.organizerCode;
    const codeMatched = (await companies).find(companies => companies.organizerCode == organizerCodeData);

    const email = form.data.email;
    const emailSplit = email.split('@')[1];
    const emailMatched = (await companies).find(companies => companies.companyEmail == emailSplit);

    if (!form.valid || !emailMatched) {
      return fail(400, { form });
    } 
    else if (form.valid && codeMatched && emailMatched) {
      await e
        .insert(e.Organizer, {
          ...form.data,
        })
        .run(client);
    } 
    else if (form.valid && !codeMatched && emailMatched) {
      await e
        .insert(e.User, {
          ...form.data,
        })
        .run(client);
    }

  },
} satisfies Actions;
