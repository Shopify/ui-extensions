const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const {WebWorkerPlugin} = require('@shopify/web-worker/webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    globalObject: 'self',
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  plugins: [new WebWorkerPlugin(), new HtmlWebpackPlugin({title: 'Playground - App Extensions'})],
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: false,
    inline: false,
    port: 39355,
    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/index.html',
        },
      ],
    },
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: isDevelopment ? 'source-map' : false,

  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.json'],
    alias: {
      '@shopify/app-extensions-polaris-components': resolve(
        __dirname,
        '../app-extensions-polaris-components/src',
      ),
      '@shopify/app-extensions-renderer': resolve(__dirname, '../app-extensions-renderer/src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.[j|t]s(x?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                'babel-preset-shopify/web',
                {
                  modules: 'commonjs',
                  typescript: true,
                  browsers: [
                    'last 1 chrome version',
                    'last 1 firefox version',
                    'last 1 safari version',
                  ],
                },
              ],
              'babel-preset-shopify/react',
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true,
                },
              ],
            ],
            plugins: [
              '@babel/transform-runtime',
              '@shopify/react-i18n/babel',
              require.resolve('@shopify/web-worker/babel'),
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
