<template>
  <section class="relative pb-12 pt-20 px-8 bg-[#EEF0F1]">
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
            <h2 class="text-lg leading-relaxed font-Raleway">
              {{ description }}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-8">
          <h3 class="text-4xl text-center font-Darina mb-6 text-gray-800">
            {{ titleDescription }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              v-for="(item, idx) in features"
              :key="idx"
              class="flex items-center justify-center gap-4 p-4 bg-white rounded-2xl shadow-lg border-2 border-[#FFD1D1] transition-all hover:border-[#FF5858]"
            >
              <div class="flex-shrink-0 mt-1">
                <svg class="w-6 h-6 text-[#FF5858]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-gray-700 font-Raleway">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent via-white/50 to-white"></div> -->
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
  },
  features: {
    type: Array,
  },
  titleDescription: {
    type: String,
    default: 'Características Destacadas'
  }
})
</script>
