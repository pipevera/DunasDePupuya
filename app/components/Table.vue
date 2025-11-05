<template>
  <section class="bg-gradient-to-b from-white to-[#EFE9EB] ">
    <div class="bg-[url('/images/backgrounds/ola-2.png')] sm:bg-fixed bg-cover bg-center bg-no-repeat">
      <div class="px-8" >
        <div class="max-w-7xl mx-auto py-12">
          <h2 v-if="title" class="text-5xl md:text-6xl font-Darina mb-12 text-gray-800 text-center sm:text-start max-w-3xl">
            {{ title }}
          </h2>
    
          <div class="flex flex-wrap justify-center gap-2 font-Raleway">
            <div 
              v-for="(terreno, index) in visibleTerrenos" 
              :key="index"
              class="inline-flex items-center gap-1.5 rounded-full shadow-sm hover:shadow-md transition-all px-3 py-1.5 text-sm border w-[240px]"
              :class="terreno.valor === 'vendida' ? 'bg-gray-200 border-gray-300' : 'bg-white border-[#FFD1D1] hover:border-[#FF5858] '"
            >
              <template v-if="terreno.valor === 'vendida'">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-gray-800 font-bold text-xs">{{ terreno.numero }}</span>
                <span class="text-red-600 font-semibold uppercase text-xs">Vendida</span>
              </template>
              
              <template v-else>
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF5858] text-white font-bold text-xs">{{ terreno.numero }}</span>
                <span class="text-[#FF5858] font-bold">{{ formatValor(terreno.valor) }}</span>
                <div v-if="terreno.m2" >
                  <span class="text-gray-400">/</span>
                  <span class="text-gray-600">{{ terreno.m2.toLocaleString('es-CL') }} m²</span>
    
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Terrenos Disponibles'
  },
  terrenos: {
    type: Array,
    required: true,
    default: () => []
  }
})

const visibleTerrenos = computed(() => {
  const list = props.terrenos || []
  return list.filter(t => t.valor !== 'vendida')
})

const formatValor = (valor) => {
  if (valor === 'vendida' || valor === '' || valor == null) return ''
  const num = typeof valor === 'number' ? valor : Number(valor)
  if (Number.isNaN(num)) return String(valor)
  if (num >= 10000) {
    try {
      return num.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
    } catch (e) {
      return `$ ${num.toLocaleString('es-CL')}`
    }
  }
  return `${num.toLocaleString('es-CL', { maximumFractionDigits: 0 })} UF`
}
</script>
