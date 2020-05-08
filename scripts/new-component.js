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
 * Core
 */
const CORE_TEMPLATE = `
import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface {{name}}Props {}

export const {{name}} = createRemoteComponent<'{{name}}', {{name}}Props>('{{name}}');
`.trimLeft();

function createCoreClient(componentName) {
  const path = 'packages/argo/src/components';
  const componentDir = `${process.cwd()}/${path}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.ts`,
    CORE_TEMPLATE.replace(/{{name}}/g, componentName),
  );

  console.log(`✅ Create ${componentName} core`);
}

function updateIndex(path, addition) {
  const currentFile = fs.readFileSync(path);
  const currentFileContent = currentFile.toString();

  const newContent = `
${currentFileContent.trimRight()}
${addition}
`.trimLeft();

  fs.writeFileSync(path, newContent);

}

/**
 * React
 */

const REACT_TEMPLATE = `
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';
import {{{name}} as Base{{name}}} from '@shopify/argo/components';

export type {{name}}Props = ReactPropsFromRemoteComponentType<typeof Base{{name}}>;
export const {{name}} = createRemoteReactComponent(Base{{name}});
`.trimLeft();

function createReactClient(componentName) {
  const path = 'packages/argo-react/src/components';
  const componentDir = `${process.cwd()}/${path}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.ts`,
    REACT_TEMPLATE.replace(/{{name}}/g, componentName),
  );

  console.log(`✅ Create ${componentName} react`);
}

/**
 * Host
 */
const HOST_TEMPLATE = `
import React from 'react';
import {{{name}}Props} from '@shopify/argo/components';

export default function {{name}}(props: {{name}}Props) {
  return <>Component Code</>;
}
`.trimLeft();

function createHost(componentName) {
  const path = 'packages/argo-host/src/components';
  const componentDir = `${process.cwd()}/${path}/${componentName}`;

  fs.mkdirSync(componentDir, {recursive: true});
  fs.writeFileSync(
    `${componentDir}/${componentName}.tsx`,
    HOST_TEMPLATE.replace(/{{name}}/g, componentName),
  );
  fs.writeFileSync(`${componentDir}/index.ts`, `export {default} from './${componentName}';\n`);

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

try{
  updateIndex(
    'packages/argo-host/src/components/index.ts',
    `export {default as ${componentName}} from './${componentName}';`
  );
} catch (error) {
  killProcess("Couldn't create react client component.", error);
}



try {
  createCoreClient(componentName);
} catch (error) {
  killProcess("Couldn't create core client component.", error);
}

try{
  updateIndex(
    'packages/argo/src/components/index.ts',
    `export * from './${componentName}';`
  );
} catch (error) {
  killProcess("Couldn't create react client component.", error);
}

try {
  createReactClient(componentName);
} catch (error) {
  killProcess("Couldn't create react client component.", error);
}

try{
  updateIndex(
    'packages/argo-react/src/components/index.ts',
    `export * from './${componentName}';`
  );
} catch (error) {
  killProcess("Couldn't create react client component.", error);
}

console.log('🔥🔥🔥 Remember to update this file:');
console.log('components/readme.md');
