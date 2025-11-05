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
      :features="projectData.features"
      :titleDescription="projectData.titleDescription"
    />

    <Table
      title="Terrenos Disponibles"
      :terrenos="terrenos.laaguada"
    />

    <Ubicacion 
      mapUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d26743.834041602746!2d-71.78715290774862!3d-34.00460910756786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDAwJzIyLjAiUyA3McKwNDYnNTcuNiJX!5e1!3m2!1ses!2scl!4v1762315671208!5m2!1ses!2scl"
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