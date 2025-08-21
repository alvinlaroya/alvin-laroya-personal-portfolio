<script setup>
const route = useRoute();
const activeLink = ref('home');
function scrollToSection(section, offset = 0) {
    activeLink.value = section;
    const element = document.getElementById(section);
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}
</script>

<template>
    <nav class="sticky top-0 z-50 bg-[#021526]">
        <div class="max-w-screen-lg mx-auto">
            <div class="flex lg:justify-between items-center h-16">
                <!-- Navigation Links -->
                <div class="hidden md:block">
                    <div class="flex items-center space-x-4">
                        <NuxtLink to="/" :class="{ 'text-primary border-b': activeLink === 'home' && route.path === '/' }"
                            @click="scrollToSection('home', -80)"
                            class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">Home
                        </NuxtLink>
                        <a :class="{ 'text-primary border-b': activeLink === 'about' }" href="#"
                            @click="scrollToSection('about', -80)"
                            class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">About</a>
                        <a :class="{ 'text-primary border-b': activeLink === 'experience' }" href="#"
                            @click="scrollToSection('experience', -80)"
                            class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">Experience</a>
                        <a :class="{ 'text-primary border-b': activeLink === 'portfolio' }" href="#"
                            @click="scrollToSection('portfolio', -80)"
                            class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">Portfolio</a>
                    </div>
                </div>

                <!-- Profile/User Menu -->
                <div class="flex justify-between items-center w-full lg:w-auto pl-2 pr-4">
                    <div class="flex mr-3">
                        <a href="https://github.com/alvinlaroya" target="_blank"
                            class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                            <Icon name="lucide:github" size="1.2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/alvin-laroya-bb409a1a0/" target="_blank"
                            class="px-3 py-2 rounded-lg text-sm font-medium hover:cursor-pointer">
                            <Icon name="lucide:linkedin" size="1.2rem" />
                        </a>
                    </div>
                    <DownloadCv />
                    <!-- <ColorModeButton /> -->
                </div>
            </div>
        </div>
    </nav>
</template>