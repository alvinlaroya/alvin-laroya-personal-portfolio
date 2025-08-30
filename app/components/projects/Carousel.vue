<script setup>
const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
})

const { create } = useLogs();
const exploreNowHandler = async (project) => {
    await create({
        action: 'view_project',
        description: `Someone viewed your project - ${project}`,
    })
}
</script>
<template>
    <UCarousel v-slot="{ item: project }" arrows dots class-names :items="props.projects"
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
                        <a :href="project.link" target="'_blank'" @click="exploreNowHandler(project.title)"
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