/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        background: '#191817',
        black: '#21201E',
        red: '#F8242F',
        gray: {
          1: '#A4A4A4',
          2: '#D0D0D0'
        }
      }
    }
  },
  plugins: []
}
