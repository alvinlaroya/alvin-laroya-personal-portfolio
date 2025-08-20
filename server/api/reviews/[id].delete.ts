import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    try {
        const client = await serverSupabaseClient(event)
        const id = getRouterParam(event, 'id') as string

        const { error } = await client
            .from('reviews')
            .delete()
            .eq('id', id)

        if (error) {
            throw createError({
                statusCode: 500,
                statusMessage: error.message
            })
        }

        return { success: true, message: 'Review deleted successfully' }

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to delete review'
        })
    }
})