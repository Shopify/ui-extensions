import {createPackage} from '@shopify/loom';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {join, resolve} from 'path';

import {defaultProjectPlugin} from '../../config/loom';
import {rollupPlugins} from '@shopify/loom-plugin-build-library';
import replace from '@rollup/plugin-replace';

const packageJSON = JSON.parse(
  readFileSync(resolve(__dirname, './package.json')).toString(),
);

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  pkg.entry({name: 'checkout', root: './src/surfaces/checkout.ts'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin.ts'});
  pkg.entry({name: 'point-of-sale', root: './src/surfaces/point-of-sale.ts'});
  pkg.entry({
    name: 'customer-account',
    root: './src/surfaces/customer-account.ts',
  });
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
        name: 'combine-types',
        closeBundle: async () => {
          const mainTypesPath = join(__dirname, 'dist/surfaces/admin.d.ts');
          const componentsTypes = join(
            __dirname,
            'src/surfaces/admin/components.d.ts',
          );
          console.log('combine --->', {mainTypesPath, componentsTypes});
          if (existsSync(mainTypesPath) && existsSync(componentsTypes)) {
            console.log('exists');
            const mainTypesContent = readFileSync(mainTypesPath).toString();
            const componentsTypesContent =
              readFileSync(componentsTypes).toString();

            writeFileSync(
              mainTypesPath,
              componentsTypesContent.concat(mainTypesContent),
            );
          }
        },
      },
    ]),
  );
});
