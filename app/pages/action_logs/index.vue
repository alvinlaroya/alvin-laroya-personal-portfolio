<script setup>
const from = ref(0);
const to = ref(25);
const { data, status, refresh } = await useFetch('/api/logs', {
    query: computed(() => ({
        from: from.value,
        to: to.value
    }))
})
const loadMoreHandler = () => to.value = to.value + 25;

const logs = computed(() => data.value.logs.data);
const count = computed(() => data.value.logs.count);
</script>


<template>
    <main class="flex-1 min-h-screen px-2 py-4 flex flex-col space-y-4">
        <div class="w-full flex justify-between bg-[#03101d] p-4 rounded-lg">
            <h2>Logs History</h2>
            <UBadge color="error" class="text-white">{{ count }}</UBadge>
        </div>
        <div class="flex flex-col w-full px-1">
            <div v-for="log in logs" :key="log.id">
                <div class="flex flex-row justify-between items-center w-full py-2">
                    <div class="flex flex-row space-x-4 items-center w-full">
                        <Icon v-if="log.action === 'download_cv'" name="lucide:download" size="1.4rem"
                            class="text-primary" />
                        <Icon
                            v-if="log.action === 'view_project' || log.action === 'view_reviews' || log.action === 'view_experience'"
                            name="lucide:eye" size="1.4rem" class="text-primary" />
                        <Icon v-if="log.action === 'chat_bot'" name="lucide:bot" size="1.4rem" class="text-primary" />
                        <p style="margin-left: 1rem">{{ log.description }}</p>
                    </div>
                    <span class="text-gray-500 text-xs">{{ new Date(log.created_at).toLocaleString() }}</span>
                </div>
                <USeparator />
            </div>
            <div v-if="count <= data.logs.data.length" class="text-center pt-4 pb-2 text-gray-400">End of results.</div>
            <UButton v-if="count > data.logs.data.length"
                class="w-full flex items-center justify-center cursor-pointer mt-4" @click="loadMoreHandler"
                :loading="status === 'pending'">Load
                more
            </UButton>
        </div>
    </main>
</template>