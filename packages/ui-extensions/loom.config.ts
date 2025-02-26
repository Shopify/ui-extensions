import {createPackage} from '@shopify/loom';
import {existsSync, readFileSync, mkdirSync, writeFileSync} from 'fs';
import {join, resolve} from 'path';

import {defaultProjectPlugin} from '../../config/loom';
import {rollupPlugins} from '@shopify/loom-plugin-build-library';
import replace from '@rollup/plugin-replace';
import {Project} from 'ts-morph';

const packageJSON = JSON.parse(
  readFileSync(resolve(__dirname, './package.json')).toString(),
);

export default createPackage((pkg) => {
  pkg.entry({root: './src/index.ts'});
  // pkg.entry({name: 'checkout', root: './src/surfaces/checkout.ts'});
  pkg.entry({name: 'admin', root: './src/surfaces/admin.ts'});
  // pkg.entry({name: 'point-of-sale', root: './src/surfaces/point-of-sale.ts'});
  // pkg.entry({
  //   name: 'customer-account',
  //   root: './src/surfaces/customer-account.ts',
  // });
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
          const project = new Project();
          const sourceFile = project.addSourceFileAtPath(
            resolve(__dirname, `./src/surfaces/admin/extension-targets.ts`),
          );
          const node = sourceFile.getInterface('ExtensionTargets')!;
          const targets = node
            .getProperties()
            .map((property: any) => property.getName());

          targets.forEach((target) => {
            const parts = target.replaceAll("'", '').split('.');
            const surface = parts[0];
            const fileName = `${parts.join('.')}.d.ts`;
            const directory = resolve(
              __dirname,
              join(`./build/ts/surfaces/${surface}/targets`),
            );
            const targetPath = join(directory, fileName);

            const template = `import type {TargetApi} from '../globals';\n
declare global {
  const shopify: TargetApi<${target}>;
}\n`;
            if (!existsSync(directory)) {
              mkdirSync(directory);
            }
            writeFileSync(targetPath, template);
          });
        },
      },
      {
        name: 'add-components-types',
        closeBundle: async () => {
          const mainTypesPath = join(__dirname, 'build/ts/surfaces/admin.d.ts');
          const componentsTypes = join(
            __dirname,
            'src/surfaces/admin/components.d.ts',
          );
          if (existsSync(mainTypesPath) && existsSync(componentsTypes)) {
            const mainTypesContent = readFileSync(mainTypesPath).toString();
            const componentsTypesContent = readFileSync(componentsTypes)
              .toString()
              .replaceAll(/\/\*.*$/g, '');

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
