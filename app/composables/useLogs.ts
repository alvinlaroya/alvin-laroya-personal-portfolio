export const useLogs = () => {
    const config = useRuntimeConfig();
    const supabase = useSupabaseClient();

    const create = async (payload: { action: string; description: string }) => {
        if (config.public.environment === 'develop') return;
        
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
