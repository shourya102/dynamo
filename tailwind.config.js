/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        title: `2.6rem;`,
        semi: `1.8rem`,
        paragraph: `1.2rem;`,
        sub: `1.0rem`,
      },
    },
  },
  plugins: [],
}

