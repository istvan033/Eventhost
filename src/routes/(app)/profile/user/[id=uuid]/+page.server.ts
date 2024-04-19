import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load: PageServerLoad = async ({ params, locals }) => {

    const session = await locals.auth()

    const user = await e
        .select(e.User, () => ({
        ...e.User['*'],
        filter_single: { id: e.uuid(params.id) },
        }))
        .run(client);

    const sessionEmail = session?.user?.email;

    const sessionEmailString = sessionEmail as string;
    const emailMatched = user?.email == sessionEmailString;
    const afterAt = sessionEmail?.split('@')[1];
  const result: string = afterAt as string;

    if(emailMatched) {
        return {
            user,company: await e
            .select(e.Company, () => ({  
              id: true,
              name: true,
              filter_single: {companyEmail: e.str(result)}
            }))
            .run(client),
        };
    }
    else if (!user || !emailMatched) {
        throw redirect(307, '/');
    }
    
};


