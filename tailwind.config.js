/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/*.tsx",
    "./components/**/*.tsx",
    "./components/ui-components/*.tsx",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Figtree: ["Figtree", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      boxShadow: {
        "3xl": `rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
        rgb(0 0 0 / 7%) 0px 0px 1rem 0px`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

// box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 0.03125rem,
//     rgb(0 0 0 / 7%) 0px 0px 1rem 0px;

// fontFamily: {
//   sans: [
//     "figtree",
//     "Figtree",
//     "system-ui",
//     "-apple-system",
//     "Segoe UI",
//     "Helvetica Neue",
//   ],
//   serif: ["figtree", "Figtree", "Arial", "ui-serif", "system-ui"],
//   mono: ["ui-monospace", "SFMono-Regular"],
//   display: [
//     "figtree",
//     "Figtree",
//     "system-ui",
//     "-apple-system",
//     "Segoe UI",
//     "Helvetica Neue",
//   ],
//   body: [
//     "figtree",
//     "Figtree",
//     "system-ui",
//     "-apple-system",
//     "Segoe UI",
//     "Helvetica Neue",
//   ],
// },

// fontFamily: {
//   sans: [["var(--font-figtree)"]],
// },
