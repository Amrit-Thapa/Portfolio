/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in",
        slideIn: "slideIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0},
          "100%": {opacity: 1},
        },
        slideIn: {
          "0%": {transform: "translate(0, 50px)", opacity: 0},
          "100%": {transform: "translate(0)", opacity: 1},
        },
      },
    },
  },
  plugins: [],
};
