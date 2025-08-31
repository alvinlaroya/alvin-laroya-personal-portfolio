<script setup>
const config = useRuntimeConfig()
const route = useRoute();
const admin = route.query.fbclid === config.public.adminKey;
provide('admin', admin)
</script>

<template>
    <div class="relative w-full min-h-screen text-[#eee] scroll-smooth">
        <Header :isCms="false" />
        <div class="max-w-screen-lg w-full mx-auto relative z-10">
            <div class="flex flex-col md:flex-row">
                <PersonalInformation :class="{ 'hidden lg:block': route.path === '/reviews' }" />
                <slot />
            </div>
        </div>
        <Footer class="relative z-10" />
        <Chat />
    </div>
</template>