<script setup>
const config = useRuntimeConfig();
if (config.public.environment === 'production') navigateTo('/');

const from = ref(0);
const to = ref(25);
const { data, status, refresh } = await useFetch('/api/action_logs', {
    query: computed(() => ({
        from: from.value,
        to: to.value
    }))
})
const loadMoreHandler = () => to.value = to.value + 25;

const { read } = useLogs();
const isReading = ref(false);
const currentLogReading = ref(null);
const readHandler = async (id, unread) => {
    if (!unread) return;

    currentLogReading.value = id;
    isReading.value = true;
    await read(id);
    await refresh();
    currentLogReading.value = null;
    isReading.value = false;
}

const logs = computed(() => data.value.logs.data);
const count = computed(() => data.value.logs.count);
const unreadCount = computed(() => data.value.logs.unreadCount);

// Group logs by date
const groupedLogs = computed(() => {
    const groups = {};

    logs.value?.forEach(log => {
        const date = new Date(log.created_at).toDateString();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(log);
    });

    return groups;
});
// Get sorted date keys
const sortedDates = computed(() => {
    return Object.keys(groupedLogs.value).sort((a, b) => new Date(b) - new Date(a));
});

// Format date for display
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};
</script>


<template>
    <main class="flex-1 min-h-screen px-2 py-4 flex flex-col space-y-4">
        <div class="w-full flex justify-between bg-[#03101d] p-4 rounded-lg">
            <h2>Logs History</h2>
            <div class="flex space-x-3">
                <UBadge color="secondary" class="text-white">{{ count }} total logs</UBadge>
                <UBadge v-if="unreadCount > 0" color="error" class="text-white">{{ unreadCount }} unread</UBadge>
            </div>
        </div>
        <div class="flex flex-col w-full px-1">
            <div v-for="date in sortedDates" :key="date" class="mb-4">
                <!-- Date Separator -->
                <div class="flex items-center my-6">
                    <div class="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
                    <div class="px-4 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900">
                        {{ formatDate(date) }}
                    </div>
                    <div class="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
                </div>

                <!-- Logs for this date -->
                <div v-for="log in groupedLogs[date]" :key="log.id">
                    <div @click="readHandler(log.id, log.unread)"
                        class="flex flex-row justify-between items-center w-full py-2 px-2 cursor-pointer hover:bg-gray-800"
                        :class="{
                            'bg-[#03101d] border-l-primary border-l-1': log.unread,
                            'bg-base': !log.unread,
                        }">

                        <div class="flex flex-row space-x-4 items-center w-full">
                            <Icon v-if="currentLogReading === log.id && isReading" name="lucide:loader-circle"
                                class="text-primary text-xl my-1.5 mr-4.5" />
                            <div v-else class="flex items-center ml-2">
                                <Icon v-if="log.action === 'download_cv'" name="lucide:download" size="1.4rem"
                                    class="text-primary" />
                                <Icon
                                    v-if="log.action === 'view_project' || log.action === 'view_reviews' || log.action === 'view_experience'"
                                    name="lucide:eye" size="1.4rem" class="text-primary" />
                                <Icon v-if="log.action === 'chat_bot'" name="lucide:bot" size="1.4rem"
                                    class="text-primary" />
                            </div>
                            <p style="margin-left: 0.5rem">{{ log.description }}</p>
                        </div>
                        <span class="text-gray-500 text-xs">
                            {{ new Date(log.created_at).toLocaleTimeString('en-US', {
                                hour12: false,
                                hour: '2-digit',
                                minute: '2-digit'
                            }) + (new Date(log.created_at).getHours() >= 12 ? 'PM' : 'AM') }}
                        </span>
                    </div>
                    <USeparator />
                </div>
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