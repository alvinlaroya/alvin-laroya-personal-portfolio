<script setup lang="ts">

</script>

<template>
    <div>
        <h2 class="text-xl font-semibold">Vue.js Workshop at DMMMSU</h2>
        <p class="text-sm mt-2 text-gray-400">March 22, 2023 - I recently conducted a hands-on Vue.js Web Development
            Workshop at my former university, Don Mariano Marcos
            Memorial State University (DMMMSU). The session focused on introducing students to modern frontend
            development using Vue.js, covering essential concepts such as component-based architecture, reactive data
            binding, and building single-page applications. Participants were guided through practical coding exercises,
            best practices, and real-world development workflows. It was a great opportunity to give back to the
            community and inspire future developers in the field of web technologies.</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
            <div v-for="(img, i) in Array(5)" class="group overflow-clip rounded-lg cursor-pointer"
                :class="{ 'col-span-2 row-span-3 h-[340px]': i === 0 }">
                <NuxtImg :src="`/workshop/workshop${i + 1}.webp`" fit="cover" alt="profile-image" width="300"
                    height="300" class="w-full group-hover:scale-125 transition-all duration-200 delay-100" />
            </div>
        </div>
    </div>
</template>
