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
        primary: "#232527",
        sunFlower: "#f1c40f",
        dark: {
          grey: "#363636",
          ligth: "#d8d8d8",
        },
      },
    },
  },
  variants: {
    sans: "Helvetica, Arial, sans-serif",
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "focus-visible",
    ],
    textDecoration: ["responsive", "hover", "focus", "focus-visible"],
  },
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
};
