import {createPackage} from '@shopify/loom';
import {copyFileSync, readFileSync, writeFileSync} from 'fs';
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
      {
        // TypeScript 4.9 cannot emit `typeof Symbol.dispose` or
        // `[Symbol.dispose]` in declaration files because it predates
        // the Explicit Resource Management proposal (TS >= 5.2).
        //
        // This plugin patches the emitted .d.ts after the build so
        // consumers on TS >= 5.2 can use the `using` keyword:
        //
        //   using extension = setUpExtension('purchase.checkout.block.render');
        //
        // Remove this plugin once the repo upgrades to TS >= 5.2.
        name: 'patch-disposable-types',
        closeBundle: async () => {
          const pkgDir = resolve(
            process.cwd(),
            'packages/ui-extensions-tester',
          );
          const buildDir = resolve(pkgDir, 'build/ts');
          const indexDts = resolve(buildDir, 'index.d.ts');

          // Copy ambient Disposable type declarations (tsc doesn't emit .d.ts inputs)
          copyFileSync(
            resolve(pkgDir, 'src/disposable.d.ts'),
            resolve(buildDir, 'disposable.d.ts'),
          );

          // Patch index.d.ts so the emitted types use Symbol.dispose
          let content = readFileSync(indexDts, 'utf-8');
          // We need to add this in a post-build script so the path doesn't get mangled.
          const ref = '/// <reference path="./disposable.d.ts" />';
          if (!content.startsWith(ref)) {
            content = `${ref}\n${content}`;
          }
          content = content.replace(
            'declare const SymbolDispose: unique symbol',
            'declare const SymbolDispose: typeof Symbol.dispose',
          );
          content = content.replace(/\[SymbolDispose\]/g, '[Symbol.dispose]');
          writeFileSync(indexDts, content);
        },
      },
    ]),
  );
});
