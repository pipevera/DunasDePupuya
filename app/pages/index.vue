<template>
  <div>
    <HeroSection />
    <CardContainer />
    <Confianza />
    <Testimonials />
    <Conversemos />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Terrenos en Pupuya con vista al mar | Dunas de Pupuya',
  description: 'Descubre Dunas de Pupuya: terrenos con vistas al mar y la cordillera, rodeados de naturaleza y tranquilidad. Explora Marcordillera, El Cardal, Vista La Polcura y La Aguada, ideales para vivir o invertir.',
  ogTitle: 'Terrenos en Pupuya con vista al mar | Dunas de Pupuya',
  ogDescription: 'Explora nuestros proyectos en Pupuya: terrenos con vistas panorámicas, naturaleza y acceso a playas y senderos. Encuentra tu lugar ideal para vivir o invertir.',
  ogImage: '/images/og/home.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://www.dunasdepupuya.cl/' }],
  meta: [
    { name: 'keywords', content: 'terrenos en Pupuya, terrenos con vista al mar, proyectos inmobiliarios Pupuya, inversión en Pupuya' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Dunas de Pupuya' },
    { name: 'publisher', content: 'Dunas de Pupuya' }
  ]
})
</script>

