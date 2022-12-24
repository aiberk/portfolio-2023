/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
