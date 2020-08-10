const defaultConfig = require('./webpack.config');

module.exports = {
  ...defaultConfig,
  entry: '../argo-admin-host/src/worker/worker.ts',
  output: {
    globalObject: 'self',
    filename: 'mobile.js',
    path: __dirname + '/dist',
  },
};
