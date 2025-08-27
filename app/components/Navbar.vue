<template>
  <nav class="w-full h-20 fixed top-0 left-0 z-50 ">
    <div class="flex items-center justify-between container mx-auto p-4">
      <div>
        <NuxtLink to="/">
          <img class="w-[200px] sm:w-[300px] md:w-[400px]" src="/images/Dunas-Logo.png" alt="Logo Dunas de Pupuya" />
        </NuxtLink>
      </div>
      <div class="hidden md:flex gap-8 text-white font-semibold">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :href="link.href"
          class="hover:text-yellow-400 transition" :class="{ 'cursor-pointer': link.scroll }"
          @click.prevent="scrollToSection(link)">
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="flex md:hidden">
        <button @click="toggleMenu" class="px-3 py-1 rounded-md" aria-label="desplegar menú">
          <div class="flex flex-col justify-between w-8 h-6 relative">
            <span :class="[
              'block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
              isOpen ? 'rotate-45 translate-y-[11px]' : ''
            ]"></span>
            <span :class="[
              'block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
              isOpen ? 'opacity-0' : 'opacity-100'
            ]"></span>
            <span :class="[
              'block h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
              isOpen ? '-rotate-45 -translate-y-[11px]' : ''
            ]"></span>
          </div>
        </button>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="isOpen"
        class="md:hidden flex flex-col items-center gap-6  text-white font-semibold py-8 bg-transparent backdrop-blur-sm">
        <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :href="link.href"
          class="hover:text-yellow-400 transition text-lg" :class="{ 'cursor-pointer': link.scroll }"
          @click.prevent="handleMobileClick(link)">
          {{ link.name }}
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const links = [
  { name: "Home", scroll: true, href: "#home" },
  { name: "Proyectos", to: "/proyectos" },
  { name: "Sobre Nosotros", scroll: true, href: "#nosotros" },
  { name: "Conversemos", scroll: true, href: "#contacto" },
]

const scrollToSection = (link) => {
  if (link.scroll && link.href) {
    const el = document.querySelector(link.href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }
}

const handleMobileClick = (link) => {
  scrollToSection(link)
  isOpen.value = false 
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
