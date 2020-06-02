const fs = require('fs');
const updateIndex = require('./updateIndex');

/**
 * Validate args
 */
if (process.argv.length === 2) {
  killProcess('Expected one argument `ExtensionApiName` in Pascal Case');
}

if (process.argv.length > 3) {
  killProcess(
    'Cannot have more than one argument or have spaces in the Extension Api Name. Please use Pascal Case for the extension api name.',
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

export interface {{name}}Api {
  {{name-camelCase}}: {{name}};
}

export function is{{name}}Api(api: any): api is {{name}}Api {
  return '{{name-camelCase}}' in api;
}
`.trimLeft();

function createCoreExtensionApi(extensionApiName) {
  const path = 'packages/argo/src/extension-api';
  const extensionApiDir = `${process.cwd()}/${path}`;
  const extensionApiNameCamelCase = camelize(extensionApiName);
  const content = CORE_TEMPLATE.replace(/{{name}}/g, extensionApiName).replace(
    /{{name-camelCase}}/g,
    extensionApiNameCamelCase,
  );

  fs.mkdirSync(extensionApiDir, {recursive: true});
  fs.writeFileSync(`${extensionApiDir}/${extensionApiNameCamelCase}.ts`, content);

  updateIndex(`${path}/index.ts`, `export {${extensionApiName}, is${extensionApiName}Api} from './${extensionApiNameCamelCase}';`);

  console.log(`✅ Create ${extensionApiName} core`);
}

/**
 * React
 */
const REACT_TEMPLATE = `
import {is{{name}}Api} from '../../extension-api/{{name-camelCase}}';
import {useExtensionApi} from './utils';

export function use{{name}}() {
  const api = useExtensionApi();
  if (!is{{name}}Api(api)) {
    throw new Error('No {{name-camelCase}} api found');
  }
  return api.{{name-camelCase}};
}
`.trimLeft();

function createReactExtensionApi(extensionApiName) {
  const path = 'packages/argo/src/react/extension-api';
  const extensionApiDir = `${process.cwd()}/${path}`;
  const extensionApiNameCamelCase = camelize(extensionApiName);
  const content = REACT_TEMPLATE.replace(/{{name}}/g, extensionApiName).replace(
    /{{name-camelCase}}/g,
    extensionApiNameCamelCase,
  );

  fs.mkdirSync(extensionApiDir, {recursive: true});
  fs.writeFileSync(`${extensionApiDir}/${extensionApiNameCamelCase}.ts`, content);

  updateIndex(`${path}/index.ts`, `export * from './${extensionApiNameCamelCase}';`);

  console.log(`✅ Create ${extensionApiName} react`);
}

/**
 * Host
 */
const HOST_TEMPLATE = `
import {useMemo} from 'react';
import {{{name}}Api} from '@shopify/argo/extension-api/{{name-camelCase}}';

export function use{{name}}(): {{name}}Api {
  return useMemo(
    () => ({
      // TODO: implemenent {{name-camelCase}} api
    }),
    [],
  );
}
`.trimLeft();

function createHostExtensionApi(extensionApiName) {
  const path = 'packages/argo-host/src/extension-api';
  const extensionApiDir = `${process.cwd()}/${path}`;
  const extensionApiNameCamelCase = camelize(extensionApiName);
  const content = HOST_TEMPLATE.replace(/{{name}}/g, extensionApiName).replace(
    /{{name-camelCase}}/g,
    extensionApiNameCamelCase,
  );

  fs.mkdirSync(extensionApiDir, {recursive: true});
  fs.writeFileSync(`${extensionApiDir}/use${extensionApiName}Api.ts`, content);

  updateIndex(`${path}/index.ts`, `export * from './use${extensionApiName}Api';`);

  console.log(`✅ Create ${extensionApiName} host`);
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
const extensionApiName = process.argv[2].trim();

try {
  createCoreExtensionApi(extensionApiName);
  createReactExtensionApi(extensionApiName);
  createHostExtensionApi(extensionApiName);
} catch (error) {
  killProcess("Couldn't create extension api.", error);
}

console.log('🔥🔥🔥 Remember to update these files:');
console.log(`packages/argo-host/src/extension-api/use${extensionApiName}Api.ts`);
console.log('packages/argo/src/extension-points.ts');
