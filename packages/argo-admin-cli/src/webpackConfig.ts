export function createWebpackConfiguration(config: any): any {
  const {module, ...partialConfig} = config;
  return {
    ...partialConfig,
    stats: 'minimal',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.mjs', '.ejs', '.esnext'],
      mainFields: ['esnext', 'browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.([j|t]s(x?)|esnext)$/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              compact: true,
              presets: [
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
              ],
              plugins: [
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
                require.resolve('@remote-ui/web-workers/babel'),
              ],
              sourceType: 'unambiguous',
            },
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
        ...(module?.rules || []),
      ],
    },
  };
}
