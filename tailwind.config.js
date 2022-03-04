const tailwindcss = require('tailwindcss')

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        weekly: '#3c5164',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
