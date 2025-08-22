<script setup>
const { data, status, refresh } = await useFetch('/api/cms')
provide('profile', data)
</script>

<template>
    <div class="w-full bg-[#021526] text-[#eee] scroll-smooth">
        <Header :isCms="true" />
        <div class="max-w-screen-lg mx-auto">
            <!-- Container for Sidebar and Main Content -->
            <div class="flex flex-col md:flex-row">
                <!-- Sidebar - Sticky below navbar -->
                <CmsPersonalInformationForm />
                <slot />
            </div>
        </div>
    </div>
</template>