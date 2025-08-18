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
async function onSubmit(event: FormSubmitEvent<Schema>) {
    event.preventDefault();
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}
</script>

<template>
    <div class="w-full">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormField label="Name" name="name">
                <UInput v-model="state.name" size="xl" class="w-full" />
            </UFormField>

            <UFormField label="Email" name="email">
                <UInput v-model="state.email" size="xl" class="w-full" />
            </UFormField>

            <UFormField label="Subject" name="subject">
                <UInput v-model="state.subject" size="xl" class="w-full" />
            </UFormField>

            <UFormField label="Message" name="message">
                <UTextarea v-model="state.message" size="xl" placeholder="Type something..." class="w-full" />
            </UFormField>

            <UButton type="submit">
                Send Message
            </UButton>
        </UForm>
    </div>
</template>