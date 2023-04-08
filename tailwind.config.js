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
          mid: "#95A5A6",
          yellow: "#F5CB5C",
          red: "#F67E7D",
          dark: "#333333",
          // darkest: "#242424",
          darkest: "#1C2124",

          // alias for the current accent
          accent: "#F67E7D",
          "light-accent": "#EB9898",
        }
      }
    },
  },
  plugins: [],
}
