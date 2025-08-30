<script setup>
import draggable from "vuedraggable";
import experiencesJson from '~/assets/experiences.json';
import { ref } from "vue";

const experiences = ref(experiencesJson.experiences); // make it reactive
const openDrawer = ref(false);
const selectedExperience = ref(null);
const { create } = useLogs();

const selectExperienceHandler = async (value) => {
    selectedExperience.value = value;
    openDrawer.value = true;
    await create({
        action: "view_experience",
        description: `Someone viewed your experience in ${value.company}`,
    });
};

const closeDrawer = () => (openDrawer.value = !openDrawer.value);

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
    <div id="experience">
        <h2 class="text-xl font-semibold mb-3">Experiences</h2>
        <p class="-mt-2 text-gray-400 text-sm">Try dragging and dropping the experience cards to change their order.</p>
        <draggable v-model="experiences" item-key="company" animation="200" class="space-y-2">
            <template #item="{ element: exp, index: i }">
                <div class="bg-[#03101d] py-4 pl-2 pr-4 rounded-md text-sm space-y-1.5 my-2.5 cursor-move">
                    <div class="flex w-full space-x-1 items-center">
                        <Icon name="hugeicons:drag-drop-vertical" size="1.5rem" class="text-gray-500 -mt-1" />
                        <div class="w-full">
                            <h2 class="font-semibold text-sm tracking-wide">{{ exp.position }}</h2>
                            <div class="flex space-x-2 text-gray-400 text-xs tracking-wide">
                                <h2 class="font-semibold">Company:</h2>
                                <div>
                                    <span class="text-gray-200">{{ exp.company }}</span>
                                    <span class="mx-2">•</span>
                                    <Icon name="lucide:map-pin" size="0.8rem" class="-mb-0.5 mr-2" />
                                    <span class="text-gray-200">{{ exp.address }}</span>
                                </div>
                            </div>
                            <div class="flex justify-between">
                                <UAvatarGroup size="xs" :max="4" class="mt-2">
                                    <UTooltip v-for="stack in exp.stacks" :text="stack" :key="stack">
                                        <img :src="`/svg/${stack}.svg`" class="h-5 w-5" :alt="stack" />
                                    </UTooltip>
                                </UAvatarGroup>
                                <UButton @click="selectExperienceHandler(exp)" trailing-icon="i-lucide-arrow-right"
                                    class="cursor-pointer mt-1" size="sm">View More
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </draggable>

        <!-- Drawer -->
        <UDrawer direction="right" v-model:open="openDrawer" :handle="false" inset>
            <template #content>
                <div class="w-[40rem] p-3 lg:p-6 flex flex-col space-y-5 flex-nowrap overflow-y-auto">
                    <div class="flex justify-end sticky top-0">
                        <UButton @click="closeDrawer" color="error" trailing-icon="i-lucide-x"
                            class="cursor-pointer mt-1" size="sm">
                        </UButton>
                    </div>

                    <h2 class="font-semibold text-lg">
                        {{ selectedExperience.position }}
                    </h2>
                    <div class="flex space-x-2 text-sm tracking-wider">
                        <Icon name="lucide:building-2" size="1rem" />
                        <span class="text-gray-300">{{ selectedExperience.company }}</span>
                    </div>
                    <div class="flex space-x-2 text-sm tracking-wider -mt-3">
                        <Icon name="lucide:map-pin" size="1rem" />
                        <span class="text-gray-300">{{ selectedExperience.address }}</span>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="font-normal text-sm tracking-wider">Technologies Stack:</h2>
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
                    <div class="text-sm font-thin tracking-wider">
                        <h2 class="font-normal text-sm tracking-wider">Task/Role:</h2>
                        <ol class="list-decimal pl-4">
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
