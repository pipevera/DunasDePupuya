<template>
  <NuxtLink :to="parcela.route" class="bg-black/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="h-40 max-h-40 overflow-hidden">
      <img 
        :src="parcela.imagen" 
        :alt="parcela.titulo" 
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-3xl font-Darina mb-3 text-gray-900">
        {{ parcela.titulo }}
      </h3>
      <p class="text-gray-600 text-lg">
        {{ parcela.descripcion }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  parcela: {
    type: Object,
    required: true
  }
})
</script>
