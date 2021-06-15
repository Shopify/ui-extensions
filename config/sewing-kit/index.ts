import {
  createComposedProjectPlugin,
  createProjectPlugin,
} from '@sewing-kit/plugins';

import {javascript, updateBabelPreset} from '@sewing-kit/plugin-javascript';
import {typescript} from '@sewing-kit/plugin-typescript';
import {react} from '@sewing-kit/plugin-react';
import {buildFlexibleOutputs} from '@sewing-kit/plugin-package-flexible-outputs';
import type {} from '@sewing-kit/plugin-jest';

const PLUGIN = 'CheckoutUIExtensions.DefaultPackage';

export function uiExtensionsPackage({react: useReact = false} = {}) {
  return createComposedProjectPlugin(PLUGIN, (composer) => {
    composer.use(javascript(), typescript(), buildFlexibleOutputs());

    if (useReact) {
      composer.use(react(), reactJsxRuntime());
    }
  });
}

export function checkouUiExtensionsBinary() {
  return createComposedProjectPlugin(PLUGIN, [
    javascript(),
    typescript(),
    react(),
    buildFlexibleOutputs({
      binaries: true,
      node: true,
      esmodules: false,
      esnext: false,
    }),
  ]);
}

// eslint-disable-next-line no-warning-comments
// TODO: should be in the React plugin
function reactJsxRuntime() {
  return createProjectPlugin('Quilt.ReactJsxRuntime', ({tasks}) => {
    const updateReactBabelPreset = updateBabelPreset(['@babel/preset-react'], {
      runtime: 'automatic',
      importSource: 'react',
    });

    tasks.build.hook(({hooks}) => {
      hooks.target.hook(({hooks}) => {
        hooks.configure.hook(({babelConfig}) => {
          babelConfig?.hook(updateReactBabelPreset);
        });
      });
    });

    tasks.dev.hook(({hooks}) => {
      hooks.configure.hook(({babelConfig}) => {
        babelConfig?.hook(updateReactBabelPreset);
      });
    });

    tasks.test.hook(({hooks}) => {
      hooks.configure.hook(({babelConfig}) => {
        babelConfig?.hook(updateReactBabelPreset);
      });
    });
  });
}
