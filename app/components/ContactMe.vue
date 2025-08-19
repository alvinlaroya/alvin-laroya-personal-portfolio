<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    name: z.string('Name is required!'),
    email: z.string('Email is required!').email('Invalid email'),
    subject: z.string('Subject is required!'),
    message: z.string('Message is required!'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined
})

const toast = useToast()
const isSubmitting = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
    event.preventDefault();
    isSubmitting.value = true;

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify({
                service_id: 'service_zcz9jfs',
                template_id: 'template_wrjungi',
                user_id: 'DUw16T85P5iAir2NQ',
                template_params: {
                    'from_name': state.name,
                    'from_email': state.email,
                    'subject': state.subject,
                    'message': state.message
                }
            }),
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
            state.name = undefined;
            state.email = undefined;
            state.subject = undefined;
            state.message = undefined;
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
            color: 'red'
        });
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <div class="w-full">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormField label="Name" name="name">
                <UInput v-model="state.name" size="xl" class="w-full" :disabled="isSubmitting" />
            </UFormField>

            <UFormField label="Email" name="email">
                <UInput v-model="state.email" size="xl" class="w-full" :disabled="isSubmitting" />
            </UFormField>

            <UFormField label="Subject" name="subject">
                <UInput v-model="state.subject" size="xl" class="w-full" :disabled="isSubmitting" />
            </UFormField>

            <UFormField label="Message" name="message">
                <UTextarea v-model="state.message" size="xl" placeholder="Type your message here..." class="w-full"
                    :disabled="isSubmitting" />
            </UFormField>

            <UButton type="submit" class="w-full flex items-center justify-center cursor-pointer" size="xl"
                :loading="isSubmitting" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </UButton>
        </UForm>
    </div>
</template>