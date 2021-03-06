const { getOutputPath } = require('../utils');

const FontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  loader: 'file-loader',
  options: {
    outputPath: (url, resourcePath, context) => getOutputPath(url, resourcePath, context),
    name: '[name].[ext]',
  },
};

module.exports = FontLoader;
