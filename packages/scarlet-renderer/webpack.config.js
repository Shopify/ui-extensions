var path = require('path');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    scarlet: './src/index.ts',
  },
  output: {
    filename: 'index.js',
    library: 'scarlet',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './lib'),
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
}
