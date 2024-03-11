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

    companyEmail: z.string(),
    description: z.string(),
    euTaxNumber: z.string(),
    name: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    linkedin: z.string(),
    threads: z.string(),
    tiktok: z.string(),
    website: z.string(),
    organizerCode: z.string(),
  })

export const load = (async ({ params, locals }) => {
    const session = await locals.auth()
    const company = await e
        .select(e.Company, () => ({
        ...e.Company['*'],
        filter_single: { id: e.uuid(params.id) },
        }))
        .run(client);
    const sessionEmail = session?.user?.email;
    const stringSessionEmail = sessionEmail as string;
    const afterAt = sessionEmail?.split('@')[1];
    const afterAtString: string = afterAt as string;
    const emailMatched = company?.companyEmail.includes(afterAtString)
    const organizer = await e
        .select(e.Organizer, () => ({
        email: true,
        filter_single: {email: stringSessionEmail}
        }))
        .run(client);
    const organizerEmailMatched = organizer?.email == sessionEmail
    
    if(emailMatched && organizerEmailMatched) {
        return {
            company
        };
    }
    else if (!company || !emailMatched || !organizerEmailMatched) {
        throw error(404);
    }

  const form = superValidate(schema);

  return { form, company };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, params }) => {
    const form = await superValidate(request, schema);

    if (!form.valid) {
      return fail(400, { form });
    }

    const companies = e.update(e.Company, (company) => ({
      filter_single: { id: e.uuid(params.id) },
      set: {
        country: form.data.country,
        zipCode: form.data.zipCode,
        city: form.data.city,
        address: form.data.address,
        addressDetail: form.data.addressDetail,

        companyEmail: form.data.companyEmail,
        description: form.data.description,
        euTaxNumber: form.data.euTaxNumber,
        name: form.data.name,
        facebook: form.data.facebook,
        instagram: form.data.instagram,
        linkedin: form.data.linkedin,
        threads: form.data.threads,
        tiktok: form.data.tiktok,
        website: form.data.website,
        organizerCode: form.data.organizerCode,
      },
    }))
    .run(client);

    return {form, companies}
  },
} satisfies Actions;
