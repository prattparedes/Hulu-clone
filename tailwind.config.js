/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'hulubg': '#06202A'
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      textColor: ['active', 'hover', 'first'],
      padding: ['responsive', 'last', 'first'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
