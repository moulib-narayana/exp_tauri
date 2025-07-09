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

    // Page transitions configuration
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        }
    },

    // CSS for page transitions
    css: [
        '~/assets/transitions.css'
    ],

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

    // // Runtime config
    // runtimeConfig: {
    //     // Private keys (only available on server-side)
    //     // Public keys (exposed to client-side)
    //     public: {
    //         // Add any public runtime config here
    //     }
    // }
}) 
