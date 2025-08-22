<script setup>
const route = useRoute();

if (route.params.key !== 'alvin') navigateTo('/')

definePageMeta({
    layout: 'cms'
})
</script>

<template>
    <main class="flex-1 min-h-screen p-4 lg:pr-4 flex flex-col space-y-9">
        <div>
            <h2>CMS SECTION</h2>
        </div>
    </main>
</template>