import { fail, redirect } from "@sveltejs/kit"
import type { PageData, RequestEvent } from "./$types"
import e from '@/edgeql-js';
import type { PageServerLoad, Actions } from './$types';
import { z } from 'zod';

import { superValidate } from 'sveltekit-superforms/server';
import { client } from "@/lib/server/edgedb";

const schema = z.object({
    email: z.string(),
});

export const load = (async ({locals}: RequestEvent) => {
  const session = await locals.auth()
  const user = e.select(e.User, user => ({
    email: true,
  }))
  .run(client);

  const searchEmail = session?.user?.email;
  const foundEmail = (await user).find(user => user.email == searchEmail);

  const form = superValidate(schema);

  if (session?.user && !foundEmail) {
    throw redirect(307, "/registration")
  }


  

  return { 
    user,
    form,
  };
}) satisfies PageServerLoad;
