import { fileURLToPath, URL } from 'node:url'
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['@/assets/css/main.css'],
  
  // Configuración de Vite para Nuxt 4
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '~': fileURLToPath(new URL('.', import.meta.url))
      }
    }
  }
})