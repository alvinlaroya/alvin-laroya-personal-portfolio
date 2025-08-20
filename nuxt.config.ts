// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/supabase'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'netlify',
    experimental: {
      wasm: true
    },
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      adminKey: process.env.NUXT_PUBLIC_ADMIN_KEY,
      n8nWebhookUrl: process.env.NUXT_PUBLIC_N8N_WEBHOOK_URL,
    },
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  },
  supabase: {
    url: process.env.SUPABASE_UR,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  }
})