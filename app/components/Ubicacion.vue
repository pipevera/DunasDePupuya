<template>
  <section id="ubicacion" class="py-12 px-8 bg-gradient-to-b from-white to-amber-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-5xl md:text-6xl font-Darina text-gray-800 mb-4">
          Nuestra Ubicación
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Encuentra el paraíso en la Costa de Navidad, Región de O'Higgins
        </p>
      </div>

      <!-- Mapa a lo largo -->
      <div class="rounded-2xl overflow-hidden shadow-xl border-2 border-[#FFD1D1] hover:border-[#FF5858] transition-all">
        <iframe 
          :src="mapUrl"
          width="100%" 
          height="500" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
// Puedes agregar props si necesitas diferentes ubicaciones para cada proyecto
const props = defineProps({
  mapUrl: {
    type: String,
  }
})
</script>
