import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';
import { randomBytes } from 'crypto';

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),

  email: z.string().email(),
  phone: z.string().nonempty(),

  inviteCode: z.string().nonempty(),
  note: z.string().optional(),
  organizationName: z.string().optional(),

  gdprAccepted: z.boolean(),
  newsletterSubscribed: z.boolean(),
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

    // TODO: validate inviteCode

    await e
      .insert(e.Ticket, {
        token: randomBytes(128).toString('base64').slice(0, 128),
        ...form.data,
        event: e.select(e.Event, () => ({
          filter_single: { id: e.uuid(params.id) },
        })),
      })
      .run(client);

    return { form };
  },
} satisfies Actions;
