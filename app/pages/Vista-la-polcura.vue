<template>
  <div>
    <ProjectBanner 
      :project="projectData.name" 
      :logo="projectData.logo"
      :value="projectData.value"
      :title="projectData.title"
      :description="projectData.description" 
    />

    <Vista360
      :tour="projectData.tour"
      :project="projectData.project"
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
      :terrenos="terrenos.vistalapolcura"
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
  title: 'Terrenos en Pupuya con vista al mar | Vista La Polcura',
  description: 'Vista La Polcura combina serenidad y aventura: terrenos privados cerca de senderos para trekking, ciclismo y deportes acuáticos. Servicios cercanos como colegios y tiendas.',
  ogTitle: 'Terrenos en Pupuya con vista al mar | Vista La Polcura',
  ogDescription: 'Terrenos en Vista La Polcura donde la naturaleza y la vida activa se unen. Perfecto para quienes buscan privacidad, deporte y conexión con la comunidad.',
  ogImage: '/images/proyectos/vistalapolcura/images/galeria/1.webp',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.dunasdepupuya.cl/vista-la-polcura' }],
  meta: [
    { name: 'keywords', content: 'terrenos en Pupuya, Vista La Polcura, terrenos con vista al mar, inversión Pupuya' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Dunas de Pupuya' },
    { name: 'publisher', content: 'Dunas de Pupuya' }
  ]
})
const projectData = projects.find(p => p.name === 'vistalapolcura')
</script>