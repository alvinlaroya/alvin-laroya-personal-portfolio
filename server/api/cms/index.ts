import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error } = await client
        .from('cms_profile')
        .select('*')
        .limit(1)
        .single()

    return data;
})