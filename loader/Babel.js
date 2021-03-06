const { resolveAppPath } = require('../utils');

const BabelLoader = {
  test: /\.(js|jsx)$/,
  include: [
    resolveAppPath('src'),
  ],
  loader: 'babel-loader',
  options: {
    presets: [
      require.resolve('babel-preset-react-app'),
    ],
  },
};

module.exports = BabelLoader;
