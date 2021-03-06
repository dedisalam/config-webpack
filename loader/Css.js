const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};
module.exports = CssLoader;
