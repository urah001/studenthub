/*module.exports = {
  plugins: {
    postnestedcss: {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
*/
module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
