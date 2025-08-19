<script setup>
const testimonials = [
    {
        text: "Working with Alvin has always been a great experience. He’s a reliable and collaborative developer who consistently brings creative solutions to the table. His strong problem-solving skills and willingness to help teammates make him a valuable asset to any project or team.",
        author: "Jonjie Viduya",
        position: "Sr. Fullstack Developer, Pen Brothers",
        avatar: "/testimonials/jonjie.webp",
    },
    {
        text: "Alvin is a reliable and talented developer. They’re great at solving problems, writing clean code, and working well with the team.",
        author: "Lawrence Bonilla",
        position: "Frontend Developer, Pilothouse Digital",
        avatar: "/testimonials/lawrence.webp",
    },
    {
        text: "Working with Alvin has been a great experience. He’s a reliable software developer who not only writes clean and efficient code but also collaborates well with the team to deliver quality solutions on time.",
        author: "Ryan Bel Soriano",
        position: "Frontend Developer, Pilothouse Digital",
        avatar: "/testimonials/ryan.webp",
    },
    {
        text: "Alvin is a reliable and talented developer. They’re great at solving problems, writing clean code, and working well with the team.",
        author: "Lawrence Bonilla",
        position: "Frontend Developer, Pilothouse Digital",
        avatar: "/testimonials/lawrence.webp",
    },
    {
        text: "Alvin is a reliable and talented developer. They’re great at solving problems, writing clean code, and working well with the team.",
        author: "Joshua Cucueco",
        position: "Frontend Developer, Pilothouse Digital",
        avatar: "/testimonials/joshua.webp",
    },
]; 
</script>

<template>
    <div>
        <h2 class="text-xl font-semibold mb-1">
            Testimonials
        </h2>
        <p class="text-gray-600 mb-7">
            What people say about working with me
        </p>

        <div class="">
            <UCarousel v-slot="{ item }" loop arrows dots class-names class="max-w-2xl mx-auto"
                :autoplay="{ delay: 3000 }" :items="testimonials" :ui="{ item: 'base-1 lg:basis-1/2' }">
                <div style="background-color: #03101d;"
                    class="rounded-2xl py-4 px-7 shadow-md hover:shadow-lg transition-shadow relative justify-between flex flex-col h-54">

                    <!-- Testimonial Text -->
                    <p class="text-gray-400 text-xs leading-relaxed mb-6">
                        "{{ item.text }}"
                    </p>

                    <!-- Author Info with Avatar -->
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden">
                            <img :src="item.avatar" :alt="item.author" class="w-full h-full object-cover"
                                loading="lazy" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-sm" style="color: white">
                                {{ item.author }}
                            </h4>
                            <p class="text-gray-400 text-xs">{{ item.position }}</p>
                        </div>
                    </div>
                </div>
            </UCarousel>
        </div>
    </div>
</template>