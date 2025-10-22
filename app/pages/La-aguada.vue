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
      title="Galería de Imágenes"
      :images="projectData.galleryImages"
    />

    <Table
      title="Terrenos Disponibles"
      :terrenos="terrenos.laaguada"
    />
    
  </div>
</template>

<script setup>
import projects from '@/data/projects'
import terrenos from '@/data/terrenos'
useSeoMeta({
  title: 'Terrenos en Pupuya con vista al mar | La Aguada',
  description: 'La Aguada ofrece terrenos en laderas con panorámicas hacia el mar, rodeados de vegetación nativa y brisa marina. Acceso rápido a Navidad y San Antonio, ideal para privacidad y tranquilidad.',
  ogTitle: 'Terrenos en Pupuya con vista al mar | La Aguada',
  ogDescription: 'Vive en La Aguada con vistas al mar y un entorno natural exclusivo. Terrenos perfectos para disfrutar de tranquilidad y privacidad cerca de la playa.',
  ogImage: '/images/proyectos/la-aguada.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.dunasdepupuya.cl/la-aguada' }],
  meta: [
    { name: 'keywords', content: 'terrenos en Pupuya, La Aguada, terrenos con vista al mar, inversión Pupuya' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Dunas de Pupuya' },
    { name: 'publisher', content: 'Dunas de Pupuya' }
  ]
})
const projectData = projects.find(p => p.name === 'laaguada')
</script>