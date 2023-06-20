module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./assets/js/*.js",
        "./content/*.md",
        "./layouts/**/*.html",
      ],
      safelist: [""],
      blocklist: [""],
    },
  },
};
