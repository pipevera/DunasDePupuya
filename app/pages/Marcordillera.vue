<template>
  <div>
    <ProjectBanner 
      project="marcordillera" 
      title="Marcordillera"
      description="Vive rodeado de naturaleza y montañas con acceso directo a la costa" 
    />

    <ProjectDescription
      title="Sobre Marcordillera"
      :description="[
        'Marcordillera combina lo mejor de dos mundos: la majestuosidad de la cordillera y la cercanía al mar. Un proyecto único para quienes buscan tranquilidad y conexión con la naturaleza.',
        'Ubicado estratégicamente entre montañas y costa, ofrece vistas panorámicas incomparables y un entorno privilegiado para tu descanso.',
        'Parcelas amplias con servicios completos y financiamiento adaptado a tus necesidades.'
      ]"
      image-src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
      :features="[
        'Parcelas desde 8.000 m²',
        'Vista a la cordillera y al mar',
        'Financiamiento hasta 48 meses',
        'Luz y agua disponible',
        'Camino de acceso consolidado',
        'Entorno natural protegido'
      ]"
    />

    <ProjectGallery
      title="Galería de Imágenes"
      :images="galleryImages"
    />
  </div>
</template>

<script lang="ts" setup>
const galleryImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80'
]
</script>

<style>
</style>