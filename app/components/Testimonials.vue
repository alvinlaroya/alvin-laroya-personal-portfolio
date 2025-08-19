<script setup>
const testimonials = [
    {
        text: "Working with Alvin has always been a great experience. He’s a reliable and collaborative developer who consistently brings creative solutions to the table. His strong problem-solving skills and willingness to help teammates make him a valuable asset to any project or team.",
        author: "Jonjie Viduya",
        position: "Sr. Fullstack Developer, Pen Brothers",
        avatar: "/profile.webp",
    },
    {
        text: "Great problem-solver and team player. Always goes above and beyond.",
        author: "Lawrence Bonilla",
        position: "Frontend Develope, Pilothouse Digital",
        avatar: "/profile.webp",
    },
]; 
</script>

<template>
    <div>
        <div class="container">
            <h2 data-aos="fade-up" class="text-xl font-semibold mb-1">
                Testimonials
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" class="text-gray-600 mb-12">
                What people say about working with me
            </p>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="(testimonial, i) in testimonials" data-aos="fade-up" :data-aos-delay="i * 200"
                    class="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl py-4 px-7 shadow-md hover:shadow-lg transition-shadow relative">
                    <!-- Quote Icon -->
                    <div
                        class="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M11 8c2.2 0 4 1.8 4 4v8h-8v-8h4c0-2.2-1.8-4-4-4v-4c2.2 0 4 1.8 4 4zm12-4v4c-2.2 0-4 1.8-4 4v8h-8v-8h4c0-2.2-1.8-4-4-4v-4c2.2 0 4 1.8 4 4h8z" />
                        </svg>
                    </div>

                    <!-- Testimonial Text -->
                    <p class="text-neutral-700 text-sm leading-relaxed mb-6">
                        "{{ testimonial.text }}"
                    </p>

                    <!-- Author Info with Avatar -->
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100">
                            <img :src="testimonial.avatar" :alt="testimonial.author" class="w-full h-full object-cover"
                                loading="lazy" />
                        </div>
                        <div>
                            <h4 class="font-semibold text-neutral-900">
                                {{ testimonial.author }}
                            </h4>
                            <p class="text-neutral-600 text-sm">{{ testimonial.position }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>