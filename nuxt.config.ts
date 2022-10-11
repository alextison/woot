// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    loading: {
        color: 'blue',
        height: '5px'
    },
    // ... other options
    modules: [
        // ...
        '@pinia/nuxt',
        '@pinia-orm/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ],
})
