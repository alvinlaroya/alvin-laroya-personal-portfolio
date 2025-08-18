<script setup>
import { experiences } from '~/assets/experiences.json'
const openDrawer = ref(false);
const selectedExperience = ref(null);
const selectExperienceHandler = (value) => {
    selectedExperience.value = value;
    openDrawer.value = true;
}
</script>

<template>
    <div>
        <h2 class="text-xl font-semibold mb-3">Experiences</h2>
        <div v-for="(exp, i) in experiences" :key="i" @click="selectExperienceHandler(exp)"
            class="bg-[#03101d] p-4 rounded-sm text-sm space-y-1.5 my-2.5 hover:shadow-xl border-l border-primary hover:cursor-pointer">
            <h2 class="font-semibold text-base">{{ exp.position }}</h2>
            <div class="flex space-x-2 text-gray-400">
                <h2 class="font-semibold">Company:</h2>
                <span>{{ exp.company }} - {{ exp.address }}</span>
            </div>
        </div>
        <UDrawer direction="right" v-model:open="openDrawer" inset>
            <template #content>
                <div class="w-[40rem] p-3 lg:p-6 flex flex-col space-y-5 flex-nowrap overflow-y-auto">
                    <h2 class="font-semibold text-lg text-primary">{{ selectedExperience.position }}</h2>
                    <div class="flex flex-col">
                        <h2 class="font-semibold text-[#6EACDA]">Frontend:</h2>
                        <div class="flex flex-row space-x-2">
                            <div v-for="(stack, stackIdx) in selectedExperience.frontend.split(',')" :key="stackIdx"
                                class="bg-[#03346E] text-sm px-3 py-1 rounded-sm">
                                {{ stack }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="font-semibold text-[#6EACDA]">Backend:</h2>
                        <div class="flex flex-row space-x-2">
                            <div v-for="(stack, stackIdx) in selectedExperience.backend.split(',')" :key="stackIdx"
                                class="bg-[#03346E] text-sm px-3 py-1 rounded-sm text-nowrap">
                                {{ stack }}
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <h2 class="font-semibold text-[#6EACDA]">Company:</h2>
                        <span>{{ selectedExperience.company }} - {{ selectedExperience.address }}</span>
                    </div>
                    <div class="px-4">
                        <ol v-for="(role, roleIdx) in selectedExperience.roles" :key="roleIdx" class="list-decimal">
                            <li>
                                {{ role.task }}
                                <ul v-for="(task, taskIdx) in role.subtask" :key="taskIdx" class="list-disc ml-9">
                                    <li>{{ task }}</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </template>
        </UDrawer>
    </div>
</template>