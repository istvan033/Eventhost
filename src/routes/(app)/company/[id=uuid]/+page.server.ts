import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load: PageServerLoad = async ({ params, locals }) => {

    const session = await locals.auth()

    const company = await e
        .select(e.Company, () => ({
        ...e.Company['*'],
        filter_single: { id: e.uuid(params.id) },
        }))
        .run(client);

    const sessionEmail = session?.user?.email;
    const afterAt = sessionEmail?.split('@')[1];
    const afterAtString: string = afterAt as string;
    const emailMatched = company?.companyEmail.includes(afterAtString);
    const searchSessionEmailString = sessionEmail as string;

    const organizer = e.select(e.Organizer, () => ({
        email: true,
        id: true,
        filter_single: {email: e.str(searchSessionEmailString)}
      }))
      .run(client);
    const user = e.select(e.User, () => ({
        email: true,
        id: true,
        filter_single: {email: e.str(searchSessionEmailString)}
      }))
      .run(client);

    if(emailMatched) {
        return {
            company,
            organizer,
            user
        };
    }

    else if (!company || !emailMatched) {
        throw redirect(307, "/");
    }
    
};


