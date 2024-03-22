/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "blackTheme": "rgb(30,30,30)",
       "whiteTheme": "rgb(251,244,242)",
       "myRed": "rgba(196,20,66)",
      },

      fontFamily: {
        openSansBold: ["openSansBold", "bold"],
        openSansMedium: ["openSansMedium", "normal"],
        openSansSemiBold: ["openSansSemiBold", "semibold"],

      },

      keyframes:{
        sliderInfinite: {
          '0%' : {transform: 'translateX(0)'},
          '100%' : { transform: 'translateX(-100%)'}
        },

        annimateToggleTextAcceuil: {
          '0%':  {height: '28rem'},
          '50%': {height: '60rem'},
          '100%': {height: 'fit-content'}
        }
      },

      animation: {
        annimateToggleTextAcceuil: ' annimateToggleTextAcceuil 2s ease-in-out linear'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}