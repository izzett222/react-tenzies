/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dice: "0px 2px 2px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}
