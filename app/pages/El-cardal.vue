<template>
  <div>
    <ProjectBanner 
      :project="projectData.name" 
      :logo="projectData.logo"
      :value="projectData.value"
      :description="projectData.description" 
    />

    <ProjectDescription
      :title="projectData.title"
      :logo="projectData.logo"
      :description="projectData.description"
      :card="projectData.card"
      :features="projectData.features"
    />

    <ProjectGallery
      title="Galería de Imágenes"
      :images="projectData.galleryImages"
    />
  </div>
</template>

<script setup>
import projects from '@/data/projects'
useSeoMeta({
  title: 'Terrenos en Pupuya listos para construir | El Cardal',
  description: 'Disfruta de la tranquilidad de El Cardal, terrenos amplios en un entorno natural con colinas y praderas. Cercano a caminos principales, playas y servicios de Pupuya, Navidad y Matanzas.',
  ogTitle: 'Terrenos en Pupuya listos para construir | El Cardal',
  ogDescription: 'Terrenos en El Cardal donde privacidad y amplitud se combinan con acceso a playas, tiendas y servicios locales.',
  ogImage: '/images/proyectos/el-cardal.jpg',
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