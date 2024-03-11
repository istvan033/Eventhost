import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
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
    const emailMatched = company?.companyEmail.includes(afterAtString)
    if(emailMatched) {
        return {
            company
        };
    }
    else if (!company || !emailMatched) {
        throw error(404);
    }
};


