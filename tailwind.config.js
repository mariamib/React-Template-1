/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '800px',
      'md': '900px',
      'lg': '1100px',
      'xl': '1280px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {},
  },
  plugins: [],
}

