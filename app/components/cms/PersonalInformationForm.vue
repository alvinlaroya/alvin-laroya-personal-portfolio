<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const data = inject('profile', {
    name: '',
    job: '',
    contact: '',
    email: '',
    course: '',
    address: ''
}) as {
    name?: string
    job?: string
    contact?: string
    email?: string
    course?: string
    address?: string
}

const schema = z.object({
    name: z.string('Name is required!'),
    job: z.string('Job is required!'),
    contact: z.string('Contact is required!'),
    email: z.string('Email is required!'),
    course: z.string('Course is required!'),
    address: z.string('Address is required!'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    name: undefined,
    job: undefined,
    contact: undefined,
    email: undefined,
    course: undefined,
    address: undefined,
});

watch(data, async (newData, oldQuestion) => {
    state.name = newData.name;
    state.job = newData.job;
    state.contact = newData.contact;
    state.email = newData.email;
    state.course = newData.course;
    state.address = newData.address;
}, {
    immediate: true
})

const toast = useToast();
const isSubmitting = ref(false);
async function onSubmit(event: FormSubmitEvent<Schema>) {
    event.preventDefault();
    isSubmitting.value = true;

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json'  // Fixed: proper header format
            }
        });

        if (response.ok) {
            toast.add({
                title: 'Success',
                description: 'Your message has been sent successfully!',
                color: 'primary'
            });

            // Reset form after successful submission
            /* state.name = undefined;
            state.email = undefined;
            state.subject = undefined;
            state.message = undefined; */
        } else {
            const errorData = await response.text();
            console.error('EmailJS Error:', errorData);
            throw new Error(`Failed to send email: ${response.status}`);
        }
    } catch (error) {
        console.error("Error sending email:", error);
        toast.add({
            title: 'Error',
            description: 'Failed to send message. Please try again.',
            color: 'error'
        });
    } finally {
        isSubmitting.value = false;
    }
}

const informations = [
    {
        icon: 'lucide:briefcase-business',
        text: 'Software Developer'
    },
    {
        icon: 'lucide:phone',
        text: '+639388566223',
        href: 'tel:+639388566223'
    },
    {
        icon: 'lucide:mail',
        text: 'alvinreggaelaroya@gmail.com',
        href: 'mailto:alvinreggaelaroya@gmail.com'
    },
    {
        icon: 'lucide:graduation-cap',
        text: 'Computer Science'
    },
    {
        icon: 'lucide:map-pin',
        text: 'Agoo, La Union, Philippines'
    },
]
</script>

<template>
    <aside class="flex lg:sticky top-16 lg:h-[calc(100vh-4rem)] hover:overflow-auto w-full lg:w-76">
        <div class="flex flex-row lg:flex-col space-x-4 p-4 w-full space-y-4 tracking-wide">
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <div class="flex justify-center items-center object-bottom">
                    <NuxtImg src="/profile2.webp" fit="cover" alt="profile-image" width="300" height="300"
                        class="w-[140px] lg:w-[200px] rounded-full" />
                </div>
                <div class="flex flex-col space-y-3 justify-center">
                    <UFormField label="Name" name="name" class="text-xs">
                        <UInput v-model="state.name" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UFormField label="Job" name="name" class="text-xs">
                        <UInput v-model="state.job" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UFormField label="Contact" name="name" class="text-xs">
                        <UInput v-model="state.contact" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UFormField label="Email" name="name" class="text-xs">
                        <UInput v-model="state.email" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UFormField label="Course" name="name" class="text-xs">
                        <UInput v-model="state.course" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UFormField label="Address" name="name" class="text-xs">
                        <UInput v-model="state.address" size="sm" class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                    <UButton type="submit" class="w-full flex items-center justify-center cursor-pointer" size="lg"
                        :loading="isSubmitting" :disabled="isSubmitting">
                        {{ isSubmitting ? 'Submitting...' : 'Save Changes' }}
                    </UButton>
                    <USeparator class="mt-3 hidden lg:block" />
                    <div class="hidden lg:block">
                        <div class="mt-2">
                            <h2 class="text-sm text-gray-200">Pronounce: <span class="text-gray-400">he/his</span>
                            </h2>
                        </div>
                        <div class="mt-2">
                            <h2 class="text-sm text-gray-200">Hobbies:</h2>
                            <span class="text-gray-400 text-xs">Coding • Playing Guitar • Singing • FPS Gaming •
                                Coffee
                                •
                                Nature Travel </span>
                        </div>
                    </div>
                    <Connections class="hidden lg:block" />
                </div>
            </UForm>

        </div>
    </aside>
</template>