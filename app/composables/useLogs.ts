export const useLogs = () => {
    const supabase = useSupabaseClient()
    const count = useState<number>('counter', () => 0)

    // Accept a payload when calling create()
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

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    const reset = () => {
        count.value = 0
    }

    return {
        count,
        create,
        increment,
        decrement,
        reset
    }
}
