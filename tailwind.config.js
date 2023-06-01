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
        "green": "#a1cbd1b7",
        "gray-title": "#0000008c",
      },
      fontFamily: {
        "brand": ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

