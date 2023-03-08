/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    screens: {
      'xs': {'min': '480px', 'max': '767px'},
      'sm': {'min': '768px', 'max': '1059px'},
      'md': {'min': '1060px'},
    }
  },
  plugins: [],
}
