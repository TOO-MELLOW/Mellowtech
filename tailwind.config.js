/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#1e293b",
        dark: "#0a192f",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};