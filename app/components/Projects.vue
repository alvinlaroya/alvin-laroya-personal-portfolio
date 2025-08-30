<script setup>
import Carousel from './projects/Carousel.vue';
import Grid from './projects/Grid.vue';

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

const tabs = {
    'carousel': Carousel,
    'grid': Grid
}

const items = ref([
    { label: '', icon: 'lucide:square-play', value: 'carousel' },
    { label: '', icon: 'lucide:grid-2x2', value: 'grid' }
])

const selectedTab = ref('carousel')

const active = computed({
    get() {
        return tabs['carousel'] === tabs[selectedTab.value] ? 'carousel' : 'grid';
    },
    set(tab) {
        selectedTab.value = tab;
    }
})
</script>

<template>
    <div id="portfolio">
        <div class="w-full flex justify-between">
            <h2 class="text-xl font-semibold">Projects</h2>
            <div class="w-32">
                <UTabs v-model="active" :content="false" :unmount-on-hide="false" :items="items" class="w-full" />
            </div>
        </div>
        <keep-alive>
            <component :is="tabs[active]" :projects="projects" />
        </keep-alive>
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