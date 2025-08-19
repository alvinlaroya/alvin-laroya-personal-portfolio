<script setup>
import { experiences } from '~/assets/experiences.json'
const openDrawer = ref(false);
const selectedExperience = ref(null);
const selectExperienceHandler = (value) => {
    selectedExperience.value = value;
    openDrawer.value = true;
}
const closeDrawer = () => openDrawer.value = !openDrawer.value;
</script>

<template>
    <div id="experience">
        <h2 class="text-xl font-semibold mb-3">Experiences</h2>
        <div v-for="(exp, i) in experiences" :key="i" class="bg-[#03101d] p-4 rounded-md text-sm space-y-1.5 my-2.5">
            <h2 class="font-semibold text-sm tracking-wide">{{ exp.position }}</h2>
            <div class="flex space-x-2 text-gray-400 text-xs tracking-wide">
                <h2 class="font-semibold">Company:</h2>
                <span>{{ exp.company }} - {{ exp.address }}</span>
            </div>
            <div class="flex justify-between">
                <UAvatarGroup size="xs" :max="3" class="mt-2">
                    <UAvatar src="https://logospng.org/download/vue.js/vue-js-1536.png" alt="Benjamin Canac" />
                    <UAvatar src="https://seeklogo.com/images/N/nuxt-logo-1CCC5F38FD-seeklogo.com.png"
                        alt="Romain Hamel" />
                    <UAvatar src="https://cdn.thenewstack.io/media/2021/09/9969f494-sveltelogo.png"
                        alt="Neil Richter" />
                    <UAvatar src="https://logos-world.net/wp-content/uploads/2020/11/Shopify-Emblem.png"
                        alt="Neil Richter" />
                </UAvatarGroup>
                <UButton @click="selectExperienceHandler(exp)" trailing-icon="i-lucide-arrow-right"
                    class="cursor-pointer mt-1" size="sm">View More
                </UButton>
            </div>
        </div>
        <UDrawer direction="right" v-model:open="openDrawer" :handle="false" inset>
            <template #content>
                <div class="w-[40rem] p-3 lg:p-6 flex flex-col space-y-5 flex-nowrap overflow-y-auto">
                    <div class="flex justify-end sticky top-0">
                        <UButton @click="closeDrawer" color="error" trailing-icon="i-lucide-x"
                            class="cursor-pointer mt-1" size="sm">
                        </UButton>
                    </div>
                    <h2 class="font-semibold text-lg">{{ selectedExperience.position }}</h2>
                    <div class="flex space-x-2 text-sm tracking-wide">
                        <h2 class="font-semibold">Company:</h2>
                        <span class="text-gray-300"><span class="text-primary">{{ selectedExperience.company }}</span> -
                            {{ selectedExperience.address }}</span>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="font-normal text-sm">Frontend:</h2>
                        <div class="flex flex-row space-x-2 mt-1 flex-wrap gap-y-2">
                            <div v-for="(stack, stackIdx) in selectedExperience.frontend.split(',')" :key="stackIdx"
                                class="bg-primary text-black font-semibold text-xs text-nowrap px-3 py-1 rounded-sm">
                                {{ stack }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="font-normal text-sm">Backend:</h2>
                        <div class="flex flex-row space-x-2 mt-1 flex-wrap gap-y-2">
                            <div v-for="(stack, stackIdx) in selectedExperience.backend.split(',')" :key="stackIdx"
                                class="bg-primary text-black font-semibold text-xs px-3 py-1 rounded-sm text-nowrap">
                                {{ stack }}
                            </div>
                        </div>
                    </div>
                    <div class="px-4 text-sm font-thin tracking-wide">
                        <ol class="list-decimal">
                            <li v-for="(role, roleIdx) in selectedExperience.roles" :key="roleIdx" class="my-2">
                                {{ role.task }}
                                <ul class="list-disc ml-9">
                                    <li v-for="(task, taskIdx) in role.subtask" :key="taskIdx" class="my-1">{{ task }}
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </template>
        </UDrawer>
    </div>
</template>