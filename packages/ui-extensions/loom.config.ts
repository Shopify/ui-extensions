import {createPackage} from '@shopify/loom';
import {readFileSync} from 'fs';
import {resolve} from 'path';

import {rollupPlugins} from '@shopify/loom-plugin-build-library';
import replace from '@rollup/plugin-replace';
import {defaultProjectPlugin} from '../../config/loom';
import {buildTargetsDefinitions} from './buildTargetDts';

// Package configuration
const packageJSON = JSON.parse(
  readFileSync(resolve(__dirname, './package.json')).toString(),
);

export default createPackage((pkg) => {
  const completedSurfaces = new Set<string>();
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin.ts'});
  pkg.entry({name: 'checkout', root: './src/surfaces/checkout.ts'});
  pkg.entry({
    name: 'checkout/preact',
    root: './src/surfaces/checkout/preact/index.ts',
  });
  pkg.entry({
    name: 'customer-account',
    root: './src/surfaces/customer-account.ts',
  });
  pkg.entry({
    name: 'customer-account/preact',
    root: './src/surfaces/customer-account/preact/index.ts',
  });
  pkg.entry({name: 'point-of-sale', root: './src/surfaces/point-of-sale.ts'});
  pkg.entry({name: 'preact', root: './src/preact.ts'});
  pkg.use(
    defaultProjectPlugin(),
    rollupPlugins([
      replace({
        values: {
          __UI_EXTENSION_VERSION__: (packageJSON as any).version,
        },
        preventAssignment: true,
      }),
      {
        name: 'add-target-types',
        closeBundle: async () => {
          if (!completedSurfaces.has('admin')) {
            buildTargetsDefinitions(
              resolve(process.cwd(), 'packages/ui-extensions'),
              'admin',
            );
            completedSurfaces.add('admin');
          }
          if (!completedSurfaces.has('checkout')) {
            buildTargetsDefinitions(
              resolve(process.cwd(), 'packages/ui-extensions'),
              'checkout',
            );
            completedSurfaces.add('checkout');
          }
          if (!completedSurfaces.has('customer-account')) {
            buildTargetsDefinitions(
              resolve(process.cwd(), 'packages/ui-extensions'),
              'customer-account',
              ['src/surfaces/checkout'],
              ['ConsentCheckbox', 'ConsentPhoneField'],
            );
            completedSurfaces.add('customer-account');
          }
          if (!completedSurfaces.has('point-of-sale')) {
            buildTargetsDefinitions(
              resolve(process.cwd(), 'packages/ui-extensions'),
              'point-of-sale',
            );
            completedSurfaces.add('point-of-sale');
          }
        },
      },
    ]),
  );
});
