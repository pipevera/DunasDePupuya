<template>
  <nav :class="[
    'w-full h-20 fixed top-0 left-0 z-50 shadow-xl transition-all duration-300',
    scrolled ? 'bg-white' : 'bg-black/40 backdrop-blur-sm md:bg-transparent'
  ]">
    <div class="flex items-center justify-between  max-w-7xl mx-auto px-2 md:px-4 h-full">
      <div>
        <NuxtLink to="/">
          <img class="w-[200px] sm:w-[300px] md:w-[400px]" src="/images/Dunas-Logo.png" alt="Logo Dunas de Pupuya" />
        </NuxtLink>
      </div>
      <div :class="[
        'hidden md:flex gap-8 font-semibold transition-colors duration-300',
        scrolled ? 'text-gray-800' : 'text-white'
      ]">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :href="link.href"
          class="hover:text-yellow-400 transition" :class="{ 'cursor-pointer': link.scroll }"
          @click.prevent="handleLinkClick(link)">
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
    
    <!-- Menú móvil con mejor backdrop -->
    <transition name="slide-fade">
      <div v-if="isOpen" class="md:hidden">
        <!-- Overlay con blur mejorado para mobile -->
        <div class="absolute top-full left-0 w-full bg-black/40  ">
          <div class="flex flex-col items-center gap-6 text-white font-semibold py-8">
            <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :href="link.href"
              class="hover:text-yellow-400 transition text-lg" :class="{ 'cursor-pointer': link.scroll }"
              @click.prevent="handleLinkClick(link)">
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
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const route = useRoute()

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { name: "Home", scroll: true, href: "#home" },
  { name: "Proyectos", to: "/proyectos" },
  { name: "Sobre Nosotros", scroll: true, href: "#nosotros" },
  { name: "Conversemos", scroll: true, href: "#contacto" },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const scrollToSection = (link) => {
  if (link.scroll && link.href) {
    const el = document.querySelector(link.href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }
}

const handleLinkClick = async (link) => {
  isOpen.value = false
  if (link.to) {
    router.push(link.to)
  } else if (link.scroll && link.href) {
    if (route.path !== '/') {
      router.push('/').then(async () => {
        await nextTick()
        scrollToSection(link)
      })
    } else {
      scrollToSection(link)
    }
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
