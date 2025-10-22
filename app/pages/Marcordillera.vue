<template>
  <div>
    <ProjectBanner 
      :project="projectData.name" 
      :logo="projectData.logo"
      :value="projectData.value"
      :title="projectData.title"
      :description="projectData.description" 
    />

    <ProjectDescription
      :title="projectData.projectTitle"
      :logo="projectData.logo"
      :description="projectData.projectDescription"
      :card="projectData.card"
      :images="projectData.images"
    />

    <ProjectGallery
      title="Donde la montaña, mar y naturaleza se dan la mano."
      :images="projectData.galleryImages"
    />
  
    <Table
      title="Terrenos Disponibles"
      :terrenos="terrenos.marcordillera"
    />

    <Ubicacion 
      :mapUrl="projectData.mapUrl"
    />
  </div>
</template>

<script setup>
import projects from '@/data/projects'
import terrenos from '@/data/terrenos'
useSeoMeta({
  title: 'Terrenos en Pupuya con vista al mar | Marcordillera',
  description: 'Vive entre el mar y la montaña en Marcordillera, terrenos amplios cerca de la playa y rodeados de naturaleza. Acceso a Playa de Matanzas, Humedal la Vega de Pupuya y Bikepark Reserva el Maitén.',
  ogTitle: 'Terrenos en Pupuya con vista al mar | Marcordillera',
  ogDescription: 'Imagina despertar con la vista del mar y los cerros de Pupuya. Terrenos ideales para construir tu hogar rodeado de naturaleza y tranquilidad.',
  ogImage: '/images/proyectos/marcordillera.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.dunasdepupuya.cl/marcordillera' }],
  meta: [
    { name: 'keywords', content: 'terrenos en Pupuya, Marcordillera, terrenos con vista al mar, inversión Pupuya' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Dunas de Pupuya' },
    { name: 'publisher', content: 'Dunas de Pupuya' }
  ]
})
const projectData = projects.find(p => p.name === 'marcordillera')
</script>