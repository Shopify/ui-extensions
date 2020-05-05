const fs = require('fs');

/**
 * Validate args
 */
if (process.argv.length === 2) {
  killProcess('Expected one argument `ExtensionInputName` in Pascal Case');
}

if (process.argv.length > 3) {
  killProcess(
    'Cannot have more than one argument or have spaces in the Extension Input Name. Please use Pascal Case for the extension input name.',
  );
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * Core
 */
const CORE_TEMPLATE = `
export interface {{name}} {
  // TBD
}

export interface {{name}}Input {
  {{name-camelCase}}: {{name}};
}

function is{{name}}Input(input: any): input is {{name}}Input {
  return '{{name-camelCase}}' in input;
}
`.trimLeft();

function createCoreExtensionInput(extensionInputName) {
  const path = 'packages/argo/src/extension-input';
  const extensionInputDir = `${process.cwd()}/${path}`;
  const extensionInputNameCamelCase = camelize(extensionInputName);
  const content = CORE_TEMPLATE.replace(/{{name}}/g, extensionInputName).replace(
    /{{name-camelCase}}/g,
    extensionInputNameCamelCase,
  );

  fs.mkdirSync(extensionInputDir, {recursive: true});
  fs.writeFileSync(`${extensionInputDir}/${extensionInputNameCamelCase}.ts`, content);

  console.log(`✅ Create ${extensionInputName} core`);
}

/**
 * React
 */
const REACT_TEMPLATE = `
import {is{{name}}Input} from '@shopify/argo';

import {useExtensionInput} from './utils';

export function use{{name}}() {
  const input = useExtensionInput();
  if (!is{{name}}Input(input)) {
    throw new Error('No {{name-camelCase}} input found');
  }
  const {{{name-camelCase}}} = input;
  return {{name-camelCase}};
}
`.trimLeft();

function createReactExtensionInput(extensionInputName) {
  const path = 'packages/argo-react/src/extension-input';
  const extensionInputDir = `${process.cwd()}/${path}`;
  const extensionInputNameCamelCase = camelize(extensionInputName);
  const content = REACT_TEMPLATE.replace(/{{name}}/g, extensionInputName).replace(
    /{{name-camelCase}}/g,
    extensionInputNameCamelCase,
  );

  fs.mkdirSync(extensionInputDir, {recursive: true});
  fs.writeFileSync(`${extensionInputDir}/${extensionInputNameCamelCase}.ts`, content);

  console.log(`✅ Create ${extensionInputName} react`);
}

/**
 * Host
 */
const HOST_TEMPLATE = `
import {useMemo} from 'react';
import {{{name}}Input} from '@shopify/argo';

export function use{{name}}(): {{name}}Input {
  return useMemo(
    () => ({
      // TODO: implemenent {{name-camelCase}} input
    }),
    [],
  );
}
`.trimLeft();

function createHostExtensionInput(extensionInputName) {
  const path = 'packages/argo-host/src/extension-input';
  const extensionInputDir = `${process.cwd()}/${path}`;
  const extensionInputNameCamelCase = camelize(extensionInputName);
  const content = HOST_TEMPLATE.replace(/{{name}}/g, extensionInputName).replace(
    /{{name-camelCase}}/g,
    extensionInputNameCamelCase,
  );

  fs.mkdirSync(extensionInputDir, {recursive: true});
  fs.writeFileSync(`${extensionInputDir}/use${extensionInputName}Input.ts`, content);

  console.log(`✅ Create ${extensionInputName} host`);
}

/**
/**
 * Error message and kill process
 */
function killProcess(errorMessage, error) {
  console.error(errorMessage, error);
  process.exit(1);
}

/**
 * Main block
 */
const extensionInputName = process.argv[2].trim();

try {
  createCoreExtensionInput(extensionInputName);
  createReactExtensionInput(extensionInputName);
  createHostExtensionInput(extensionInputName);
} catch (error) {
  killProcess("Couldn't create extension input.", error);
}

console.log('🔥🔥🔥 Remember to update these files:');
console.log('packages/argo/src/extension-input/index.ts');
console.log('packages/argo-react/src/extension-input/index.ts');
console.log('packages/argo-host/src/extension-input/index.ts');
console.log(`packages/argo-host/src/extension-input/use${extensionInputName}Input.ts`);
console.log('packages/argo/src/extension-points.ts');
