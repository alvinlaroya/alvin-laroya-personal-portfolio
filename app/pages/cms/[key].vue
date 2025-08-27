<script setup>
const route = useRoute();

if (route.params.key !== 'alvin') navigateTo('/')

definePageMeta({
    layout: 'cms'
})
</script>

<template>
    <main class="flex-1 min-w-0 p-4 lg:pl-4 flex flex-col space-y-9">
        <div>
            <h2>CMS SECTION</h2>
        </div>
    </main>
</template>