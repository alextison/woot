// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
        transpile: ['@vee-validate/rules']
    },
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
    ]
})
