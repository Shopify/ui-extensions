import {resolve, join} from 'node:path';
import {unlinkSync, existsSync} from 'node:fs';

import {dts} from 'rollup-plugin-dts';

import {
  mergeExternalDts,
  mergeSingleComponentDts,
} from './mergeExternalDtsPlugin.mjs';

const COMPONENTS_ROOT = resolve('src/surfaces/checkout/components/');

const UI_EXTENSIONS_COMPONENTS = [
  'Abbreviation',
  'Banner',
  'Box',
  'Button',
  'ClipboardItem',
  'DropZone',
  'Form',
  'Heading',
  'Icon',
  'Image',
  'Link',
  'ListItem',
  'OrderedList',
  'Paragraph',
  'PaymentIcon',
  'Progress',
  'Spinner',
  'Stack',
  'Text',
  'Time',
  'UnorderedList',
];

function createSharedImportsAndRemoteDefinitions({sharedFilePath}) {
  const allComponentsDts = join(COMPONENTS_ROOT, 'components.d.ts');
  if (existsSync(allComponentsDts)) {
    unlinkSync(allComponentsDts);
  }
  if (existsSync(sharedFilePath)) {
    unlinkSync(sharedFilePath);
  }

  return {
    input: './src/surfaces/checkout/components/index.ts',
    output: [
      {
        file: allComponentsDts,
        format: 'es',
      },
    ],
    plugins: [
      dts({
        tsconfig: './components.tsconfig.json',
      }),
      {
        name: 'mergeExternalDts',
        writeBundle() {
          mergeExternalDts({
            file: './src/surfaces/checkout/components/components.d.ts',
            externalOutput: sharedFilePath,
            tempFilePath: './src/surfaces/checkout/components/temp-external.ts',
            inlinedLibraries: ['@shopify/ui-api-design'],
            tsconfigPath: './components.tsconfig.json',
          });
        },
      },
    ],
  };
}

function buildSingleComponentDts({filePath, sharedFileName}) {
  const componentName = filePath.split('/').pop().replace(/\.ts$/, '');
  const outputPath = join(COMPONENTS_ROOT, `${componentName}.d.ts`);

  if (existsSync(outputPath)) {
    unlinkSync(outputPath);
  }

  return {
    input: filePath,
    output: [
      {
        file: outputPath,
        format: 'es',
      },
    ],
    plugins: [
      dts(),
      {
        name: 'uiExtensionCreateSingleComponentDts',
        writeBundle: async ({file}) => {
          await mergeSingleComponentDts({
            file,
            sharedFileName,
            tempFilePath: './src/surfaces/checkout/components/temp-external.ts',
            tsconfigPath: './components.tsconfig.json',
          });
        },
      },
    ],
  };
}

export function generateComponents() {
  const sharedFileName = 'components-shared.d.ts';

  return [
    createSharedImportsAndRemoteDefinitions({
      sharedFilePath: join(COMPONENTS_ROOT, sharedFileName),
    }),
    ...UI_EXTENSIONS_COMPONENTS.map((componentName) => {
      return buildSingleComponentDts({
        filePath: resolve(
          join(COMPONENTS_ROOT, `${componentName}/${componentName}.ts`),
        ),
        sharedFileName,
      });
    }),
  ];
}
