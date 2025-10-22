<template>
  <section class="py-12 px-8">
    <div class="max-w-6xl mx-auto">
      <h2 v-if="title" class="text-4xl md:text-5xl font-Darina mb-8 text-gray-800">
        {{ title }}
      </h2>

      <div class="overflow-x-auto rounded-2xl shadow-lg">
        <table class="w-full bg-white">
          <thead class="bg-amber-100">
            <tr>
              <th class="px-6 py-4 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Número
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Superficie (m²)
              </th>
              <th class="px-6 py-4 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider">
                Valor (UF)
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr 
              v-for="(terreno, index) in terrenos" 
              :key="index"
              class="hover:bg-amber-50 transition-colors"
            >
              <td class="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                Lote {{ terreno.numero }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-700">
                {{ terreno.m2.toLocaleString('es-CL') }} m²
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">
                {{ terreno.valor.toLocaleString('es-CL') }} UF
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>
