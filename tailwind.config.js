/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxSizing: {
        "border-box": "border-box",
      },
      colors: {
        "header-gray": '#F8F9FA',
        "green-title": "#297d8a",
        "gray-title": "#0000008c",
        "uoc-corporate": "#000078",
      },
      fontFamily: {
        "brand": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

