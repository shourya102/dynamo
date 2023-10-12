/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
      },
      fontSize: {
        title: `2.6rem;`,
        semi: `1.8rem`,
        paragraph: `1.2rem;`,
        sub: `1.0rem`,
      },
      colors: {
        'soft-blue': '#d9e4f5',
        'soft-pink': '#f5e3e6',
        'border-light': '#ddd',
        'title-light-pink': '#c2a1ab',
        'title-light-blue': '#b0c3d1',
      }
    },
  },
  plugins: [],
}

