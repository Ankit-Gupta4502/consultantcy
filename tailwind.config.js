/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A79FF",
        danger: "#FF0101",
        warning: "#FFC107",
        "gray": "#202020",
        "white":"#fff",
        "light-primary":"#2A79FF1A",
        "ligt-secondary":"#EAF2FF",
        "slate":"#F1F1F1",
        black:"#000000"
      }
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
        xs:"400px",
        sm: '540px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1200px',
      }
    },
    
  },
  plugins: [],
}
