module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        'primary' : ['Karla'],
        'secondary': ['Lato']
      },
      colors: {
        'primary' : '#5680E9',
        'secondary' : '#84CEEB',
        'tertiary' : '#5AB9EA',
        'quaternary' : '#C1C8E4',
        'quinary' : '#8860D0',
        'danger' : '#F78888',
        'success': '#8EE4AF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
