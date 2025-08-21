<script setup>
const yearsOfExperience = computed(() => {
    const d = new Date();
    let year = d.getFullYear();
    return parseInt(year) - 2019
})
</script>

<template>
    <div id="about" class="border border-gray-600 rounded-md p-4">
        <h2 class="text-xl font-semibold">About Me</h2>
        <p class="text-sm mt-3 text-gray-300 tracking-wide">
            Results-driven Software Developer with {{ yearsOfExperience }}+ years of experience building modern,
            high-performance
            e-commerce platforms. Skilled in Vue/Nuxt, Svelte/SvelteKit, React/Next, and Tailwind CSS. Proven
            track record in developing responsive, user-centric interfaces and integrating complex systems such
            as store management tools. Experienced in modernizing legacy applications to improve performance,
            usability, and efficiency. Passionate about creating innovative digital experiences that align with
            business goals and drive measurable results.
        </p>
    </div>
</template>