<template>
  <section class="relative pb-12 pt-20 px-8 bg-amber-50 ">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class=" order-2 md:order-1">
          <Lightbox :images="images" />
        </div>

        <div class="order-1 md:order-2">
          <h2 class="text-5xl md:text-6xl text-center md:text-start font-Darina mb-12 text-gray-800">
            {{ title }}
          </h2>
          
          <div class="space-y-4 text-gray-700">
            <h2 class="text-lg leading-relaxed">
              {{ description }}
            </h2>
          </div>

          <!-- <div v-if="features && features.length > 0" class="mt-8 space-y-3">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-start gap-3"
            >
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">{{ feature }}</span>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white"></div>
  </section>
</template>

<script setup>
import Lightbox from './Lightbox.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  card: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    required: true
  }
})
</script>
