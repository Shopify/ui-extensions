import {createComposedProjectPlugin} from '@sewing-kit/plugins';

import {javascript} from '@sewing-kit/plugin-javascript';
import {typescript} from '@sewing-kit/plugin-typescript';
import {react} from '@sewing-kit/plugin-react';
import {buildFlexibleOutputs} from '@sewing-kit/plugin-package-flexible-outputs';

const PLUGIN = 'ArgoCheckout.DefaultPackage';

export function argoCheckoutPackage() {
  return createComposedProjectPlugin(PLUGIN, [
    javascript(),
    typescript(),
    react(),
    buildFlexibleOutputs(),
  ]);
}

export function argoCheckoutBinary() {
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
