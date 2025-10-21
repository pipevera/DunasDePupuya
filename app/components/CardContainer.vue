<template>
  <section id="proyectos" class="relative py-16 md:py-24 bg-amber-50">
    <div class="max-w-7xl mx-auto px-8">
      <h2 class="text-5xl md:text-6xl font-Darina text-center mb-12 text-gray-800">
        Nuestras Parcelas
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
        <ParcelaCard 
          v-for="parcela in parcelas" 
          :key="parcela.id" 
          :parcela="parcela" 
        />
      </div>
    </div>
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