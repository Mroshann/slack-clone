/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'slack-color' : '#3f0f40',
      ...colors,
    },  
    extend: {},
  },
  plugins: [],
}

