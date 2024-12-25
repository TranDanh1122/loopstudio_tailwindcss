/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "-white": "hsl(0, 0%, 100%)",
        "-black": "hsl(0, 0%, 0%)",
        "-darkgray": "hsl(0, 0%, 55%)",
        "-very_dark_dray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

