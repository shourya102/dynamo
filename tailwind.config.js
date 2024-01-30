/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      fontSize: {
        title: `2.6rem;`,
        semi: `1.8rem`,
        paragraph: `1.2rem;`,
        sub: `1.0rem`,
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
          hover: "var(--text-color-hover)",
          bright: "var(--text-bright)",
          "bright-rev": "var(--text-bright-rev)",
        },
      },
      backgroundColor: {
        skin: {
          "base-1": "var(--fill-color-1)",
          "base-2": "var(--fill-color-2)",
          "base-3": "var(--fill-color-3)",
          "base-4": "var(--fill-color-4)",
          "fill-1": "var(--fill-in-1)",
          "fill-2": "var(--fill-in-2)",
          "fill-2-solid": "var(--fill-in-2-solid)",
          "bright": "var(--fill-bright)",
        },
      },
      gradientColorStops: {
        skin: {},
      },
      borderColor: {
        skin: {
          "border-1": "var(--border-color-1)",
          "border-2": "var(--border-color-2)",
          "border-3": "var(--border-color-3)",
          "border-4": "var(--border-color-4)",
        },
      },
      colors: {
        "soft-blue": "#d9e4f5",
        "soft-pink": "#f5e3e6",
        "border-light": "#ddd",
        "title-light-pink": "#c2a1ab",
        "title-light-blue": "#b0c3d1",
      },
    },
  },
  plugins: [],
};
