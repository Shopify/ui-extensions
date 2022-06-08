module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // resolve: {
  //   extensions: ['.ts', '.tsx'],
  // },
  // node: {fs: 'empty', child_process: 'empty', readline: 'empty'},
  module: {
    rules: [
      // other rules...
      // This is the rule for our application JavaScript/ TypeScript
      {
        // test: /\.[tj]sx?$/,
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          // However you configure Babel, just make sure to include the plugin.
          {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: ['@babel/env', '@babel/react', '@babel/typescript'],
              // plugins: [require.resolve('@remote-ui/web-workers/babel')],
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
