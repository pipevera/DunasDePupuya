<template>
  <footer class="bg-black/90">
    <div class="max-w-7xl mx-auto px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
        <div class="space-y-4 relative md:col-span-1">
          <img class="relative right-8 md:right-9 w-[300px] md:w-[400px]" src="/images/logo/logodunas-blanco.png"
            alt="Logo Dunas de Pupuya" />
          <p class="text-gray-400">
            Dunas de Pupuya <br />Inmobiliaria
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 md:pt-10 md:col-span-2 md:ml-auto">
          <div>
            <h3 class="text-white font-semibold text-xl mb-6">Servicios</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-yellow-400 transition cursor-pointer"
                  @click.prevent="handleLinkClick({ section: 'home' })">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-yellow-400 transition cursor-pointer"
                  @click.prevent="handleLinkClick({ section: 'proyectos' })">
                  Proyectos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-yellow-400 transition cursor-pointer"
                  @click.prevent="handleLinkClick({ section: 'nosotros' })">
                  Sobre Nosotros
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-semibold text-xl mb-6">Hablemos</h3>
            <div class="space-y-4">
              <a href="mailto:srivasl@uft.edu"
                class="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>srivasl@uft.edu</span>
              </a>
              <a href="tel:+56990023442" class="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+569 9002 3442</span>
              </a>

              <a href="https://maps.google.com/?q=Km3+Pupuya" target="_blank"
                class="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sala de Ventas, Km3. Pupuya</span>
              </a>
            </div>
          </div>

          <div class="ms-0 sm:ms-10 xl:ms-20">
            <h3 class="text-white font-semibold text-xl mb-6">Nuestras Redes</h3>
            <div class="space-y-4">
              <a href="https://instagram.com/vivedunasdepupuya" target="_blank"
                class="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="md:pt-8">
        <p class="text-gray-400">
          Developed by Cicatriz | Branding Boutique Ft. Felipe Vera
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// ✅ misma función del nav
const handleLinkClick = async (link) => {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      scrollToSection(link.section)
    }, 600)
  } else {
    scrollToSection(link.section)
  }
}

const scrollToSection = (sectionName) => {
  const el = document.getElementById(sectionName)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
