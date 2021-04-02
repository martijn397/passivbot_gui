const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      textColor: {
        'dark': '#050E31',
        'light': '#ffffff',
      },
      colors: {
        'dark': '#050E31',
        'darklighter': '#1E2645',
        'darklight': '#F6F7FE',
        'light': '#ffffff',
        'primary': '#1C46E8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
