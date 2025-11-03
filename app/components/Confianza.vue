<template>
  <section id="nosotros"
    class="relative bg-[url('/images/confianza/confianza-background.webp')] pb-20 pt-20 md:pt-40 bg-cover bg-center md:bg-fixed">
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="absolute top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-[#F0EAEC] to-transparent">
    </div>

    <div class="relative z-20 max-w-7xl mx-auto py-12 px-8">
      <h2
        class="text-4xl md:text-5xl lg:text-6xl text-white font-Sans text-start text-balance md:text-start mb-16 md:mb-24 font-Raleway">
        Confianza y facilidades reales para que tu compra sea simple
      </h2>

      <div class="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
        <div class="text-white space-y-6 w-full md:w-1/3">
          <p class="text-lg">
            Somos un proyecto familiar, nacido de nuestro propio sueño de dejar la ciudad y vivir cerca del mar.
          </p>
          <p class="text-lg">
            Sentimos que esto es mucho más que vender terrenos: es dar vida a una comunidad. Cada familia, cada persona
            que llega, suma su historia y sus sueños para que este lugar crezca.
          </p>
          <p class="text-lg">
            Estamos formando juntos, un espacio donde la vida se respira más lento sin perder el ritmo del desarrollo.
          </p>
        </div>
        <div class="w-full md:w-2/3">
          <div class="rounded-2xl w-full h-64 md:h-80 overflow-hidden shadow-2xl">
            <NuxtImg loading="lazy" src="/images/saladeventas/saladeventas.webp" alt="Sala de Ventas Dunas de Pupuya"
              class="object-cover relative w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-transparent via-amber-50/50 to-amber-50"></div> -->
  </section>
</template>
