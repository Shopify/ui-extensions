import {createPackage} from '@shopify/loom';
import {
  existsSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  copyFileSync,
} from 'fs';
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
        name: 'add-components-types',
        closeBundle: async () => {
          const buildPath = join(
            __dirname,
            'build/ts/surfaces/admin/components',
          );
          const srcPath = join(__dirname, 'src/surfaces/admin/components');
          if (existsSync(srcPath) && existsSync(buildPath)) {
            const components = readdirSync(srcPath);

            components.forEach((componentFile) => {
              if (componentFile.endsWith('d.ts')) {
                copyFileSync(
                  join(srcPath, componentFile),
                  join(buildPath, componentFile),
                );
              }
            });
          }
        },
      },
      {
        name: 'add-target-types',
        closeBundle: async () => {
          // See https://stackoverflow.com/questions/43909566/get-keys-of-a-typescript-interface-as-array-of-strings#answer-62477194
          const project = new Project();
          const sourceFile = project.addSourceFileAtPath(
            resolve(__dirname, `./src/surfaces/admin/extension-targets.ts`),
          );
          const node = sourceFile.getInterface('ExtensionTargets')!;
          const targets = node.getProperties().map((property) => {
            const componentSet = property
              .getType()
              .getProperty('components')
              ?.getTypeAtLocation(node)
              .getText();

            return {target: property.getName(), componentSet};
          });

          targets.forEach(({target, componentSet}) => {
            const parts = target.replaceAll("'", '').split('.');
            const surface = parts[0];
            const fileName = `${parts.join('.')}.d.ts`;
            const directory = resolve(
              __dirname,
              join(`./build/ts/surfaces/${surface}/targets`),
            );
            const targetPath = join(directory, fileName);

            const template = `/// <reference types="../components/${componentSet?.replaceAll(
              '"',
              '',
            )}" />\nimport type {ExtensionTargets} from '../extension-targets';
type Target = ExtensionTargets[${target}];
export type Api = Target['api'];
export type Output = Target['output'];

declare global {
  const shopify: Api;
  export default function extension(): Output;
}\n`;
            if (!existsSync(directory)) {
              mkdirSync(directory);
            }
            writeFileSync(targetPath, template);
          });
        },
      },
    ]),
  );
});
