<template>
  <section class="relative w-full h-[500px] overflow-hidden bg-cover bg-center"
    :style="{ backgroundImage: `url('/images/proyectos/${project}/banner/banner.webp')` }">
    <div class="absolute inset-0 bg-black/50"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white max-w-4xl mx-auto text-center px-6">
      <h1 class="text-5xl md:text-6xl font-Darina text-center  ">
        {{ title }}
      </h1>
      <p class="text-lg md:text-xl font-light">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
