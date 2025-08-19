<script setup>
const search = ref('');

const frontendStacks = [
    {
        name: "Vue.js",
        svg: "/svg/vue.svg"
    }, {
        name: "React.js",
        svg: "/svg/react.svg"
    }, {
        name: "Svelte",
        svg: "/svg/svelte.svg"
    }, {
        name: "React Native Expo",
        svg: "/svg/react.svg"
    }, {
        name: "Nuxt",
        svg: "/svg/nuxt.svg"
    }, {
        name: "Next.js",
        svg: "/svg/next.svg"
    }, {
        name: "Tailwind CSS",
        svg: "/svg/tailwind.svg"
    }, {
        name: "Shadcn UI",
        svg: "/svg/shadcn.svg"
    }, {
        name: "Vuetify",
        svg: "/svg/vuetify.svg"
    }, {
        name: "Material UI",
        svg: "/svg/materialui.svg"
    }, {
        name: "Zod",
        svg: "/svg/zod.svg"
    }, {
        name: "Postman",
        svg: "/svg/postman.svg"
    }
];
const filteredFrontend = computed(() => {
    if (!search.value) {
        return frontendStacks; // Return all items when search is empty
    }

    return frontendStacks.filter(stack =>
        stack.name.toLowerCase().includes(search.value.toLowerCase())
    );
});

const stateManagementStacks = [
    {
        name: "Pinia",
        svg: "/svg/pinia.svg"
    }, {
        name: "Vuex",
        svg: "/svg/vue.svg"
    }, {
        name: "Redux",
        svg: "/svg/redux.svg"
    }, {
        name: "Zustand"
    }
]
const filteredStateManagement = computed(() => {
    if (!search.value) {
        return stateManagementStacks; // Return all items when search is empty
    }

    return stateManagementStacks.filter(stack =>
        stack.name.toLowerCase().includes(search.value.toLowerCase())
    );
});

const backendStacks = [
    {
        name: "Node.js",
        svg: "/svg/node.svg"
    }, {
        name: "Typescript",
        svg: "/svg/typescript.svg"
    }, {
        name: "Prisma",
        svg: "/svg/prisma.svg"
    }, {
        name: "Drizzle ORM",
        svg: "/svg/node.svg"
    }, {
        name: "Knex.js",
        svg: "/svg/node.svg"
    }, {
        name: "Express.js",
        svg: "/svg/express.svg"
    }, {
        name: "PostgreSQL",
        svg: "/svg/postgresql.svg"
    }, {
        name: "MySQL",
        svg: "/svg/mysql.svg"
    }, {
        name: "Firebase",
        svg: "/svg/firebase.svg"
    }, {
        name: "Supabase",
        svg: "/svg/supabase.svg"
    }, {
        name: "REST"
    }, {
        name: "GraphQL",
        svg: "/svg/graphql.svg"
    }, {
        name: "Storefront API"
    }
];
const filteredBackend = computed(() => {
    if (!search.value) {
        return backendStacks; // Return all items when search is empty
    }

    return backendStacks.filter(stack =>
        stack.name.toLowerCase().includes(search.value.toLowerCase())
    );
});

const uiUxDesignStacks = [
    {
        name: "Adobe Photoshop",
        svg: "/svg/photoshop.svg"
    }, {
        name: "Figma",
        svg: "/svg/figma.svg"
    }
]
const filteredDesign = computed(() => {
    if (!search.value) {
        return uiUxDesignStacks; // Return all items when search is empty
    }

    return uiUxDesignStacks.filter(stack =>
        stack.name.toLowerCase().includes(search.value.toLowerCase())
    );
});

const aiStacks = [
    {
        name: "OpenAI",
        svg: "/svg/openai.svg"
    }, {
        name: "Antrophic"
    }, {
        name: "N8n AI Automation",
        svg: "/svg/n8n.svg"
    }, {
        name: "Claude AI",
        svg: "/svg/claude.svg"
    }
]
</script>

<template>
    <div class="">
        <div class="flex flex-col lg:flex-row justify-between">
            <h2 class="text-xl font-semibold">Tech Stack:</h2>
            <UInput v-model="search" class="mt-2 lg:mt-0" icon="i-lucide-search" size="md" variant="outline"
                placeholder="Search..." />
        </div>
        <div class="mt-3">
            <div>
                <h2 class="font-semibold text-sm">Frontend Technologies:</h2>
                <div v-if="filteredFrontend.length > 0" class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in filteredFrontend"
                        class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span class="text-gray-300">{{ stack.name }}</span>
                    </div>
                </div>
                <div v-else>
                    <span class="text-sm text-gray-500">No Results</span>
                </div>
            </div>
            <div class="mt-5">
                <h2 class="font-semibold text-sm">State Management:</h2>
                <div v-if="filteredStateManagement.length > 0" class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in filteredStateManagement"
                        class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span class="text-gray-300">{{ stack.name }}</span>
                    </div>
                </div>
                <div v-else>
                    <span class="text-sm text-gray-500">No Results</span>
                </div>
            </div>
            <div class="mt-5">
                <h2 class="font-semibold text-sm">Backend Technologies:</h2>
                <div v-if="filteredBackend.length > 0" class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in filteredBackend"
                        class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span class="text-gray-300">{{ stack.name }}</span>
                    </div>
                </div>
                <div v-else>
                    <span class="text-sm text-gray-500">No Results</span>
                </div>
            </div>
            <div class="mt-5">
                <h2 class="font-semibold text-sm">UI/UX Design:</h2>
                <div v-if="filteredDesign.length > 0" class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in filteredDesign"
                        class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span class="text-gray-300">{{ stack.name }}</span>
                    </div>
                </div>
                <div v-else>
                    <span class="text-sm text-gray-500">No Results</span>
                </div>
            </div>
            <div class="mt-5">
                <h2 class="font-semibold text-sm">AI/LLM Tools:</h2>
                <div class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in aiStacks"
                        class="flex space-x-2 border border-gray-500 px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span class="text-gray-300">{{ stack.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>