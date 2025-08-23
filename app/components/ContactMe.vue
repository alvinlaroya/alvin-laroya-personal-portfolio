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
const isSubmitting = ref(false);

const { send } = useEmailJs();
async function onSubmit(event: FormSubmitEvent<Schema>) {
    event.preventDefault();
    isSubmitting.value = true;

    try {
        await send(<{ name: string, email: string, subject: string, message: string }>{
            name: state.name,
            email: state.email,
            subject: state.subject,
            message: state.message
        })

        toast.add({
            title: 'Success',
            description: 'Your message has been sent successfully!',
            color: 'primary'
        });

        // Reset form after successful submission
        state.name = undefined;
        state.email = undefined;
        state.subject = undefined;
        state.message = undefined
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
        <ClientOnly>
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
        </ClientOnly>
    </div>
</template>