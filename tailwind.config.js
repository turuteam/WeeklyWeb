const tailwindcss = require('tailwindcss')

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        weekly: '#3c5164',
      },
    },
  },
  plugins: [],
}
