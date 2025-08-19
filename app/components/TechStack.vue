<script setup>
const frontendStacks = [
    {
        name: "Vue.js"
    }, {
        name: "React.js"
    }, {
        name: "Svelte"
    }, {
        name: "React Native Expo"
    }, {
        name: "Nuxt"
    }, {
        name: "Next.js"
    }, {
        name: "Pinia/Vuex"
    }, {
        name: "Redux/Zustand"
    }
]

const backendStacks = [
    {
        name: "Node.js"
    }, {
        name: "Prisma"
    }, {
        name: "Drizzle ORM"
    }, {
        name: "Knex.js"
    }, {
        name: "Express.js"
    }, {
        name: "PostgreSQL"
    }, {
        name: "MySQL"
    }, {
        name: "Firebase"
    }, {
        name: "Supabase"
    }, {
        name: "REST"
    }, {
        name: "GraphQL"
    }, {
        name: "Storefront API"
    }
]
</script>

<template>
    <div class="my-2">
        <div>
            <h2 class="font-semibold text-sm">Frontend Stack:</h2>
            <div class="flex flex-wrap mt-2 gap-1.5">
                <div v-for="stack in frontendStacks"
                    class="flex space-x-2 bg-[#0A253D] px-2 py-1 rounded-md text-xs  items-center">
                    <!-- <div class="flex">
                        <Icon name="lucide:code" size="1rem" />
                    </div> -->
                    <span>{{ stack.name }}</span>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <h2 class="font-semibold text-sm">Backend Stack:</h2>
            <div class="flex flex-wrap mt-2 gap-1.5">
                <div v-for="stack in backendStacks"
                    class="flex space-x-2 bg-[#0A253D] px-2 py-1 rounded-md text-xs  items-center">
                    <!-- <div class="flex">
                        <Icon name="lucide:code" size="1rem" />
                    </div> -->
                    <span>{{ stack.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>