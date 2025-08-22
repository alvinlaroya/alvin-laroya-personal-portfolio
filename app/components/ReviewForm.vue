<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    name: z.string('Name is required!'),
    message: z.string('Message is required!'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    name: undefined,
    message: undefined
})

const open = inject('open') as boolean;

const toast = useToast()
const isSubmitting = ref(false)
const form = ref();

const handleSubmit = async () => {
    await form.value.submit()
}

const emit = defineEmits(['submit'])
async function onSubmit(event: FormSubmitEvent<Schema>) {
    event.preventDefault();
    isSubmitting.value = true;

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({
                'reviewed_by': state.name,
                'message': state.message
            }),
            headers: {
                'Content-Type': 'application/json'  // Fixed: proper header format
            }
        });
        if (response.ok) {
            toast.add({
                title: 'Success',
                description: 'Your review has been submitted successfully!',
                color: 'primary'
            });

            const result = await response.json();
            emit('submit')

            // Reset form after successful submission
            state.name = undefined;
            state.message = undefined;
        } else {
            const errorData = await response.text();
            console.error('Submit Review Error:', errorData);
            throw new Error(`Failed to submit review: ${response.status}`);
        }
    } catch (error) {
        console.error("Error submitting review:", error);
        toast.add({
            title: 'Error',
            description: 'Failed to submit your review. Please try again.',
            color: 'error'
        });
    } finally {
        isSubmitting.value = false;
    }
}
const cancelHandler = () => {
    open.value = false;
    state.name = undefined;
    state.message = undefined;
}
</script>

<template>
    <UModal title="Write a review" :open="open" :ui="{ footer: 'justify-end' }">
        <template #body>
            <div class="w-full">
                <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormField label="Name" name="name">
                        <UInput v-model="state.name" size="xl" class="w-full" :disabled="isSubmitting" />
                    </UFormField>

                    <UFormField label="Message" name="message">
                        <UTextarea v-model="state.message" size="xl" placeholder="Type your message here..."
                            class="w-full" :disabled="isSubmitting" />
                    </UFormField>
                </UForm>
                <blockquote v-if="state?.name?.length > 0 && state?.message?.length > 0"
                    class="border-l-4 border-gray-500 italic mt-5 pl-4 md:pl-8 py-4 mx-3">
                    <p class="text-[16px] font-normal text-white">
                        {{ state.message }}
                    </p>
                    <div class="flex justify-between">
                        <div class="flex space-x-2 text-gray-400 text-xs items-center">
                            <Icon name="lucide:arrow-big-up" size="1.2rem" />
                            <span>2 upvotes</span>
                        </div>
                        <cite class="block text-right mt-4 text-gray-600">- {{ state.name }}</cite>
                    </div>
                </blockquote>
            </div>
        </template>
        <template #footer>
            <UButton label="Cancel" color="neutral" variant="outline" @click="cancelHandler" />
            <UButton @click="handleSubmit" class="flex items-center justify-center cursor-pointer" size="sm"
                :loading="isSubmitting" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Submit Review' }}
            </UButton>
        </template>
    </UModal>
</template>