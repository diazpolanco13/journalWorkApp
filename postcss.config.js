const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./public/index.html"
  ],
  css: [
    "./src/assets/tailwind.css"
  ],
  // Incluya cualquier carácter especial que esté usando en esta expresion regular
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
module.exports = {
  plugins: [
    require("./tailwind.config"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
