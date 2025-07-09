import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Enable SSR for better SEO and performance
    ssr: false, // Disable SSR for Tauri desktop app

    // Development server configuration
    devServer: {
        port: 3000,
        host: 'localhost'
    },

    // Build configuration
    // build: {
    //     // Ensure compatibility with Tauri
    //     target: 'esnext'
    // },

    // Vite configuration for Tauri compatibility
    // vite: {
    //     // Ensure proper asset handling
    //     build: {
    //         target: 'esnext',
    //         rollupOptions: {
    //             external: ['@tauri-apps/api']
    //         }
    //     }
    // },

    // // App configuration
    // app: {
    //     head: {
    //         title: 'Tauri + Nuxt App',
    //         meta: [
    //             { charset: 'utf-8' },
    //             { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    //         ]
    //     }
    // },

    // // Modules
    // modules: [
    //     // Add any Nuxt modules you need here
    // ],

    // // CSS
    // css: [
    //     // Global CSS files
    // ],

    // // Runtime config
    // runtimeConfig: {
    //     // Private keys (only available on server-side)
    //     // Public keys (exposed to client-side)
    //     public: {
    //         // Add any public runtime config here
    //     }
    // }
}) 
