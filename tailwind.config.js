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
    extend: {
      colors: {
        primary: "#5c62c5",
        dark: {
          grey: "#363636",
          ligth: "#d8d8d8",
        },
      },
    },
  },
  variants: {
    sans: "Helvetica, Arial, sans-serif",
    textDecoration: ["responsive", "hover", "focus", "focus-visible"],
  },
  plugins: []
};
