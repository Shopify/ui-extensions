import {ProvidePlugin} from 'webpack';
import {WebWorkerPlugin} from '@shopify/web-worker/webpack';

module.exports = {
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    // https://stackoverflow.com/a/68723223
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
    // any other plugins...
    new WebWorkerPlugin(),
  ],
  output: {
    globalObject: 'self',
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx'],
  // },
  // node: {fs: 'empty', child_process: 'empty', readline: 'empty'},
  module: {
    rules: [
      /**
       * Fix MJS issues w/ web-worker/babel
       * @see https://github.com/apollographql/apollo-link-state/issues/302#issuecomment-431219631
       *g*/
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        // Must add fullySpecified: false to avoid errors w/ strict type ecma modules like admin-ui-extensions-react
        // Because it is using mjs modules in the esm build
        // https://github.com/graphql/graphql-js/issues/2721#issuecomment-723008284
        resolve: {
          fullySpecified: false,
        },
      },
      // other rules...
      // This is the rule for our application JavaScript/ TypeScript
      {
        test: /\.[tj]sx?$/,
        // test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          // However you configure Babel, just make sure to include the plugin.
          {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                // '@babel/env',
                [
                  '@babel/env',
                  {
                    useBuiltIns: 'usage', // alternative mode: "entry"
                    // useBuiltIns: 'usage', // alternative mode: "entry"
                    corejs: 3, // default would be 2
                    targets: '> 0.25%, not dead',
                    // set your own target environment here (see Browserslist)
                  },
                ],
                '@babel/react',
                '@babel/typescript',
              ],
              plugins: [require.resolve('@shopify/web-worker/babel')],
            },
          },
        ],
      },
    ],
  },
};
