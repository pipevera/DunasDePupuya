<template>
  <section class="relative py-16 px-6 bg-white">
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div v-if="imageSrc" class="order-2 md:order-1">
          <img 
            :src="imageSrc" 
            :alt="title"
            class="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        <!-- Contenido -->
        <div class="order-1 md:order-2">
          <h2 class="text-3xl md:text-4xl font-Darina font-bold text-gray-900 mb-6">
            {{ title }}
          </h2>
          
          <div class="space-y-4 text-gray-700">
            <p v-for="(paragraph, index) in description" :key="index" class="text-lg leading-relaxed">
              {{ paragraph }}
            </p>
          </div>

          <!-- Features opcionales -->
          <div v-if="features && features.length > 0" class="mt-8 space-y-3">
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
          </div>
        </div>
      </div>
    </div>
    
    <!-- Gradiente -->
    <div class="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent via-amber-50/50 to-amber-50"></div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: Array,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  }
})
</script>
