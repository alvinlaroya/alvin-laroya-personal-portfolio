<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
    {
        date: 'Mar 22, 2023',
        title: 'Web Development Workshop on Vue.js at DMMMSU',
        description: 'I recently conducted a hands-on Vue.js Web Development Workshop at my former university, Don Mariano Marcos Memorial State University (DMMMSU). The session focused on introducing students to modern frontend development using Vue.js, covering essential concepts such as component-based architecture, reactive data binding, and building single-page applications. Participants were guided through practical coding exercises, best practices, and real-world development workflows. It was a great opportunity to give back to the community and inspire future developers in the field of web technologies.',
        icon: 'i-lucide-rocket'
    },
    {
        date: 'Mar 27, 2020',
        title: 'MERN Stack Development Training',
        description: 'Completed intensive hands-on training focused on building full-stack web applications using MongoDB, Express.js, React, and Node.js, covering both frontend and backend development.',
        icon: 'i-lucide-code'
    },
    {
        date: 'Mar 10, 2019',
        title: 'ICT Summit',
        description: 'Attended a professional summit highlighting the latest trends, innovations, and best practices in information and communications technology.',
        icon: 'i-lucide-code'
    },
    {
        date: 'Mar 08, 2019',
        title: 'Hackathon 2019',
        description: 'Participated in a collaborative coding competition focused on developing innovative solutions within a limited timeframe.',
        icon: 'i-lucide-code'
    },
    {
        date: 'Mar 05, 2019',
        title: 'Web Design Technology 10th La Union Provincial Skills Olympics 2019',
        description: 'Competed in creating responsive and user-friendly web designs, showcasing technical and creative skills in front-end development.',
        icon: 'i-lucide-code'
    }
])
</script>

<template>
    <div>
        <h2 class="text-xl font-semibold">Seminars/Training Attended</h2>
        <UTimeline :default-value="0" :items="items" class="w-full lg:w-164 text-sm mt-3" />
    </div>
</template>
