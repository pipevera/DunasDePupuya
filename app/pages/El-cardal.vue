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
    />

    <Table
      title="Terrenos Disponibles"
      :terrenos="terrenos.elcardal"
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
  title: 'Terrenos en Pupuya listos para construir | El Cardal',
  description: 'Disfruta de la tranquilidad de El Cardal, terrenos amplios en un entorno natural con colinas y praderas. Cercano a caminos principales, playas y servicios de Pupuya, Navidad y Matanzas.',
  ogTitle: 'Terrenos en Pupuya listos para construir | El Cardal',
  ogDescription: 'Terrenos en El Cardal donde privacidad y amplitud se combinan con acceso a playas, tiendas y servicios locales.',
  ogImage: '/images/proyectos/elcardal/images/galeria/1.webp',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.dunasdepupuya.cl/el-cardal' }],
  meta: [
    { name: 'keywords', content: 'terrenos en Pupuya, El Cardal, terrenos con naturaleza, inversión Pupuya' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Dunas de Pupuya' },
    { name: 'publisher', content: 'Dunas de Pupuya' }
  ]
})
const projectData = projects.find(p => p.name === 'elcardal')
</script>