/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "376px" },
        lte1024: { max: "1024px" },
        e1024: { min: "768px", max: "1024px" },

        gt1024: { min: "1025px" },
      },
    },
  },
  plugins: [],
}
