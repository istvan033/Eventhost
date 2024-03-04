import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types"
import e from '@/edgeql-js';
import type { PageServerLoad } from './$types';
import { client } from "@/lib/server/edgedb";

export const load = (async ({locals}: RequestEvent) => {
  const session = await locals.auth()
  const user = e.select(e.User, () => ({
    email: true,
  }))
  .run(client);

  const searchEmail = session?.user?.email;
  const foundEmail = (await user).find(user => user.email == searchEmail);

  if (session?.user && !foundEmail) {
    throw redirect(307, "/registration")
  }

  return { 
    user
  };
}) satisfies PageServerLoad;
