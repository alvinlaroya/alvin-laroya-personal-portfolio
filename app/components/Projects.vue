<script setup>
const projects = [
    {
        src: '/projects/dal.webp',
        link: 'https://github.com/alvinlaroya/dal2.0',
        title: 'Digital Assets Library',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'vuetify']
    },
    {
        src: '/projects/archintel-chasis.webp',
        link: 'https://github.com/alvinlaroya/vue-vuex-vuetify-router/tree/master',
        title: 'Archintel Corp. Chasis',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'vuetify']
    },
    {
        src: '/projects/journee.webp',
        link: 'https://journeecollection.com/collections/all',
        title: 'Journee Collection Store',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design',
        stacks: ['vue', 'nuxt', 'tailwind']
    },
    {
        src: '/projects/brett-tech.webp',
        link: 'https://brett-tech-store.netlify.app/collections/frontpage',
        title: 'Brett Tech Store',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'nuxt', 'tailwind']
    }
]
</script>

<template>
    <div id="portfolio">
        <h2 class="text-xl font-semibold">Portfolio</h2>
        <div class="text-sm mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div v-for="(project, idx) in projects" :key="idx"
                class="group relative h-54 rounded-lg shadow-2xl cursor-pointer transform transition-all duration-500 hover:shadow-3xl my-5">
                <!-- Image Container with overlay content -->
                <div class="relative w-full h-full overflow-hidden rounded-lg">
                    <NuxtImg :src="project.src" fit="cover" alt="profile-image" width="380" height="200"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    <!-- Dark overlay that appears on hover -->
                    <div
                        class="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Content overlay -->
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                        <h3
                            class="text-xl font-bold mb-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            {{ project.title }}
                        </h3>
                        <p
                            class="text-xs leading-relaxed mb-6 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 delay-300">
                            {{ project.description }}
                        </p>

                        <!-- Button that slides in -->
                        <div
                            class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                            <a :href="project.link" target="_blank"
                                class="px-6 py-3 bg-primary text-black rounded-lg text-sm font-medium hover:bg-black hover:text-white duration-200 shadow-lg">
                                Explore Now
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center py-1 mt-1 px-1">
                    <span class="text-gray-400">{{ project.title }}</span>
                    <div class="flex space-x-1.5">
                        <UTooltip v-for="stack in project.stacks" :text="stack">
                            <img :src="`/svg/${stack}.svg`" class="h-4 w-4" :alt="stack" />
                        </UTooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes slideUp {
    from {
        transform: translateY(100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.slide-up {
    animation: slideUp 0.5s ease-out;
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

.scale-in {
    animation: scaleIn 0.4s ease-out;
}

.card-overlay {
    background: rgba(0, 0, 0, 0.8);
}
</style>