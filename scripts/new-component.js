const fs = require('fs');
const updateIndex = require('./updateIndex');

/**
 * Validate args
 */
if (process.argv.length === 2) {
  killProcess('Expected one argument `ComponentName` in Pascal Case');
}

if (process.argv.length > 3) {
  killProcess(
    'Cannot have more than one argument or have spaces in the Component Name. Please use PascalCase for the component name.',
  );
}

/**
 * client
 */
const CLIENT_TEMPLATE = `
import {createRemoteComponent} from '@remote-ui/core';

export interface {{name}}Props {}

export const {{name}} = createRemoteComponent<'{{name}}', {{name}}Props>('{{name}}');
`.trimLeft();

const CLIENT_REACT_TEMPLATE = `
import {createRemoteReactComponent} from '@remote-ui/react';
import {{{name}} as Base{{name}}} from '@shopify/argo-admin';

export interface {{name}}Props {}

export const {{name}} = createRemoteReactComponent(Base{{name}});
`.trimLeft();

function createClient(template, path, componentName) { 
  const componentDir = `${process.cwd()}/${path}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.ts`,
    template.replace(/{{name}}/g, componentName),
  );

  updateIndex(`${path}/index.ts`, `export * from './${componentName}';`);

  console.log(`✅ Create ${componentName} core`);
}

/**
 * Host
 */
const HOST_TEMPLATE = `
import React from 'react';
import {{{name}} as Argo{{name}}} from '@shopify/argo-admin';
import {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

// Use ReactPropsFromRemoteComponentType only if the component
// allows children. Otherwise you can import the props directly from argo-admin:
// import {{{name}}Props } from '@shopify/argo-admin';

type {{name}}Props = ReactPropsFromRemoteComponentType<typeof Argo{{name}}>;

export default function {{name}}(props: {{name}}Props) {
  return <>Component Code</>;
}
`.trimLeft();

function createHost(componentName) {
  const path = 'packages/argo-admin-host/src/components';
  const componentDir = `${process.cwd()}/${path}/${componentName}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.tsx`,
    HOST_TEMPLATE.replace(/{{name}}/g, componentName),
  );
  fs.writeFileSync(`${componentDir}/index.ts`, `export {default} from './${componentName}';\n`);

  updateIndex(
    `${path}/index.ts`,
    `export {default as ${componentName}} from './${componentName}';`,
  );

  console.log(`✅ Create ${componentName} host`);
}

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
const componentName = process.argv[2].trim();

try {
  createHost(componentName);
} catch (error) {
  killProcess("Couldn't create host component.", error);
}

try {
  createClient(CLIENT_TEMPLATE, 'packages/argo-admin/src/components', componentName);
} catch (error) {
  killProcess("Couldn't create core client component.", error);
}

try {
  createClient(CLIENT_REACT_TEMPLATE, 'packages/argo-admin-react/src/components', componentName);
} catch (error) {
  killProcess("Couldn't create React client component.", error);
}

console.log('🔥🔥🔥 Remember to update these files:');
console.log('components/readme.md');
console.log('packages/argo-admin/src/component-sets/index.ts');
console.log('one of the component sets in packages/argo-host/src/component-sets');
