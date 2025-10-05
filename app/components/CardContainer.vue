<template>
  <section class="relative py-16 md:py-24 bg-amber-50">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <h2 class="text-3xl md:text-5xl font-Darina text-center mb-12 text-gray-800">
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
    descripcion: 'Hermosa parcela con vista directa al océano Pacífico. Ideal para construir tu casa de descanso frente al mar.',
    imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    route: '/proyectos/Marcordillera'
  },
  {
    id: 2,
    titulo: 'El Cardal',
    descripcion: 'Rodeada de naturaleza y a solo 200 metros de la playa. Perfecta para quienes buscan tranquilidad y privacidad.',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    route: '/proyectos/El-cardal'
  },
  {
    id: 3,
    titulo: 'Vista La Polcura',
    descripcion: 'Ubicación privilegiada con las mejores puestas de sol. Terreno plano listo para construir tu proyecto soñado.',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    route: '/proyectos/Vista-la-polcura'
  },
  {
    id: 4,
    titulo: 'La Aguada',
    descripcion: 'Entre dunas naturales y vegetación costera. Acceso directo a la playa y excelente inversión a largo plazo.',
    imagen: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    route: '/proyectos/La-aguada'
  }
]
</script>