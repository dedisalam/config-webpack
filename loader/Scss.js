const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ScssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    'sass-loader',
  ],
};

module.exports = ScssLoader;
