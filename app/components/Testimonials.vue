<script setup>
const testimonials = [
    {
        text: "Ang pogi talaga ni Alvin. Sarap nya. katrabaho",
        author: "Jonjie Viduya",
        position: "Tech Lead, Tech Corp",
        avatar: "/profile.webp",
    },
    {
        text: "Great problem-solver and team player. Always goes above and beyond.",
        author: "John Smith",
        position: "Project Manager, Digital Solutions",
        avatar: "/profile.webp",
    },
]; 
</script>

<template>
    <div>
        <div class="container mx-auto px-4">
            <h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-4">
                Testimonials
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
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