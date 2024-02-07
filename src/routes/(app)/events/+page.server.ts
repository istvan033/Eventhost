import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';
import { json, error } from "@sveltejs/kit"
import type { RequestEvent } from "./$types"

export const load = (async () => {
  return {
    event: await e
      .select(e.Event, () => ({
        id: true,
        title: true,
        placeName: true,
        startsAt: true,
        endsAt: true,

        organizer: { name: true },
      }))
      .run(client),
  };
}) satisfies PageServerLoad;

export async function GET({ locals }: RequestEvent) {
  const session = await locals.auth()
  if (!session?.user) {
    throw error(401, "You must sign in to view movies.")
  }

  return json({
    movies: [
      { title: "Alien vs Predator", id: 1 },
      { title: "Reservoir Dogs", id: 2 },
    ],
  })
}