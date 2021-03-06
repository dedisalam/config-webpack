const {
  BabelLoader, ImageLoader, ScssLoader, SvgLoader, CssLoader, FontLoader, TSLoader,
} = require('../loader');

const Module = {
  rules: [
    TSLoader,
    BabelLoader,
    ImageLoader,
    ScssLoader,
    SvgLoader,
    CssLoader,
    FontLoader,
  ],
};

module.exports = Module;
