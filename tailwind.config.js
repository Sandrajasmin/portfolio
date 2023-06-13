/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'serif': ['Libre Caslon Text'],
    },
    colors: {
      'grey': '#EBEAEF',
      'black': '#0F0E0E',
      'white': '#FDF9F9',
    },
    extend: {
    },
  },
  plugins: [],
}

