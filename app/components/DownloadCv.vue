<script setup lang="ts">
const props = defineProps({
    color: {
        default: 'bg-primary'
    }
})

const { create } = useLogs();
const toast = useToast()
async function showToast() {
    await create({
        action: 'download_cv',
        description: `Downloaded your cv.`,
    })
    const link = document.createElement("a");
    link.href = "/alvincv.pdf";
    link.download = "alvin-laroya-cv.pdf"; // <-- file will be saved as this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.add({
        title: "CV Downloaded!"
    })
}
</script>

<template>
    <button @click="showToast" :class="[props.color, { 'text-white': props.color === 'bg-black' }]"
        class="group hover:bg-primary-500 text-black px-3 py-2 flex items-center rounded-lg text-sm font-medium hover:cursor-pointer">
        <Icon name="lucide:download" size="1rem" class="mr-2 group-hover:scale-110 transition-all" /> Download CV
    </button>
</template>
