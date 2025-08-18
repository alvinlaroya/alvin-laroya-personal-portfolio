<script setup>
const informations = [
    {
        icon: 'lucide:briefcase-business',
        text: 'Software Developer'
    },
    {
        icon: 'lucide:phone',
        text: '+639388566223'
    },
    {
        icon: 'lucide:mail',
        text: 'alvinreggaelaroya@gmail.com'
    },
    {
        icon: 'lucide:map-pin',
        text: 'Agoo, La Union, Philippines'
    },
]
</script>

<template>
    <aside class="flex lg:sticky top-16 lg:h-[calc(100vh-4rem)] w-full lg:w-72">
        <div class="p-4 w-full space-y-4 tracking-wide">
            <div class="flex justify-center items-center">
                <NuxtImg src="/profile.webp" fit="cover" alt="profile-image" width="300" height="300"
                    class="w-[150px] rounded-full" />
            </div>
            <div>
                <h2 class="text-center text-2xl mb-2 font-semibold">Alvin Laroya</h2>
                <div v-for="(info, i) in informations" :key="i" class="flex space-x-3 items-center mb-1.5">
                    <div class="flex">
                        <Icon :name="info.icon" size="1rem" />
                    </div>
                    <span class="text-sm">{{ info.text }}</span>
                </div>
                <USeparator class="mt-3" />
                <TechStack />
            </div>
        </div>
    </aside>
</template>