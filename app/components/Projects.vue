<script setup>
import { NuxtLink } from '#components';

const projects = [
    {
        src: '/projects/brett-tech.webp',
        link: 'https://brett-tech-store.netlify.app/collections/frontpage',
        title: 'Brett Tech Store'
    },
    {
        src: '/projects/journee.webp',
        link: 'https://journeecollection.com/collections/all',
        title: 'Journee Collection Store'
    }
]
</script>

<template>
    <div>
        <h2 class="text-xl font-semibold">Portfolio</h2>
        <div class="text-sm mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Card 1 -->
            <div v-for="(project, idx) in projects" :key="idx"
                class="group relative h-70 rounded-xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-3xl">
                <!-- Image Container with overlay content -->
                <div class="relative w-full h-full overflow-hidden">
                    <NuxtImg :src="project.src" fit="cover" alt="profile-image" width="300" height="300"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    <!-- Dark overlay that appears on hover -->
                    <div
                        class="absolute inset-0 card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    </div>

                    <!-- Content overlay -->
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                        <h3
                            class="text-2xl font-bold mb-3 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                            {{ project.title }}
                        </h3>
                        <p
                            class="text-sm leading-relaxed mb-6 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 delay-300">
                            Discover breathtaking landscapes and embark on an unforgettable journey through nature's
                            wonders.
                        </p>

                        <!-- Button that slides in -->
                        <div
                            class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                            <a :href="project.link" target="_blank"
                                class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 shadow-lg">
                                Explore Now
                            </a>
                        </div>
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