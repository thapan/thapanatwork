/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./{App,Layout,main,utils}.{js,jsx,ts,tsx}",
    "./Pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
