export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
     head: {
      title: 'Dunas de Pupuya',
      htmlAttrs: {
        lang: 'es',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      preload: true,
      preconnect: true,
      download: true,
      base64: true,
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  
})