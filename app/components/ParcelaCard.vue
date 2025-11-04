<template>
  <NuxtLink :to="parcela.route" class="bg-black/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <div class="h-40 max-h-40 w-full overflow-hidden">
      <NuxtImg 
        :src="parcela.imagen" 
        :alt="parcela.titulo" 
        :title="parcela.titulo"
        loading="lazy"
        width="400"
        height="240"
        quality="80"
        class="object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <h3 class="text-3xl font-Darina mb-3 text-white">
        {{ parcela.titulo }}
      </h3>
      <p class="text-white text-lg">
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
