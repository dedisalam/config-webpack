const {
    devServer, Module, output, plugins, resolve,
  } = require('./config');
  
  const Config = {
    mode: 'development',
    devServer,
    devtool: 'source-map',
    module: Module,
    output,
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
        },
      },
    },
    plugins,
    resolve,
  };
  
  module.exports = Config;
  