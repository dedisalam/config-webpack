const { resolveAppPath } = require('../utils');

const TSLoader = {
  test: /\.(ts|tsx)$/,
  include: [
    resolveAppPath('src'),
  ],
  loader: 'ts-loader',
};

module.exports = TSLoader;