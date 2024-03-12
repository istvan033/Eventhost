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
  const searchUserEmail = session?.user?.email;
  const foundUserEmail = (await user).find(user => user.email == searchUserEmail);

  const organizer = e.select(e.Organizer, () => ({
    email: true,
  }))
  .run(client);
  const searchOrganizerEmail = session?.user?.email;
  const foundOrganizerEmail = (await organizer).find(organizer => organizer.email == searchOrganizerEmail);

  const emailFound = foundUserEmail || foundOrganizerEmail

  if (session?.user && !emailFound) {
    throw redirect(307, "/registration")
  }

}) satisfies PageServerLoad;
