<script setup>
const config = useRuntimeConfig()
const route = useRoute();
const admin = route.query.fbclid === config.public.adminKey;
provide('admin', admin)
</script>

<template>
    <div class="w-full bg-[#021526] text-[#eee] scroll-smooth">
        <Header />
        <div class="max-w-screen-lg mx-auto">
            <!-- Container for Sidebar and Main Content -->
            <div class="flex flex-col md:flex-row">
                <!-- Sidebar - Sticky below navbar -->
                <PersonalInformation :class="{ 'hidden lg:block': route.path === '/reviews' }" />
                <slot />
            </div>
            <Chat />
        </div>
        <Footer />
    </div>
</template>