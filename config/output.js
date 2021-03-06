const { resolveAppPath } = require('../utils');

const output = {
  path: resolveAppPath('dist/asset/'),
  publicPath: '/asset/',
  filename: 'js/[name].js',
};

module.exports = output;
