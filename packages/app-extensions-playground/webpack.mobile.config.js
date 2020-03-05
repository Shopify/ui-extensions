const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const defaultConfig = require('./webpack.config');

module.exports = {
  ...defaultConfig,
  entry: './src/components/AppExtension/workers/mobile.ts',
  output: {
    globalObject: 'self',
    filename: 'mobile.js',
    path: __dirname + '/dist',
  },
};
