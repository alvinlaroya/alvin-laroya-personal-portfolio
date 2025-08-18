<template>
    <aside class="flex lg:sticky top-16 lg:h-[calc(100vh-4rem)] w-full lg:w-72">
        <div class="p-4 w-full space-y-6">
            <div class="flex justify-center items-center">
                <NuxtImg src="/profile.webp" fit="cover" alt="profile-image" width="300" height="300"
                    class="w-[150px] rounded-full" />
            </div>
            <div>
                <h2 class="text-center text-xl mb-2">Alvin Laroya</h2>
                <div class="flex space-x-3 items-center">
                    <div class="flex">
                        <Icon name="lucide:briefcase-business" size="1rem" />
                    </div>
                    <span class="text-sm">Software Developer</span>
                </div>
                <div class="flex space-x-3 items-center">
                    <div class="flex">
                        <Icon name="lucide:mail" size="1rem" />
                    </div>
                    <span class="text-sm">alvinreggaelaroya@gmail.com</span>
                </div>
                <TechStack />
            </div>
        </div>
    </aside>
</template>