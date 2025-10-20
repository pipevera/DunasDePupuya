<template>
  <div>
    <ProjectBanner 
      project="vistalapolcura" 
      title="Vista La Polcura"
      description="Parcelas premium con vista panorámica al océano Pacífico" 
    />

    <ProjectDescription
      title="Sobre Vista La Polcura"
      :description="[
        'Vista La Polcura es nuestro proyecto más exclusivo, diseñado para quienes buscan una experiencia de vida única frente al mar.',
        'Con vistas panorámicas inigualables al océano Pacífico, cada parcela ha sido cuidadosamente seleccionada para maximizar tu conexión con el entorno marino.',
        'Un lugar donde cada amanecer y atardecer se convierten en un espectáculo natural desde la comodidad de tu propio terreno.'
      ]"
      image-src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80"
      :features="[
        'Parcelas premium desde 6.000 m²',
        'Vista panorámica al océano',
        'Financiamiento preferencial',
        'Infraestructura completa',
        'Acceso directo a la playa',
        'Zona de alto valor turístico'
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
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?w=1200&q=80',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=80',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80',
  'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1200&q=80',
  'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80'
]
</script>

<style>
</style>