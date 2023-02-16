// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          100: '#edf2f7',
        },
        palette: {
          100: '#cc002a',
          200: '#da291d',
          300: '#35344E',
          400: '#232323',
          500: '#e9e7e4',
        },
      },
    },
    gridTemplateColumns: {
      stack: 'repeat(4,auto)',
      duo: '1fr 1fr',
    },
    boxShadow: {
      main: '0 5px 20px 0 rgb(0 0 0 / 33%)',
    },
  },
  plugins: [],
};
