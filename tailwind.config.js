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
    extend: {},
  },
  variants: {},
  plugins: [],
};
