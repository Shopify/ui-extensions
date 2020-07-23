const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const {WebWorkerPlugin} = require('@shopify/web-worker/webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

const BABEL_PLUGINS = [
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true,
      useESModules: true,
    },
  ],
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  ['@babel/plugin-proposal-class-properties', {loose: true}],
];

const BABEL_PRESETS = [
  '@babel/preset-react',
  '@babel/preset-typescript',
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        browsers: [
          'last 2 chrome version',
          'last 2 firefox version',
          'last 2 safari version',
          'last 2 edge version',
        ],
      },
      forceAllTransforms: true,
    },
  ],
];

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    globalObject: 'self',
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  plugins: isDevelopment
    ? [
        new WebWorkerPlugin(),
        new HtmlWebpackPlugin({
          title: 'Playground - App Extensions',
          meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          },
        }),
      ]
    : [
        new webpack.ProvidePlugin({
          React: 'react',
        }),
      ],
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
      '@shopify/argo-admin': resolve(__dirname, '../argo-admin/src'),
      '@shopify/argo-admin-host': resolve(__dirname, '../argo-admin-host/src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.[j|t]s(x?)$/,
        include: [/node_modules/, resolve(__dirname, 'src/third-party')],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: BABEL_PRESETS,
            plugins: BABEL_PLUGINS,
            sourceType: 'unambiguous',
          },
        },
      },

      {
        test: /\.[j|t]s(x?)$/,
        exclude: [/node_modules/, /third-party/],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: BABEL_PRESETS,
            plugins: BABEL_PLUGINS.concat([require.resolve('@shopify/web-worker/babel')]),
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
