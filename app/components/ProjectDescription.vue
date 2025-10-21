<template>
  <section class="relative py-16 px-8 bg-white">
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div  class="hidden md:block order-2 md:order-1">
          <img 
            :src="card" 
            :alt="title"
            class="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        <!-- Contenido -->
        <div class="order-1 md:order-2">
          <h1 class="text-5xl md:text-6xl font-Darina mb-12 text-gray-800">
            {{ title }}
          </h1>
          
          <div class="space-y-4 text-gray-700">
            <p class="text-lg leading-relaxed">
              {{ description }}
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
    type: String,
    required: true
  },
  card: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  }
})
</script>
