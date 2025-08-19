<script setup>
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
        name: "Pinia/Vuex",
        svg: "/svg/pinia.svg"
    }, {
        name: "Redux/Zustand",
        svg: "/svg/redux.svg"
    }, {
        name: "Zod",
        svg: "/svg/zod.svg"
    }, {
        name: "OpenAPI",
        svg: "/svg/openapi.svg"
    }, {
        name: "Postman",
        svg: "/svg/postman.svg"
    }
]

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
]

const aiStacks = [
    {
        name: "OpenAI"
    }, {
        name: "Antrophic"
    }, {
        name: "N8n AI Automation"
    }
]
</script>

<template>
    <div class="">
        <h2 class="text-xl font-semibold">Tech Stack:</h2>
        <div class="p-3 border border-gray-500 rounded-md mt-3">
            <div>
                <h2 class="font-semibold text-sm">Frontend Technologies:</h2>
                <div class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in frontendStacks"
                        class="flex space-x-2 border px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span>{{ stack.name }}</span>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <h2 class="font-semibold text-sm">Backend Technologies:</h2>
                <div class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in backendStacks"
                        class="flex space-x-2 border px-2 py-1 rounded-md text-xs  items-center">
                        <div v-if="stack?.svg !== undefined" class="flex">
                            <img :src="stack.svg" class="w-4 h-4" alt="">
                        </div>
                        <span>{{ stack.name }}</span>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <h2 class="font-semibold text-sm">AI/LLM Tools:</h2>
                <div class="flex flex-wrap mt-2 gap-1.5">
                    <div v-for="stack in aiStacks"
                        class="flex space-x-2 bg-[#0A253D] px-2 py-1 rounded-md text-xs  items-center">
                        <!-- <div class="flex">
                        <Icon name="lucide:code" size="1rem" />
                    </div> -->
                        <span>{{ stack.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>