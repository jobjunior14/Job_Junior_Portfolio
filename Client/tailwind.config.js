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

        annimateToggleTextAcceuil: {
          '0%':  {height: '28rem'},
          '50%': {height: '60rem'},
          '100%': {height: 'fit-content'}
        },

        porjectsToggleThemePicture: {
          '0%': {width: '0%'},
          '10%': {width: '100%'},
          '40%': {width: '100%'},
          '50%': {width: '0%'},
          '90%': {width: '100%'},
          '100%': {width: '0%'}
        },

        loadigDiv1 : {
          '0%': {transform: 'translateY(-25%)'},
          '50%': {transform: 'translateY(25%)'},
          '100%': {transform: 'translateY(-25%)'},
        },
        loadigDiv2 : {
          '0%': {transform: 'translateY(-25%)'},
          '70%': {transform: 'translateY(25%)'},
          '100%': {transform: 'translateY(-25%)'},
        },
        loadigDiv3 : {
          '0%': {transform: 'translateY(-25%)'},
          '90%': {transform: 'translateY(25%)'},
          '100%': {transform: 'translateY(-25%)'},
        },
      },

      animation: {
        porjectsToggleThemePicture: 'porjectsToggleThemePicture 5s forwards infinite ',
        annimateToggleTextAcceuil: ' annimateToggleTextAcceuil 2s ease-in-out linear',
        loadigDiv1: ' loadigDiv1 1s infinite',
        loadigDiv2: ' loadigDiv2 1s infinite',
        loadigDiv3: ' loadigDiv3 1s infinite'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
