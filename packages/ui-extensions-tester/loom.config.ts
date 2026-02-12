import {createPackage} from '@shopify/loom';
import {readFileSync} from 'fs';
import {resolve} from 'path';

import {rollupPlugins} from '@shopify/loom-plugin-build-library';
import replace from '@rollup/plugin-replace';
import {defaultProjectPlugin} from '../../config/loom';

const packageJSON = JSON.parse(
  readFileSync(resolve(__dirname, './package.json')).toString(),
);

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'admin', root: './src/admin/index.ts'});
  pkg.entry({name: 'checkout', root: './src/checkout/index.ts'});
  pkg.entry({name: 'point-of-sale', root: './src/point-of-sale/index.ts'});
  pkg.entry({
    name: 'customer-account',
    root: './src/customer-account/index.ts',
  });
  pkg.use(
    defaultProjectPlugin(),
    rollupPlugins([
      replace({
        values: {
          __TESTER_PACKAGE_VERSION__: JSON.stringify(
            (packageJSON as any).version,
          ),
        },
        preventAssignment: true,
      }),
    ]),
  );
});
