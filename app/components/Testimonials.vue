<template>
  <section id="testimonials" class="py-16 px-8 bg-gradient-to-b from-amber-50 to-white">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-5xl md:text-6xl font-Darina text-gray-800 mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Historias reales de familias que encontraron su lugar ideal en Dunas de Pupuya
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-amber-100 hover:border-amber-300"
        >
          <div class="flex items-center gap-1 mb-4">
            <svg 
              v-for="star in 5" 
              :key="star" 
              class="w-5 h-5 text-amber-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>

          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "{{ testimonial.text }}"
          </p>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.initials }}
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-500">{{ testimonial.project }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "María González",
    initials: "MG",
    project: "Marcordillera",
    text: "Encontramos el lugar perfecto para construir nuestra casa de descanso. La vista al mar es espectacular y el proceso de compra fue muy transparente."
  },
  {
    name: "Roberto Silva",
    initials: "RS",
    project: "El Cardal",
    text: "La tranquilidad y el entorno natural superaron nuestras expectativas. Excelente inversión y un equipo muy profesional que nos guió en todo momento."
  },
  {
    name: "Carolina Pérez",
    initials: "CP",
    project: "Vista La Polcura",
    text: "Llevábamos años buscando un terreno con estas características. La cercanía a la playa y la naturaleza hacen de este lugar algo único."
  },
  {
    name: "Andrés Muñoz",
    initials: "AM",
    project: "La Aguada",
    text: "La mejor decisión que pudimos tomar. Un lugar ideal para desconectar de la ciudad y disfrutar en familia. Totalmente recomendado."
  },
  {
    name: "Patricia Rojas",
    initials: "PR",
    project: "Marcordillera",
    text: "El proyecto cumplió con todo lo prometido. Ahora tenemos nuestro refugio cerca del mar donde podemos disfrutar cada fin de semana."
  },
  {
    name: "Felipe Vargas",
    initials: "FV",
    project: "El Cardal",
    text: "Excelente ubicación y facilidades de pago. El equipo siempre estuvo disponible para resolver nuestras dudas. Muy satisfechos con la compra."
  }
]
</script>
