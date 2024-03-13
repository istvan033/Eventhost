import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load: PageServerLoad = async ({ params, locals }) => {

  const session = await locals.auth()
  const sessionEmail = session?.user?.email;
  const afterAt = sessionEmail?.split('@')[1];
  const result: string = afterAt as string;

  const event = await e
    .select(e.Event, () => ({
      ...e.Event['*'],
      filter_single: { id: e.uuid(params.id) },
    }))
    .run(client);
    
  const emailMatched = event?.emailValidation == result;

  if(emailMatched){
    return {
      event
    };
  }
  else if(!event || !emailMatched) {
    throw error(404);
  }

};


