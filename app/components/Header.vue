<template>
    <nav class="sticky top-0 z-50 bg-[#021526]">
        <div class="max-w-screen-lg mx-auto">
            <div class="flex justify-between items-center h-16">
                <!-- Navigation Links -->
                <div class="hidden md:block">
                    <div class="flex items-center space-x-4">
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>

                <!-- Profile/User Menu -->
                <div class="flex items-center">
                    <button class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:github" size="1.2rem" />
                    </button>
                    <button class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:linkedin" size="1.2rem" />
                    </button>
                    <button class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:facebook" size="1.2rem" />
                    </button>
                    <button
                        class="bg-black ml-2 px-3 py-2 flex items-center rounded-lg text-sm font-medium hover:cursor-pointer">
                        <Icon name="lucide:download" size="1rem" class="mr-2" /> Download CV
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>