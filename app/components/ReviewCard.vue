<script setup lang="ts">
type ReviewProps = {
    id: number;
    reviewed_by: string;
    message: string;
    likes: number;
}

const admin = inject('admin');

const {
    id = 0,
    reviewed_by = "Alvin Laroya",
    message = "Sample revew",
    likes = 0
} = defineProps<ReviewProps>();


const supabase = useSupabaseClient();
const emit = defineEmits(['delete', 'like'])
const isDeleting = ref(false);
const toast = useToast();
const deleteReview = async () => {
    isDeleting.value = true;
    try {
        const { error } = await supabase
            .from('reviews')
            .delete()
            .eq('id', id)

        if (error) {
            return toast.add({
                title: 'Error',
                description: error,
                color: 'error'
            });
        }

        isDeleting.value = false;
        emit('delete');
        toast.add({
            title: 'Success',
            description: 'Review deleted successfully',
            color: 'primary'
        });
    } catch (error) {
        if (error) {
            toast.add({
                title: 'Error',
                description: error,
                color: 'error'
            });
        }
    }
    /* TEMPORARY UNUSED DUE TO NETLIFY NITRO SERVER ISSUE
    try {
        await $fetch(`/api/reviews/${id}`, {
            method: 'DELETE'
        })

        isDeleting.value = false;
        toast.add({
            title: 'Deleted',
            description: 'Succesfuly deleted item.',
            color: 'primary'
        });
        emit('delete');
    } catch (error) {
        console.log("Error deleting review", error)
    } */
}

const isLiking = ref(false);
const incrementLikeHandler = async () => {
    isLiking.value = true;
    const { data, error } = await supabase
        .rpc('increment_likes', { row_id: id })

    emit('like');
    isLiking.value = false;

    if (error) {
        console.error('Error:', error)
    } else {
        console.log('Likes incremented successfully')
    }
}
</script>

<template>
    <div class="rounded-lg shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col">
        <div class="my-3">
            <!-- Testimonial Text -->
            <p class="text-white text-sm font-light leading-relaxed mb-3">
                "{{ message }}"
            </p>

            <!-- Author Info with Avatar -->
            <div class="flex items-center gap-4">
                <div class="flex justify-between w-full items-center">
                    <UButton @click="incrementLikeHandler" :loading="isLiking" :disabled="isLiking"
                        icon="i-lucide-thumbs-up" size="sm" color="primary" variant="ghost">{{ likes }}
                    </UButton>
                    <div class="flex items-center space-x-4">
                        <h4 class="font-normal text-xs text-gray-400">
                            - {{ reviewed_by }}
                        </h4>
                        <UButton v-if="admin" @click="deleteReview" :loading="isDeleting" :disabled="isDeleting"
                            icon="i-lucide-trash" size="sm" color="error" variant="solid"
                            class="text-white cursor-pointer">
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <USeparator />
    </div>
</template>