<script setup>
const informations = [
    {
        icon: 'lucide:briefcase-business',
        text: 'Software Developer'
    },
    {
        icon: 'lucide:phone',
        text: '+639388566223',
        href: 'tel:+639388566223'
    },
    {
        icon: 'lucide:mail',
        text: 'alvinreggaelaroya@gmail.com',
        href: 'mailto:alvinreggaelaroya@gmail.com'
    },
    {
        icon: 'lucide:graduation-cap',
        text: 'Computer Science'
    },
    {
        icon: 'lucide:map-pin',
        text: 'Agoo, La Union, Philippines'
    },
]
</script>

<template>
    <aside class="flex lg:sticky top-16 lg:h-[calc(100vh-4rem)] w-full lg:w-76">
        <div class="flex flex-row lg:flex-col space-x-4 p-4 w-full space-y-4 tracking-wide">
            <div class="flex justify-center items-center object-bottom">
                <NuxtImg src="/profile2.webp" :placeholder="[200, 200]" fit="cover" alt="profile-image" width="300"
                    height="300" class="w-[140px] lg:w-[200px] rounded-full" />
            </div>
            <div class="flex flex-col justify-center">
                <h2 class="text-left lg:text-center text-xl lg:text-2xl mb-2 font-semibold">Alvin Laroya</h2>
                <div v-for="(info, i) in informations" :key="i"
                    class="flex space-x-3 items-center mb-0 lg:mb-1.5 text-gray-300">
                    <div class="flex">
                        <Icon :name="info.icon" size="1rem" />
                    </div>
                    <a :href="info.href" class="text-sm" :class="{ 'text-secondary hover:underline': info?.href }">{{
                        info.text }}</a>
                </div>
                <!--  <SpotifyLastPlayed /> -->
                <USeparator class="mt-3 hidden lg:block" />
                <div class="hidden lg:block">
                    <div class="mt-3">
                        <h2 class="text-sm text-gray-200">Pronounce: <span class="text-gray-400">he/his</span></h2>
                    </div>
                    <div class="mt-3">
                        <h2 class="text-sm text-gray-200">Hobbies:</h2>
                        <span class="text-gray-400 text-xs">Coding • Playing Guitar • Singing • FPS Gaming • Coffee •
                            Nature Travel</span>
                    </div>
                </div>
                <Connections class="hidden lg:block" />
            </div>
        </div>
    </aside>
</template>