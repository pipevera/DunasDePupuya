<template>
  <div class="relative z-20">
    <section class="relative w-full h-[500px] overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url('/images/proyectos/${project}/banner/banner.webp')` }">
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 flex flex-col justify-between h-full py-32 text-white max-w-7xl mx-auto px-10">
        <div class="max-w-2xl mx-auto" >
          <img :src="logo" alt="Logo" class="w-full h-auto">
          <h1 class="text-xl font-bold font-Raleway text-center">{{ title }}</h1>
          <h2 class="text-lg  font-Raleway text-center">{{ description }}</h2>
        </div>
        <div>
          <p class="text-2xl md:text-4xl text-center sm:text-3xl md:text-left font-bold font-Raleway" >Desde {{ value }} UF</p>
        </div>
      </div>
    </section>

    <div class="absolute -bottom-12 left-0 right-0">
      <div class="max-w-7xl mx-auto px-8">
        <div class="flex items-center justify-center md:justify-end gap-6">
          <div class="bg-black/20 backdrop-blur-sm shadow-lg w-64 h-28 rounded-2xl p-6 transform transition-all flex flex-col justify-center items-center">
            <h3 class="text-xl font-bold text-[#FF5858]">Solo 30% de pie</h3>
          </div>
          <div class="bg-black/20 backdrop-blur-sm shadow-lg w-64 h-28 rounded-2xl p-6 transform transition-all flex flex-col justify-center items-center">
            <h3 class="text-xl font-bold text-[#FF5858] leading-none text-center">De 1 a 10 años de crédito directo, sin intereses</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  logo: {
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
