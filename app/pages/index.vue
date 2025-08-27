<script setup lang="ts">
const { send } = useEmailJs();
const config = useRuntimeConfig();
onMounted(async () => {
    if (config?.public?.environment !== 'production') return;

    setTimeout(async () => {
        await send(<{ name: string, email: string, subject: string, message: string }>{
            name: 'Alvin Laroya Portfolio',
            email: 'alvinreggaelaroya@gmail.com',
            subject: 'Someone viewed your Portfolio!',
            message: 'Someone viewed your portfolio.'
        })
    }, 3000)
})

useSeoMeta({
    title: 'Alvin Laroya Portfolio',
    description: 'Results-driven Frontend Developer with 6+ years of experience building modern, high-performance e-commerce platforms. Skilled in Vue/Nuxt, Svelte/SvelteKit, React/Next, and Tailwind CSS. Proven track record in developing responsive, user-centric interfaces and integrating complex systems such as store management tools. Experienced in modernizing legacy applications to improve performance, usability, and efficiency. Passionate about creating innovative digital experiences that align with business goals and drive measurable results.'
})
</script>

<template>
    <!-- Main Content Area -->
    <main class="flex-1 min-w-0 p-4 lg:pl-4 flex flex-col space-y-9">
        <AboutMe />
        <Experiences />
        <USeparator />
        <TechStack />
        <USeparator />
        <Projects />
        <USeparator class="mt-5" />
        <SeminarsAndTraining />
        <USeparator />
        <VueWorkshop />
        <USeparator />
        <Testimonials />
        <USeparator />
        <Reviews />
        <!-- <ContactMe /> -->
    </main>
</template>