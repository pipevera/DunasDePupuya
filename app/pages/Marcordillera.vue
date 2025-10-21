<template>
  <div>
    <ProjectBanner 
      :project="projectData.name" 
      :logo="projectData.logo"
      :value="projectData.value"
      :description="projectData.description" 
    />

     <ProjectGallery
      title="Donde la montaña, mar y naturaleza se dan la mano."
      :images="projectData.galleryImages"
    />

    <ProjectDescription
      :title="projectData.title"
      :logo="projectData.logo"
      :description="projectData.description"
      :card="projectData.card"
      :features="projectData.features"
    />

   
  </div>
</template>

<script setup>
import projects from '@/data/projects'

const projectData = projects.find(p => p.name === 'marcordillera')
</script>