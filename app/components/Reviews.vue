<script setup>
const { data, status, refresh } = await useFetch('/api/reviews?from=0&to=2')
const reviews = computed(() => data.value.reviews.data);
const count = computed(() => data.value.reviews.count);
</script>


<template>
    <div>
        <h2 class="text-xl font-semibold mb-1">
            Portfolio Reviews
        </h2>
        <div class="flex justify-between">
            <p class="text-gray-600 mb-7">
                What people say about my portfolio.
            </p>
            <UButton label="View all" to="/reviews" size="sm" class="h-8" />
        </div>

        <div class="grid grid-cols-1">
            <blockquote v-for="review in reviews" :key="review.id"
                class="border-l-2 border-gray-500 italic my-6 pl-4 md:pl-8 py-4 mx-3">
                <p class="text-[16px] font-normal text-white">
                    {{ review?.message || '' }}
                </p>
                <div class="flex justify-between" :class="{ 'justify-end': review.likes <= 0 }">
                    <div v-show="review.likes > 0" class="flex space-x-2 text-gray-400 text-xs items-center">
                        <Icon name="lucide:arrow-big-up" size="1.2rem" />
                        <span>{{ review.likes }} upvotes</span>
                    </div>
                    <cite class="block text-right mt-4 text-gray-600">- {{ review?.reviewed_by || '' }}</cite>
                </div>
            </blockquote>
        </div>
    </div>
</template>