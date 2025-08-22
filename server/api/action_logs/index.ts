import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    // Get specific query parameter
    const from = getQuery(event).from as string;
    const to = getQuery(event).to as string;

    const { data, count } = await client.
        from('logs')
        .select('*', { count: 'exact' })
        .range(parseInt(from), parseInt(to))
        .order('created_at', { ascending: false })

    return {
        logs: {
            data,
            count
        }
    }
})