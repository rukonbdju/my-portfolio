/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"rgba(var(--background))",
        tcolor: "rgba(var(--tcolor))"
      }
    },
  },
  plugins: [],
}

