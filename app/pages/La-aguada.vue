<template>
  <div>
    <ProjectBanner 
      project="laaguada" 
      title="La Aguada"
      description="Parcelas exclusivas en la costa con vista al mar y financiamiento flexible" 
    />

    <ProjectDescription
      title="Sobre La Aguada"
      :description="[
        'La Aguada es el proyecto ideal para familias que buscan un lugar seguro y acogedor cerca del mar, con todas las comodidades modernas.',
        'Ubicado en una zona consolidada de la costa de Navidad, ofrece tranquilidad, seguridad y una comunidad establecida de vecinos.',
        'Perfecto para construir tu casa de veraneo o tu hogar permanente junto al mar, con acceso a servicios y comercio cercano.'
      ]"
      image-src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80"
      :features="[
        'Parcelas desde 4.500 m²',
        'Zona residencial consolidada',
        'Financiamiento hasta 36 meses',
        'Todos los servicios básicos',
        'A 3 minutos de la playa',
        'Cerca de comercio y servicios'
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
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
  'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80',
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&q=80',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80'
]
</script>

<style></style>