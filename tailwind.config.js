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
      serif: ["ui-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue"],
      body: ["system-ui", "-apple-system", "Segoe UI", "Helvetica Neue"],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
