<template>
  <section class="py-12 px-8 relative">
    
    <div class="max-w-7xl mx-auto">
      <h2 v-if="title" class="text-5xl md:text-6xl font-Darina mb-12 text-gray-800 text-start  max-w-3xl">
        {{ title }}
      </h2>

      <div class="relative">
        <div class="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
          <img :src="images[currentIndex]" :alt="`Imagen ${currentIndex + 1}`"
            class="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            @click="openLightbox(currentIndex)" />

          <div class="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>
        </div>

        <button @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Anterior">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Siguiente">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div class="mt-6 grid grid-cols-4 md:grid-cols-6 gap-3">
        <div v-for="(image, index) in images" :key="index" @click="currentIndex = index"
          class="relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105"
          :class="currentIndex === index ? 'ring-4 ring-amber-300' : 'opacity-70 hover:opacity-100'">
          <img :src="image" :alt="`Miniatura ${index + 1}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          @click="closeLightbox">
          <button @click="closeLightbox"
            class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" aria-label="Cerrar">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="flex flex-col items-center w-full h-full" @click.stop>
            <div class="relative flex-1 flex items-center justify-center w-full" @click="closeLightbox">
              <img :src="images[lightboxIndex]" :alt="`Imagen ${lightboxIndex + 1}`"
                class="max-w-full max-h-[70vh] object-contain rounded-lg" @click.stop />


              <button v-if="lightboxIndex > 0" @click.stop="prevLightboxImage"
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all"
                aria-label="Anterior">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button v-if="lightboxIndex < images.length - 1" @click.stop="nextLightboxImage"
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all"
                aria-label="Siguiente">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            <div class="w-full max-w-5xl px-4" @click.stop>
              <div class="flex gap-2 overflow-x-auto py-2 justify-center">
                <div v-for="(image, index) in images" :key="index" @click="lightboxIndex = index"
                  class="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105"
                  :class="lightboxIndex === index ? 'ring-4 ring-amber-300' : 'opacity-60 hover:opacity-100'">
                  <img :src="image" :alt="`Miniatura ${index + 1}`" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Galería'
  },
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

const openLightbox = (index) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextLightboxImage = () => {
  if (lightboxIndex.value < props.images.length - 1) {
    lightboxIndex.value++
  }
}

const prevLightboxImage = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
  }
}

// Cerrar lightbox con tecla Escape
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && lightboxOpen.value) {
      closeLightbox()
    }
  }
  window.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
