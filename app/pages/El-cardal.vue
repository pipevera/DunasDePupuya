<template>
  <div>
    <ProjectBanner 
      project="elcardal" 
      title="El Cardal"
      description="Parcelas exclusivas en la costa con vista al mar y financiamiento flexible" 
    />

    <ProjectDescription
      title="Sobre El Cardal"
      :description="[
        'El Cardal es un proyecto inmobiliario ubicado en la hermosa costa de Navidad, diseñado para quienes buscan un refugio junto al mar sin renunciar a la comodidad y seguridad.',
        'Nuestras parcelas cuentan con todos los servicios básicos, acceso pavimentado y una ubicación privilegiada a pocos minutos de la playa.',
        'Con más de 10 años de experiencia en el mercado, garantizamos un proceso transparente y acompañamiento personalizado en cada etapa de tu inversión.'
      ]"
      image-src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
      :features="[
        'Parcelas desde 5.000 m²',
        'Financiamiento flexible hasta 36 meses',
        'Agua potable y electricidad',
        'Acceso pavimentado',
        'A 5 minutos de la playa',
        'Asesoría legal incluida'
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
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80',
  'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80',
  'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80'
]
</script>

<style></style>