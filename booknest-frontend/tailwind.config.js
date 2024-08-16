/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-red': '#3C0E0D',
      },
      backgroundImage: {
        'newsLetter': "url('https://www.free-css.com/assets/files/free-css-templates/preview/page280/dbi/assets/images/newsletter-bg.png')",
      }
    },
  },
  plugins: [],
}