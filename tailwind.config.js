/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '350px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'negro':'#121212',
        'negro-claro':'#2E2D32',
        'negro-grisaceo':'#404040',
        'gris': '#BCBCBC',
        'blanco': '#FFFFFD',
        'azul-oscuro': '#0055B8',
        'azul-medio': '#286AB7',
        'azul-claro': '#4478B5',
        'azul-oscuro-degradado': '#286AB7',
        'azul-claro-degradado': '#A3CDFE',
        'text-titulo': '#286AB7',
        'text-subtitulo': '#4478B5',
        'text-contenido': '#121212',
        'text-fechas': '#121212',
        'text-boton-blanco': '#FFFFFD',
        'text-boton-gris': '#475866',
        'text-link': '#0055B8',
      },
    },
  },
  plugins: [],
}
