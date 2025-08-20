<script setup>
import ReviewForm from '~/components/ReviewForm.vue';

const openModal = ref(false);
const openReviewModal = () => openModal.value = !openModal.value;

provide('open', openModal)

const from = ref(0);
const to = ref(7);
const { data, status, refresh } = await useFetch('/api/reviews', {
    query: computed(() => ({
        from: from.value,
        to: to.value
    }))
})
const reviews = computed(() => data.value.reviews.data);
const count = computed(() => data.value.reviews.count);

const submitReviewHandler = () => {
    refresh();
    openModal.value = false;
}

const loadMoreHandle = () => {
    to.value = to.value + 7
}

const deleteReviewHandler = () => refresh();
</script>

<template>
    <main class="flex-1 min-h-screen p-4 lg:pr-4 flex flex-col space-y-9">
        <div class="p-4">
            <div class="flex justify-between">
                <h2 class="text-sm">Reviews ({{ count }} total)</h2>
                <UButton @click="openReviewModal" icon="i-lucide-plus" size="md" color="secondary" variant="solid">
                    Create a review</UButton>
            </div>
            <div class="flex flex-col space-y-4 py-4">
                <ReviewCard v-for="review in reviews" :key="review.id" :id="review.id" :reviewed_by="review.reviewed_by"
                    :message="review.message" @delete="deleteReviewHandler" />
                <div class="flex justify-center">
                    <UButton @click="loadMoreHandle" :loading="status === 'pending'" :disabled="status === 'pending'"
                        size="lg" color="primary" variant="solid" class="w-64 flex justify-center cursor-pointer">Load
                        More
                    </UButton>
                </div>
            </div>
        </div>
        <ReviewForm @submit="submitReviewHandler" />
    </main>
</template>