import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const id = getRouterParam(event, 'id') as string;
    await client
        .from('reviews')
        .delete()
        .eq('id', id)
})
