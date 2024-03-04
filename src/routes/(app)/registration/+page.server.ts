import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import e from '@/edgeql-js';
import { client } from '@/services/edgedb';
import { z } from 'zod';


const schema = z
  .object({
    // HasAddress
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    passwordHash: z.string(),
    phone: z.string(),

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
      .insert(e.User, {
        ...form.data
      })
      .run(client);

    return { form };
  },
} satisfies Actions;
