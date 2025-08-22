<script setup>
definePageMeta({
    layout: false,
});

const supabase = useSupabaseClient();
const email = ref('')

const signInWithOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
        email: email.value,
        options: {
            emailRedirectTo: 'http://localhost:3000/confirm',
        }
    })
    if (error) console.log(error)
}
</script>

<template>
    <div>
        <input v-model="email" type="email" />
        <button c @click="signInWithOtp">
            Sign In with E-Mail
        </button>
    </div>
</template>