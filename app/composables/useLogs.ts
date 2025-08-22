export const useLogs = () => {
    const supabase = useSupabaseClient()
    const create = async (payload: { action: string; description: string }) => {
        const { data, error } = await supabase
            .from('logs')
            .insert({
                action: payload.action,
                description: payload.description
            })

        if (error) {
            console.error('Error inserting log:', error.message)
            throw error
        }

        return data
    }

    return {
        create
    }
}
