<template>
  <section class="py-16 px-8 relative">
    
    <div class="max-w-7xl mx-auto">
      <h2  class="text-5xl md:text-6xl font-Darina mb-12 text-gray-800 text-center">
        Vista 360
      </h2>
    </div>  
    <div class="w-full shadow-xl rounded-2xl relative max-w-7xl mx-auto">
      <iframe 
        :src="tour" 
        class="w-full rounded-2xl"
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
  }
})
</script>

<style>

</style>