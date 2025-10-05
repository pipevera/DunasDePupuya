/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl" : "1636px"
    },
    extend: {
      fontFamily: {
        Darina: ['DarinaElegance', 'system-ui', 'sans-serif'],
      },
      fontStyle: {
        'italic': 'italic',
        'normal': 'normal',
      }
    },
  },
  plugins: [],
}

