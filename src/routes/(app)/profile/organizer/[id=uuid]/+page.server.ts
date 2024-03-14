import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import e from '@/edgeql-js';
import { client } from '$lib/server/edgedb';

export const load: PageServerLoad = async ({ params, locals }) => {

    const session = await locals.auth()

    const organizer = await e
        .select(e.Organizer, () => ({
        ...e.Organizer['*'],
        filter_single: { id: e.uuid(params.id) },
        }))
        .run(client);

    const sessionEmail = session?.user?.email;

    const sessionEmailString = sessionEmail as string
    const emailMatched = organizer?.email == sessionEmailString

    if(emailMatched) {
        return {
            organizer
        };
    }
    else if (!organizer || !emailMatched) {
        throw error(404);
    }
    
};


