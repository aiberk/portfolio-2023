/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/*.tsx",
    "./pages/bio/*.tsx",
    "./components/**/*.tsx",
    "./components/ui-components/*.tsx",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        transparent: "transparent",
        silver: "#ecebff",
        abyBlack: "#18181B",
      },
      boxShadow: {
        "3xl": `rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
        rgb(0 0 0 / 7%) 0px 0px 1rem 0px`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
