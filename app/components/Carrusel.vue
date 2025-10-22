<template>
  <div class="relative">
    <div class="relative h-[300px] overflow-hidden rounded-2xl shadow-xl">
      <Transition :name="slideDirection">
        <img 
          :key="currentIndex"
          :src="images[currentIndex]" 
          :alt="`Imagen ${currentIndex + 1}`"
          class="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          @click="openLightbox(currentIndex)"
        />
      </Transition>
    </div>

    <button 
      @click="prevImage"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Anterior"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <button 
      @click="nextImage"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Siguiente"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
        @click="closeLightbox">
        <button @click.stop="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" aria-label="Cerrar">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div class="relative flex items-center justify-center w-full h-full" @click.stop>
          <img :src="images[lightboxIndex]" :alt="`Imagen ${lightboxIndex + 1}`"
            class="max-w-full max-h-[85vh] object-contain rounded-lg" @click.stop />

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
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const currentIndex = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const slideDirection = ref('slide-left')
let autoplayInterval = null

const nextImage = () => {
  slideDirection.value = 'slide-left'
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  slideDirection.value = 'slide-right'
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

// Auto-advance carousel every 6 seconds
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextImage()
  }, 6000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoplay()

  const handleEscape = (e) => {
    if (e.key === 'Escape' && lightboxOpen.value) {
      closeLightbox()
    }
  }
  window.addEventListener('keydown', handleEscape)

  onUnmounted(() => {
    stopAutoplay()
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

/* Slide left (next) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* Slide right (prev) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
