import {HotModuleReplacementPlugin, DefinePlugin} from 'webpack';
import type {compilation, Compiler} from 'webpack';

import type {Options} from './worker';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ParserHelpers = require('webpack/lib/ParserHelpers');

// @see https://github.com/webpack-contrib/webpack-hot-client/blob/1b7f221918217be0db7a6089fb77fffde9a973f6/lib/compiler.js#L63
export class ArgotHotClient {
  constructor(private readonly options?: Options) {}

  apply(compiler: Compiler) {
    const {options} = this;

    if (options) {
      const definePlugin = new DefinePlugin({
        __hotClientOptions__: JSON.stringify(options),
      });

      definePlugin.apply(compiler);
    }

    const hmrPlugin = new HotModuleReplacementPlugin();

    compiler.hooks.compilation.tap(
      'HotModuleReplacementPlugin',
      (_, {normalModuleFactory}) => {
        const handler = (parser: compilation.normalModuleFactory.Parser) => {
          parser.hooks.evaluateIdentifier.for('module.hot').tap(
            {
              name: 'HotModuleReplacementPlugin',
              before: 'NodeStuffPlugin',
            } as any,
            (expr) =>
              ParserHelpers.evaluateToIdentifier(
                'module.hot',
                Boolean(
                  (parser as any).state.compilation.hotUpdateChunkTemplate,
                ),
              )(expr),
          );
        };

        normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('HotModuleReplacementPlugin', handler);
        normalModuleFactory.hooks.parser
          .for('javascript/dynamic')
          .tap('HotModuleReplacementPlugin', handler);
      },
    );

    hmrPlugin.apply(compiler);
  }
}
