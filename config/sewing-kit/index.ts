import {createComposedProjectPlugin} from '@sewing-kit/plugins';

import {javascript} from '@sewing-kit/plugin-javascript';
import {typescript} from '@sewing-kit/plugin-typescript';
import {jestProjectHooks} from '@sewing-kit/plugin-jest';
import {react} from '@sewing-kit/plugin-react';
import {buildFlexibleOutputs} from '@sewing-kit/plugin-package-flexible-outputs';

const PLUGIN = 'ArgoCheckout.DefaultPackage';

export function argoCheckoutPackage() {
  return createComposedProjectPlugin(PLUGIN, [
    javascript(),
    typescript(),
    jestProjectHooks(),
    react(),
    buildFlexibleOutputs(),
  ]);
}
