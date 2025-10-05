<template>
  <section data-section="proyectos" class="relative py-16 md:py-24 bg-amber-50">
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
    imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    route: '/Marcordillera'
  },
  {
    id: 2,
    titulo: 'El Cardal',
    descripcion: 'Descubre tu refugio natural: parcelas amplias rodeadas de paisajes abiertos y tranquilidad absoluta.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    route: '/El-cardal'
  },
  {
    id: 3,
    titulo: 'Vista La Polcura',
    descripcion: 'Disfruta de atardeceres inolvidables desde tu parcela en un condominio seguro y panorámico.',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    route: '/Vista-la-polcura'
  },
  {
    id: 4,
    titulo: 'La Aguada',
    descripcion: 'Conecta con la calma de campo: un entorno verde y pausado, ideal para descansar y proyectar tu vida.',
    imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    route: '/La-aguada'
  }
]
</script>