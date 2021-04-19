const defaultConfig = require('./webpack.config');

module.exports = {
  ...defaultConfig,
  entry: '../argo-host/src/worker.ts',
  output: {
    globalObject: 'self',
    filename: 'mobile.js',
    path: __dirname + '/dist',
  },
};
