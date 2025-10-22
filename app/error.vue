<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center py-12 px-8">
      <div class="mb-8 flex justify-center">
        <div class="relative">
          <div class="w-32 h-32 bg-[#FF5858] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full opacity-50"></div>
          <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full opacity-50"></div>
        </div>
      </div>

      <h1 class="text-8xl md:text-9xl font-Darina text-[#FF5858] mb-4">
        404
      </h1>

      <h2 class="text-3xl md:text-4xl font-Darina text-gray-800 mb-4">
        ¡Ups! Página no encontrada
      </h2>
      
      <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        La página que buscas no existe o ha sido movida. Te invitamos a explorar nuestros proyectos desde el inicio.

      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink 
          to="/"
          class="inline-flex items-center gap-2 bg-[#FF5858] hover:bg-[#FF4040] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Volver al Inicio
        </NuxtLink>

        <button 
          @click="handleBack"
          class="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl border-2 border-[#FFD1D1] hover:border-[#FF5858]"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver Atrás
        </button>
      </div>

      <div class="mt-16 flex justify-center gap-2">
        <div class="w-3 h-3 bg-[#FF5858] rounded-full animate-bounce" style="animation-delay: 0s"></div>
        <div class="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
        <div class="w-3 h-3 bg-orange-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

useHead({
  title: 'Página no encontrada | Dunas de Pupuya',
  meta: [
    { name: 'description', content: 'Página de error - Dunas de Pupuya' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>