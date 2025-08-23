import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    await client
        .from('logs')
        .insert({
            action: 'view_site',
            description: 'Someone viewed your portfolio'
        })
})