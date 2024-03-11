import type { PageServerLoad, Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
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

    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    organizerCode: z.string(),

  })

export const load = (async ({ params, locals }) => {
    const session = await locals.auth()
    const sessionEmail = session?.user?.email;
    const stringSessionEmail = sessionEmail as string;
    const user = await e
        .select(e.User, () => ({
        ...e.User['*'],
        filter_single: {email: stringSessionEmail}
        }))
        .run(client);
    const userEmailMatched = user?.email == sessionEmail
    
    if(userEmailMatched) {
        return {
            user
        };
    }
    else if (!user || !userEmailMatched) {
        throw error(404);
    }

  const form = superValidate(schema);

  return { form, user };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, params }) => {
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    const user = e.update(e.User, (user) => ({
      filter_single: { id: e.uuid(params.id) },
      set: {
        country: form.data.country,
        zipCode: form.data.zipCode,
        city: form.data.city,
        address: form.data.address,
        addressDetail: form.data.addressDetail,

        email: form.data.email,
        firstName: form.data.firstName,
        lastName: form.data.lastName,
        phone: form.data.phone,
        organizerCode: form.data.organizerCode,
      },
    }))
    .run(client);

    return {form, user}
  },
} satisfies Actions;
