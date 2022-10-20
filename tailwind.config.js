/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.jsx"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
};
