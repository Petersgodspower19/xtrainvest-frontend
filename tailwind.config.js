/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grayTheme:"hsl(202, 9%, 13%)",
      white: "#fff",
      black: "#000",
      cream: "#F8F3F0",
      darkCream :"hsl(22, 36%, 76%)"
    },
    extend: {},
  },
  plugins: [],
}