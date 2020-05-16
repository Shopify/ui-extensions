import type {Configuration} from 'webpack';

export function createWebpackConfiguration({
  entry,
  output,
}: Pick<Configuration, 'entry' | 'output'>): Configuration {
  return {
    mode: 'development',
    target: 'web',
    entry,
    output,
    resolve: {
      extensions: ['.esnext', '.mjs', '.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.esnext$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
              ],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
  };
}
