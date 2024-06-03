/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('./assets/backgroundImage.svg')",
      },
      fontFamily:{
        inter:"Inter, sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
