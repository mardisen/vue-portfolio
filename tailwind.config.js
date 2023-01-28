/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // light: "#d1cdb7",
          // dark: "#302F2C"
          lightest: "#E8EDDF",
          light: "#CFDBD5",
          yellow: "#F5CB5C",
          red: "#F67E7D",
          dark: "#333533",
          darkest: "#242424",
        }
      }
    },
  },
  plugins: [],
}
