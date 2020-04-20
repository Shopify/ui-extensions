const fs = require('fs');

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
 * Component templates
 */
const HOST_COMPONENT_TEMPLATE = `
import React from 'react';

import {{{name}}Props} from '../../../client/core';

export default function {{name}}(props: {{name}}Props) {
  return <>Component Code</>;
}
`.trimLeft();

const CORE_CLIENT_COMPONENT_TEMPLATE = `
import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface {{name}}Props {}

export const {{name}} = createRemoteComponent<'{{name}}', {{name}}Props>('{{name}}');
`.trimLeft();

const REACT_CLIENT_COMPONENT_TEMPLATE = `
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {{{name}} as Base{{name}}} from '../../core';

export type {{name}}Props = ReactPropsFromRemoteComponentType<typeof Base{{name}}>;
export const {{name}} = createRemoteReactComponent(Base{{name}});
`.trimLeft();

/**
 * Create host component
 */
function createHost(componentName) {
  const path = 'packages/app-extensions-polaris-components/src/host/components';
  const componentDir = `${process.cwd()}/${path}/${componentName}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.tsx`,
    HOST_COMPONENT_TEMPLATE.replace(/{{name}}/g, componentName),
  );
  fs.writeFileSync(`${componentDir}/index.ts`, `export {default} from './${componentName}';\n`);

  console.log(`✅ Create ${componentName} host`);
}

/**
 * Create client component
 */
function createCoreClient(componentName) {
  const path = 'packages/app-extensions-polaris-components/src/client/core/components';
  const componentDir = `${process.cwd()}/${path}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.ts`,
    CORE_CLIENT_COMPONENT_TEMPLATE.replace(/{{name}}/g, componentName),
  );

  console.log(`✅ Create ${componentName} core client`);
}

function createReactClient(componentName) {
  const path = 'packages/app-extensions-polaris-components/src/client/react/components';
  const componentDir = `${process.cwd()}/${path}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.ts`,
    REACT_CLIENT_COMPONENT_TEMPLATE.replace(/{{name}}/g, componentName),
  );

  console.log(`✅ Create ${componentName} react client`);
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
  createCoreClient(componentName);
} catch (error) {
  killProcess("Couldn't create core client component.", error);
}

try {
  createReactClient(componentName);
} catch (error) {
  killProcess("Couldn't create react client component.", error);
}

console.log('🔥🔥🔥 Remember to update these files:');
console.log('packages/app-extensions-polaris-components/src/client/core/components/index.ts');
console.log('packages/app-extensions-polaris-components/src/client/react/components/index.ts');
console.log('packages/app-extensions-polaris-components/src/host/components/index.ts');
console.log('components/readme.md');
