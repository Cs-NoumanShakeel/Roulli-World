/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '376px'},      // very small screens
        'lte1024': {'max': '1024px'}, // less than or equal to 1024px
        'gt1024': {'min': '1025px'},  // strictly greater than 1024px
      },
    },
  },
  plugins: [],
}
