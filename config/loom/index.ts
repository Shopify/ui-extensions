import {createComposedProjectPlugin, Package} from '@shopify/loom';
import {buildLibrary, babel} from '@shopify/loom-plugin-build-library';

const PLUGIN = 'UiExtensions.DefaultProject';

export function defaultProjectPlugin() {
  return createComposedProjectPlugin<Package>(PLUGIN, [
    buildLibrary({
      commonjs: true,
      esmodules: true,
      esnext: true,
      targets: 'extends @shopify/browserslist-config, node 14.17.0',
      jestTestEnvironment: 'jsdom',
    }),
    babel({
      config: {
        presets: [
          [
            '@shopify/babel-preset',
            {
              typescript: true,
            },
          ],
        ],
      },
    }),
  ]);
}
