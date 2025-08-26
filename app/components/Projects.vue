<script setup>
const projects = [
    {
        src: '/projects/order-crud.webp',
        link: 'https://github.com/alvinlaroya/react-express-sqlite-crud',
        title: 'Order CRUD App',
        description: 'Order Management CRUD application utilizing React/React-hook-form, Shad/cn UI, Zod, Node.js, Express, SQLite and Jest Testing.',
        stacks: ['react', 'next', 'shadcn', 'tailwind', 'node', 'express', 'sqlite'],
        isInternal: false
    },
    {
        src: '/projects/wise.webp',
        link: 'https://www.loom.com/share/2b41e989f13e42d88dfb49b4bc8a733b',
        title: 'Wise - Headless Shopify CMS',
        description: 'A custom CMS built for a headless Shopify store, enabling easy management of products, content, and storefront data.',
        stacks: ['svelte', 'tailwind'],
        isInternal: true
    },
    {
        src: '/projects/dal.webp',
        link: 'https://github.com/alvinlaroya/dal2.0',
        title: 'Digital Assets Library',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'vuetify'],
        isInternal: true
    },
    {
        src: '/projects/archintel-chasis.webp',
        link: 'https://github.com/alvinlaroya/vue-vuex-vuetify-router/tree/master',
        title: 'Archintel Corp. Chasis',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'vuetify'],
        isInternal: true
    },
    {
        src: '/projects/skood.webp',
        link: 'https://www.instagram.com/skood.ph/',
        title: 'Skood',
        description: 'A dashboard application for managing restaurant clients and their food products, making it easy to add, organize, and track client details and menus.',
        stacks: ['vue', 'vuetify', 'firebase'],
        isInternal: true
    },
    {
        src: '/projects/journee.webp',
        link: 'https://journeecollection.com/collections/all',
        title: 'Journee Collection Store',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design',
        stacks: ['vue', 'nuxt', 'tailwind'],
        isInternal: false
    },
    {
        src: '/projects/manlybands.webp',
        link: 'https://manlybands.com/collections/all-products',
        title: 'Manly Bands',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design',
        stacks: ['vue', 'nuxt', 'tailwind'],
        isInternal: false
    },
    {
        src: '/projects/taft.webp',
        link: 'https://brett.tech/products/info-orbs-full-dev-kit',
        title: 'Taft Clothing',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'nuxt', 'tailwind'],
        isInternal: false
    },
    {
        src: '/projects/brett-tech.webp',
        link: 'https://brett.tech/products/info-orbs-full-dev-kit',
        title: 'Brett Tech Store',
        description: 'Developed a custom Shopify store powered by Nuxt.js and the Shopify Storefront API, delivering a fast, headless e-commerce experience with optimized performance, seamless product browsing, and a fully tailored frontend design.',
        stacks: ['vue', 'nuxt', 'tailwind'],
        isInternal: false
    }
]

const { create } = useLogs();
const exploreNowHandler = async (project) => {
    await create({
        action: 'view_project',
        description: `Someone viewed your project - ${project}`,
    })
}
</script>

<template>
    <div id="portfolio">
        <h2 class="text-xl font-semibold">Projects</h2>
        <UCarousel v-slot="{ item: project }" arrows dots class-names :items="projects"
            :ui="{ item: 'base-1 lg:basis-1/2' }">
            <div
                class="group relative rounded-lg shadow-2xl cursor-pointer transform transition-all duration-500 hover:shadow-3xl my-5">
                <!-- Image Container with overlay content -->
                <div class="relative w-full h-54 overflow-hidden rounded-lg">
                    <NuxtImg :src="project.src" fit="cover" alt="profile-image" width="500" height="350"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    <!-- Dark overlay that appears on hover -->
                    <div
                        class="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Content overlay -->
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                        <h3
                            class="text-sm font-bold mb-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            {{ project.title }}
                        </h3>
                        <p
                            class="text-xs leading-relaxed mb-6 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 delay-300">
                            {{ project.description }}
                        </p>

                        <!-- Button that slides in -->
                        <div
                            class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                            <a :href="project.link"
                                target="'_blank'" @click="exploreNowHandler(project.title)"
                                class="px-4 py-1 bg-primary text-black rounded-lg text-sm font-medium hover:bg-black hover:text-white duration-200 shadow-lg">
                                Explore Now
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center py-1 mt-1 px-1">
                    <span class="text-sm text-white">{{ project.title }}</span>
                    <UBadge v-if="project.isInternal" class="font-normal" color="neutral" variant="outline">
                        Internal
                    </UBadge>
                </div>
            </div>
        </UCarousel>
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