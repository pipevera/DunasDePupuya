import { fileURLToPath, URL } from 'node:url'
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['@/assets/css/main.css'],
  googleFonts: {
    families: {
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      preload: true,
      preconnect: true,
      download: true,
      base64: true,
    },
  },
  
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