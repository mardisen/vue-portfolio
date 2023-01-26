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
          accent: "#F5CB5C",
          dark: "#333533",
          darkest: "#242423",
        }
      }
    },
  },
  plugins: [],
}
