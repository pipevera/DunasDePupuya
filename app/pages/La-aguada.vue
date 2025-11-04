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
      :images="projectData.galleryImages"
    />

    <Table
      title="Terrenos Disponibles"
      :terrenos="terrenos.laaguada"
    />

    <Ubicacion 
      mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106309.77426847!2d-71.89!3d-33.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzI0LjAiUyA3McKwNTMnMjQuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
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
  ogImage: '/images/proyectos/laaguada/images/galeria/1.webp',
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