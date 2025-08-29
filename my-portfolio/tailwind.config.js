/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: 'class', // use 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
