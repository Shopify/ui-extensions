import {WebWorkerPlugin} from '@shopify/web-worker/webpack';

module.exports = {
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.json'],
  // },
  plugins: [
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
       **/
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
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
              presets: ['@babel/env', '@babel/react', '@babel/typescript'],
              plugins: [require.resolve('@shopify/web-worker/babel')],
            },
          },
        ],
      },
      // {
      //   test: /\.ts$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.tsx$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
