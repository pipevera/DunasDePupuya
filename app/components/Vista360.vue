<template>
  <section class="py-16 px-8 relative bg-[url('/images/backgrounds/ola-1.png')] sm:bg-fixed bg-cover bg-center bg-no-repeat">
    
    <div class="max-w-7xl mx-auto">
      <h2  class="text-5xl md:text-6xl font-Darina mb-12 text-gray-800 text-center">
        Vive la experiencia 360° de {{ project }}
      </h2>
    </div>  
    <div class="w-full  max-w-7xl mx-auto">
      <iframe 
        title="Tour virtual 360"
        :src="tour" 
        class="w-full border-2 border-[#FFD1D1] hover:border-[#FF5858] transition-all rounded-2xl "
        width="100%" 
        height="500" 
        allowfullscreen
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      
  </section>
</template>

<script setup>
defineProps({
  tour: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  }
})
</script>

<style>

</style>