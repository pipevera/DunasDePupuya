<template>
  <section id="proyectos"
    class="relative py-20 md:py-40 bg-[url('/images/cardContainer/nuestrasparcelas.webp')] bg-center sm:bg-fixed bg-cover ">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="absolute top-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-[#EFE9EB] to-transparent">
    </div>
    <div class="max-w-7xl mx-auto px-8">
      <h2 class="text-5xl md:text-6xl font-Darina text-center mb-12 text-white relative z-10">
        Nuestras Parcelas
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
        <ParcelaCard v-for="parcela in parcelas" :key="parcela.id" :parcela="parcela" />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-40 z-20 bg-gradient-to-b from-transparent to-[#EFE9EB]"></div>
  </section>
</template>

<script setup>
const parcelas = [
  {
    id: 1,
    titulo: 'Marcordillera',
    descripcion: 'Vive entre la montaña y el mar: un lugar con vistas únicas y aire puro para disfrutar cada día.',
    imagen: '/images/cards/marcordillera.webp',
    route: '/Marcordillera'
  },
  {
    id: 2,
    titulo: 'El Cardal',
    descripcion: 'Descubre tu refugio natural: parcelas amplias rodeadas de paisajes abiertos y tranquilidad absoluta.',
    imagen: '/images/cards/el-cardal.webp',
    route: '/El-cardal'
  },
  {
    id: 3,
    titulo: 'Vista La Polcura',
    descripcion: 'Disfruta de atardeceres inolvidables desde tu parcela en un condominio seguro y panorámico.',
    imagen: '/images/cards/vistalapolcura.webp',
    route: '/Vista-la-polcura'
  },
  {
    id: 4,
    titulo: 'La Aguada',
    descripcion: 'Conecta con la calma de campo: un entorno verde y pausado, ideal para descansar y proyectar tu vida.',
    imagen: '/images/cards/la-aguada.webp',
    route: '/La-aguada'
  }
]
</script>