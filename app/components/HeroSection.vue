<template>
  <section id="home" class="relative w-full h-[100svh] overflow-hidden">
    <video ref="bgVideo" class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop playsinline
      preload="auto">
      <source src="/video/bg-video.mp4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-black/30"></div>

    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white max-w-5xl mx-auto text-center space-y-6 px-8">

      <h1 class="text-5xl md:text-[80px] font-thin font-Darina leading-none ">
        Tener un lugar en la costa, <br> no es un sueño, es una decisión.
      </h1>
      <p class="text-base md:text-xl font-light text-balance font-Raleway max-w-4xl">
        Más de 40 parcelas entregadas en la Costa de Navidad nos avalan.
        Con facilidades de financiamiento y asesoría legal, hacemos que tu vida junto al mar sea una realidad.
      </p>
      <button @click="scrollToProyectos"
        class="bg-[#FF5858] hover:bg-red-600 px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 font-medium font-Raleway">
        VER PARCELAS
      </button>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-transparent to-[#EFE9EB]"></div>
  </section>
</template>

<script setup>
const bgVideo = ref(null)

const scrollToProyectos = () => {
  const el = document.querySelector('#proyectos')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  if (bgVideo.value) {
    bgVideo.value.play().catch(() => {
      console.log('El navegador bloqueó el autoplay del video')
    })
  }
})
</script>
