<script setup lang="ts">
const toast = useToast()

function showToast() {
    toast.add({
        title: "CV Downloaded!"
    })
}

</script>

<template>
    <nav class="sticky top-0 z-50 bg-[#021526]">
        <div class="max-w-screen-lg mx-auto">
            <div class="flex lg:justify-between items-center h-16">
                <!-- Navigation Links -->
                <div class="hidden md:block">
                    <div class="flex items-center space-x-4">
                        <a href="#"
                            class="hover:text-primary px-3 py-2 rounded-md text-sm font-normal tracking-wide">Home</a>
                        <a href="#"
                            class="hover:text-primary px-3 py-2 rounded-md text-sm font-normal tracking-wide">About</a>
                        <a href="#"
                            class="hover:text-primary px-3 py-2 rounded-md text-sm font-normal tracking-wide">Experience</a>
                        <a href="#"
                            class="hover:text-primary px-3 py-2 rounded-md text-sm font-normal tracking-wide">Portfolio</a>
                    </div>
                </div>

                <!-- Profile/User Menu -->
                <div class="flex justify-between items-center w-full lg:w-auto pl-2 pr-4">
                    <div class="flex">
                        <a href="https://github.com/alvinlaroya" target="_blank"
                            class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                            <Icon name="lucide:github" size="1.2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/alvin-laroya-bb409a1a0/" target="_blank"
                            class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                            <Icon name="lucide:linkedin" size="1.2rem" />
                        </a>
                    </div>
                    <button @click="showToast"
                        class="bg-primary text-black ml-2 px-3 py-2 flex items-center rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:download" size="1rem" class="mr-2" /> Download CV
                    </button>
                    <!-- <ColorModeButton /> -->
                </div>
            </div>
        </div>
    </nav>
</template>