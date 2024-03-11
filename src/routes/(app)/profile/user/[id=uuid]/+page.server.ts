import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
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
    const sessionEmailString = sessionEmail as string
    const emailMatched = user?.email.includes(sessionEmailString)
    if(emailMatched) {
        return {
            user
        };
    }
    else if (!user || !emailMatched) {
        throw error(404);
    }
};


