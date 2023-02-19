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
          300: '#35344e',
          400: '#232323',
          500: '#e9e7e4',
          600: '#a50022',
          700: '#4ed4f8',
          800: '#333333',
          900: '#232323',
        },
      },
    },
    gridTemplateColumns: {
      stack: 'repeat(5,auto)',
      short: 'repeat(4,auto)',
      duo: '1fr 1fr',
    },
    boxShadow: {
      main: '0 5px 20px 0 rgb(0 0 0 / 33%)',
      nav: ' 0 4px 15px rgb(55 81 125 / 20%)',
      none: '0',
    },
  },
  plugins: [],
};
