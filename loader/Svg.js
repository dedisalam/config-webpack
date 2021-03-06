const { getOutputPath } = require('../utils');

const SvgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: 'svg-url-loader',
      options: {
        limit: 10000,
        outputPath: (url, resourcePath, context) => getOutputPath(url, resourcePath, context),
        name: '[name].[ext]',
      },
    },
  ],
};

module.exports = SvgLoader;
