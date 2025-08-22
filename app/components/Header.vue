<script setup>
const admin = inject('admin');

const props = defineProps({
    isCms: {
        default: false
    }
})

const route = useRoute();
const links = [
    {
        label: 'Home',
        link: '/',
        section: 'home'
    },
    {
        label: 'About',
        link: undefined,
        section: 'about'
    },
    {
        label: 'Experience',
        link: undefined,
        section: 'experience'
    },
    {
        label: 'Portfolio',
        link: undefined,
        section: 'portfolio'
    }
]
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
                        <div v-for="item in links" :key="item.section">
                            <NuxtLink v-if="item?.link" to="/"
                                :class="{ 'text-primary border-b': activeLink === 'home' && route.path === '/' }"
                                @click="scrollToSection('home', -80)"
                                class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">Home
                            </NuxtLink>
                            <a v-else
                                :class="{ 'text-primary border-b': activeLink === item.section && route.path === '/' }"
                                href="#" @click="scrollToSection(item.section, -80)"
                                class="hover:text-primary px-3 py-2 text-sm font-normal tracking-wide">
                                {{ item.label }}
                            </a>
                        </div>
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
                    <UButton v-if="props.isCms" to="/" icon="i-lucide-rocket" size="md" color="primary" variant="solid">Preview</UButton>
                    <DownloadCv v-else />
                    <!-- <ColorModeButton /> -->
                </div>
            </div>
        </div>
    </nav>
</template>