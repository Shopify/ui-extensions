const defaultConfig = require('./webpack.config');

module.exports = {
  ...defaultConfig,
  entry: './src/components/AppExtension/workers/worker.ts',
  output: {
    globalObject: 'self',
    filename: 'mobile.js',
    path: __dirname + '/dist',
  },
};
