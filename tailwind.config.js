module.exports = {
  purge: {
    content: [
      "src/*.js",
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
    options: {
      whitelist: ["bg-color-500"],
    },
  },
  theme: {
    colors: {
      primary: '#5C62C5',
      grey: {
        dark: '#363636',
        ligth: '#d8d8d8',
      } 
    },
    margin : {
      default: '1px',
      '0': '0',
    },
     maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      }
  },
  variants: {
    'sans': 'Helvetica, Arial, sans-serif',
  },
  plugins: [],
};
