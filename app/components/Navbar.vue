<template>
  <nav :class="[
    'w-full h-20 fixed top-0 left-0 z-50 shadow-xl transition-all duration-300',
    scrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-black/20 backdrop-blur-md md:bg-transparent'
  ]">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-8 h-full">
      <NuxtLink to="/" class="cursor-pointer relative right-8 md:right-10">
        <img v-if="scrolled" width="300" height="auto" src="/images/logo/logodunas-negro.png" alt="Logo Dunas de Pupuya"
          title="Logo Dunas de Pupuya" />
        <img v-else width="300" height="auto" src="/images/logo/logodunas-blanco.png" alt="Logo Dunas de Pupuya"
          title="Logo Dunas de Pupuya" />
      </NuxtLink>

      <div :class="[
        'hidden md:flex gap-8 font-semibold transition-colors duration-300',
        scrolled ? 'text-gray-800' : 'text-white'
      ]">
        <NuxtLink v-for="link in links" :key="link.name" to="/" :class="[
          'relative pb-2 transition cursor-pointer group px-2',
          'before:content-[\'\'] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:bg-[#FF5858] before:transition-all before:duration-300',
          activeSection === link.section
            ? 'before:w-full'
            : 'before:w-0 hover:before:w-full'
        ]" @click.prevent="handleLinkClick(link)">
          {{ link.name }}
        </NuxtLink>
      </div>

      <div class="flex md:hidden">
        <button @click="toggleMenu" class="px-3 py-1 rounded-md" aria-label="desplegar menú">
          <div class="flex flex-col justify-between w-8 h-6 relative">
            <span :class="[
              'block h-[2px] w-full rounded transition-all duration-300 ease-in-out',
              scrolled ? 'bg-gray-800' : 'bg-white',
              isOpen ? 'rotate-45 translate-y-[11px]' : ''
            ]"></span>
            <span :class="[
              'block h-[2px] w-full rounded transition-all duration-300 ease-in-out',
              scrolled ? 'bg-gray-800' : 'bg-white',
              isOpen ? 'opacity-0' : 'opacity-100'
            ]"></span>
            <span :class="[
              'block h-[2px] w-full rounded transition-all duration-300 ease-in-out',
              scrolled ? 'bg-gray-800' : 'bg-white',
              isOpen ? '-rotate-45 -translate-y-[11px]' : ''
            ]"></span>
          </div>
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full">
        <div
          :class="scrolled ? 'bg-white/60 backdrop-blur-md text-gray-800' : 'bg-black/20 backdrop-blur-md text-white'"
          class="h-full w-full">
          <div class="flex flex-col items-center gap-6 font-semibold py-8">
            <NuxtLink v-for="link in links" :key="link.name" to="/"
              class="hover:text-[#FF5858] transition text-lg cursor-pointer" @click.prevent="handleLinkClick(link)">
              {{ link.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')

const links = [
  { name: 'Home', section: 'home' },
  { name: 'Proyectos', section: 'proyectos' },
  { name: 'Sobre Nosotros', section: 'nosotros' },
  { name: 'Conversemos', section: 'contacto' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 400

  const sections = ['home', 'proyectos', 'nosotros', 'testimonials', 'contacto']
  const scrollPosition = window.scrollY + 100

  for (const sectionName of sections) {
    const element = document.getElementById(sectionName)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionName
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const scrollToSection = (sectionName) => {
  const el = document.getElementById(sectionName)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleLinkClick = async (link) => {
  isOpen.value = false
  activeSection.value = link.section

  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      scrollToSection(link.section)
    }, 600)
  } else {
    scrollToSection(link.section)
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
