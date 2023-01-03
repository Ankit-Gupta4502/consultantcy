/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '3rem',
        xl: '0',
        '2xl': '0',
      },

      screens: {
        sm: '540px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1200px',
      }
    },
    colors: {
      primary: "#2A79FF",
      danger: "#FF0101",
      warning: "#FFC107",
      "gray": "#20202080",
      "white":"#fff"
    }
  },
  plugins: [],
}
