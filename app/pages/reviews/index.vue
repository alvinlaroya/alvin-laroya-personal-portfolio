<script setup>
import ReviewForm from '~/components/ReviewForm.vue';

const openModal = ref(false);
const openReviewModal = () => openModal.value = !openModal.value;

provide('open', openModal)

const from = ref(0);
const to = ref(6);
const { data, status, refresh } = await useFetch('/api/reviews', {
    query: computed(() => ({
        from: from.value,
        to: to.value
    }))
})
const reviews = computed(() => data.value.reviews.data);
const count = computed(() => data.value.reviews.count);

const filters = ref(['New to Old', 'Old to New', 'Top Voted'])
const selectedFilters = ref('New to Old')

const submitReviewHandler = () => {
    refresh();
    openModal.value = false;
}

const loadMoreHandle = () => {
    to.value = to.value + 7
}

const deleteReviewHandler = () => refresh();

const developmentModal = ref(true);
</script>

<template>
    <main class="flex-1 min-h-screen p-4 lg:pr-4 flex flex-col space-y-9">
        <div class="p-4">
            <div class="bg-[#021526] md:bg-[#03101d] p-2 sticky top-14 z-50">
                <div class="flex flex-col md:flex-row justify-between items-end md:items-center">
                    <UButton @click="openReviewModal" icon="i-lucide-plus" size="sm" color="secondary" variant="solid"
                        class="cursor-pointer w-full md:w-auto text-xs">
                        Write a review</UButton>
                    <h2 class="text-xs mt-1 md:mt-0 order-1 md:order-0">Reviews <span class="text-secondary">({{ count
                            }}
                            total)</span></h2>
                    <USelect v-model="selectedFilters" color="ghost" highlight :items="filters"
                        class="w-full mt-2 md:mt-0 md:w-48 order-0 md:order-1 text-xs" />
                </div>
            </div>
            <div class="flex flex-col space-y-3 py-4">
                <ReviewCard v-for="review in reviews" :key="review.id" :id="review.id" :reviewed_by="review.reviewed_by"
                    :likes="review.likes" :message="review.message" @delete="deleteReviewHandler"
                    @like="() => refresh()" />
                <ReviewCardSkeleton v-if="status === 'pending'" />
                <div class="flex justify-center">
                    <UButton v-show="count > to" @click="loadMoreHandle" :loading="status === 'pending'"
                        :disabled="status === 'pending'" size="lg" color="primary" variant="solid"
                        class="w-64 flex justify-center cursor-pointer">Load
                        More
                    </UButton>
                </div>
            </div>
        </div>
        <ReviewForm @submit="submitReviewHandler" />
        <UModal :open="developmentModal">
            <template #content>
                <div class="p-4">
                    <h2 class="mb-1">Notice</h2>
                    <p class="mb-3 text-sm text-gray-400">Server endpoints on Netlify are having issues. Reviews page is
                        in development mode.</p>
                    <div class="flex space-x-4 justify-end">
                        <NuxtLink to="/" class="text-primary underline">Back to home</NuxtLink>
                        <UButton @click="() => developmentModal = false" size="sm" color="error" variant="solid" class="flex cursor-pointer">
                            Close
                        </UButton>
                    </div>
                </div>
            </template>
        </UModal>
    </main>
</template>