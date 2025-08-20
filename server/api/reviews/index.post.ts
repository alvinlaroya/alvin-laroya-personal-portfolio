import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const body = await readBody(event) // reads JSON body
    const { data, error } = await client
        .from('reviews')
        .insert(body)
        .select();

    return data;
})
