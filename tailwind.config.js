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
          400: '#222222',
          500: '#e9e7e4',
        },
      },
    },
  },
  plugins: [],
};
