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

const projectData = projects.find(p => p.name === 'laaguada')
</script>