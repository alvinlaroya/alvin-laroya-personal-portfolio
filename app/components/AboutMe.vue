<script setup>
const yearsOfExperience = computed(() => {
    const d = new Date();
    let year = d.getFullYear();
    return parseInt(year) - 2019
})
</script>

<template>
    <div id="about">
        <h2 class="text-xl font-semibold">About Me</h2>
        <p class="text-sm mt-3 text-gray-300 tracking-wide">
            Results-driven Software Developer with <span class="text-primary font-medium">6+ years</span> of experience. Passionate about building scalable,
            user-focused applications that improve performance, enhance usability, and drive measurable business growth.
        </p>
    </div>
</template>