/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/*.tsx",
    "./components/**/*.tsx",
    "./components/ui-components/*.tsx",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue"],
      serif: ["Arial", "ui-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue"],
      body: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue"],
    },

    extend: {
      boxShadow: {
        "3xl": `rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
        rgb(0 0 0 / 7%) 0px 0px 1rem 0px`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;
