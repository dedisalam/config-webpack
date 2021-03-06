const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolveAppPath } = require('../utils');

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: resolveAppPath('public/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  }),
];

module.exports = plugins;
