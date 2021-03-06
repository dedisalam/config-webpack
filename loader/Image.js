const { getOutputPath } = require('../utils');

const ImageLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: 'file-loader',
  options: {
    outputPath: (url, resourcePath, context) => getOutputPath(url, resourcePath, context),
    name: '[name].[ext]',
  },
};

module.exports = ImageLoader;
