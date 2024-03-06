import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import e from '@/edgeql-js';
import { client } from '@/services/edgedb';
import { z } from 'zod';

const schema = z
  .object({
    address: z.string(),
    addressDetail: z.string(),
    city: z.string(),
    country: z.string(),
    zipCode: z.string(),

    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),

    organizerCode: z.string(),

  });

export const load = (async () => {
  const form = superValidate(schema);
  return { form };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);
    const companies = e.select(e.Company, () => ({
      organizerCode: true,
    }))
    .run(client);

    let organizerCodeData = form.data.organizerCode;
    const codeMatched = (await companies).find(companies => companies.organizerCode == organizerCodeData);

    if (!form.valid) {
      return fail(400, { form });
    } else if (form.valid && codeMatched) {
      await e
        .insert(e.Organizer, {
          ...form.data,
        })
        .run(client);
      return { form };
    } else if (form.valid && !codeMatched) {
      await e
        .insert(e.User, {
          ...form.data,
        })
        .run(client);
      return { form };
    }
    
  },
} satisfies Actions;
