<script setup>
import { experiences } from '~/assets/experiences.json'
const openDrawer = ref(false);
const selectedExperience = ref(null);
const selectExperienceHandler = (value) => {
    selectedExperience.value = value;
    openDrawer.value = true;
}
const closeDrawer = () => openDrawer.value = !openDrawer.value;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
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
                <UAvatarGroup size="xs" class="mt-2">
                    <UTooltip v-for="stack in exp.stacks" :text="stack">
                        <img :src="`/svg/${stack}.svg`" class="h-5 w-5" :alt="stack" />
                    </UTooltip>
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
                        <h2 class="font-normal text-sm">Technologies Stack:</h2>
                        <div class="flex flex-row space-x-2 flex-wrap gap-y-2 mt-2">
                            <div v-for="(stack, stackIdx) in selectedExperience.stacks" :key="stackIdx"
                                class="bg-transparent text-whte border border-gray-500 font-semibold text-xs text-nowrap flex space-x-2 px-2 py-1 rounded-md">
                                <div v-if="stack !== undefined" class="flex">
                                    <img :src="`/svg/${stack}.svg`" class="w-4 h-4" alt="">
                                </div>
                                <span>{{ capitalize(stack) }}</span>
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