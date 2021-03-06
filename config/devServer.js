const { getHost, resolveAppPath } = require('../utils');

const devServer = {
  compress: true,
  contentBase: resolveAppPath('public'),
  hot: true,
  host: getHost(),
  https: true,
  historyApiFallback: true,
  port: 3000,
  publicPath: '/',
};

module.exports = devServer;
