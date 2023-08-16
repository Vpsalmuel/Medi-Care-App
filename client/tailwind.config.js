/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Paytone: ['Paytone One', "sans-serif"],
      Poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
};
