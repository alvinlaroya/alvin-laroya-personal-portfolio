<script setup lang="ts">
type ReviewProps = {
    id: number;
    reviewed_by: string;
    message: string;
}

const admin = inject('admin');

const {
    id = 0,
    reviewed_by = "Alvin Laroya",
    message = "Sample revew",
} = defineProps<ReviewProps>();

const emit = defineEmits(['delete'])
const isDeleting = ref(false);
const toast = useToast();
const deleteReview = async () => {
    isDeleting.value = true;
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
    }
}
</script>

<template>
    <div style="background-color: #03101d;"
        class="rounded-2xl py-4 px-7 shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col">

        <!-- Testimonial Text -->
        <p class="text-gray-400 text-xs leading-relaxed mb-3">
            "{{ message }}"
        </p>

        <!-- Author Info with Avatar -->
        <div class="flex items-center gap-4">
            <div class="flex justify-between w-full items-center">
                <h4 class="font-semibold text-sm" style="color: white">
                    {{ reviewed_by }}
                </h4>
                <UButton v-if="admin" @click="deleteReview" :loading="isDeleting" :disabled="isDeleting"
                    icon="i-lucide-trash" size="sm" color="error" variant="solid" class="text-white cursor-pointer">
                </UButton>
            </div>
        </div>
    </div>
</template>