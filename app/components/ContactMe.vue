<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined
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
        <h2 class="text-xl font-semibold">Contact Me</h2>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormField label="Email" name="email">
                <UInput v-model="state.email" size="xl" class="w-full" />
            </UFormField>

            <UFormField label="Password" name="password">
                <UTextarea size="xl" placeholder="Type something..." class="w-full" />
            </UFormField>

            <UButton type="submit">
                Submit
            </UButton>
        </UForm>
    </div>
</template>