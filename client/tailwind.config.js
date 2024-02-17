/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url('C:/Users/Vilas/Desktop/NetMovies/client/src/images/homeBg.jpg')"
      },
      fontFamily: {
        "logo": ['Antonio', 'sans-serif']
      },
      colors: {
        "brand": '#D70000'
      }
    },
  },
  plugins: [],
}

