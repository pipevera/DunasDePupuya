<template>
  <section id="home" class="relative w-full h-[100svh] overflow-hidden">
    <video ref="bgVideo" class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop playsinline preload="auto">
      <source src="/video/bg-video.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-black/30"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white max-w-4xl mx-auto text-center space-y-16 px-8">
      <span class="bg-red-500 px-4 py-2 rounded-full shadow-xl hover:scale-105 transition">
        PARCELAS EN EL MAR
      </span>
      <h1 class="text-5xl md:text-[80px] font-thin font-Darina leading-none text-balance md:text-pretty">
        Tener un lugar en la costa no es un sueño, es una decisión
      </h1>
      <div class="space-y-4">
        <p class="text-base md:text-xl font-light text-balance">
          Más de 40 parcelas entregadas en la Costa de Navidad avalan nuestra
          promesa: acompañarte en un proceso seguro y cercano para que tu vida
          junto al mar sea una realidad.
        </p>
        <p class="text-base md:text-xl font-light">
          Con facilidades de financiamiento pensadas para ti y asesoria legal en
          sala de ventas. Estamos aquí para que dar este paso sea más simple y
          humano.
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-transparent via-amber-50/50 to-amber-50"></div>
  </section>
</template>

<script setup>
const bgVideo = ref(null)

onMounted(() => {
  if (bgVideo.value) {
    bgVideo.value.play().catch(() => {
      console.log('El navegador bloqueó el autoplay del video')
    })
  }
})
</script>
