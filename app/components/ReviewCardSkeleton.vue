<template>
    <div v-for="i in Array(3)" :key="i" class="flex flex-col space-y-2 w-full my-2">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-1/2" />
        <div class="flex justify-between">
            <USkeleton class="h-7 w-7 rounded-full" />
            <USkeleton class="h-4 w-24" />
        </div>
        <USeparator />
    </div>
</template>