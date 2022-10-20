/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'hulubg': '#06202A'
      },
      screens: {
        "3xl": '2000px',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      textColor: ['active', 'hover', 'first'],
      fontWeight: ['group-hover'],
      padding: ['responsive', 'last', 'first'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
