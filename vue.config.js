const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  //todo: configure the proxy
  //todo: configure the alias

  // chainWebpack: config => {
  //   config.module.webpackConfig.resolve.alias.set('@', '/src')
  // }
  configureWebpack:{
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve('src'),
      }
    }
  }
};
