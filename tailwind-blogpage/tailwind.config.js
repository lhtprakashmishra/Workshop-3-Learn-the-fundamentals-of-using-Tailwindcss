/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./*.html"], // This includes all HTML files in the root directory
  theme: {
    extend: {
      fontFamily:{
        title: ["Ubuntu", ...defaultTheme.fontFamily.serif],
        body: ["Roboto Slab", ...defaultTheme.fontFamily.sans]
      },
      colors:{
        primary: "#081f4e",
        secondary: "#0083fd",
        neutral: "#384d70",
      }
    },
  },
  plugins: [],
}
