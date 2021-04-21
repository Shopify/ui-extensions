const fs = require('fs');
const {exec} = require('child_process');
const prompts = require('prompts');

const {getFileContent, killProcess, pascalCaseValidator, toPascalCase} = require('./utils');

function newExtensionPoint(id, name) {
  return `
import {RemoteRoot} from '@remote-ui/core';

import {AllComponentsSchema} from '../../containers';

import {RenderableExtensionCallback, StandardApi, ToastApi} from '../types';

// Add the unique extension point(s) as a union string
// This example only contains a single extension point

export type ${name}ExtensionPoint = '${id}';

// Declare the Container API if needed
export interface ${name}ExtensionContainerApi {
  container: {};
}

// Declare the Data API if needed
export interface ${name}ExtensionDataApi {
  data: {};
}

// Update APIs for your needs
// All Extension APIs should include the StandardApi by default
export interface ${name}ExtensionApi {
  '${id}': StandardApi<${name}ExtensionPoint> & ToastApi & ${name}ExtensionContainerApi & ${name}ExtensionDataApi;
}

// Replace AllComponentsSchema with a schema for your needs
export interface ${name}ExtensionPointCallback {
  '${id}': RenderableExtensionCallback<${name}ExtensionApi['${id}'], RemoteRoot<AllComponentsSchema>>;
}
`.trimStart();
}

function getExtensionPointImport(identifier, name) {
  return `
import {
  ${name}ExtensionPoint,
  ${name}ExtensionApi,
  ${name}ExtensionPointCallback,
} from './identifiers/${identifier}';
export {${name}ExtensionPoint};

/*
Placeholder for new imports
*/

  `.trimStart();
}

async function createExtensionPoint() {
  const {page, identifier} = await prompt();
  const name = toPascalCase(identifier);
  const id = extensionPointId(page, name);
  const baseUrl = `${process.cwd()}/packages/argo-admin/src/extension-points`;
  const props = {baseUrl, identifier, id, name, page};

  updateOrCreatePageFiles(props);
  updateExtensionPoint(baseUrl, identifier, name);

  formatFiles();

  console.log(`🆔  New extension point ID: "${id}"`);
  console.log(
    `📚 Read more about this generator here: ${process.cwd()}/docs/Scripts/extension-point-generator.md`,
  );
}

function updateOrCreatePageFiles(props) {
  const {baseUrl, identifier, id, name} = props;
  const path = `${baseUrl}/identifiers/${identifier}.ts`;
  const readablePath = path.replace(`${process.cwd()}/`, '');

  if (fs.existsSync(path)) {
    update(path, newExtensionPoint(id, name));
    console.log(`💥  Updated ${readablePath}`);
  } else {
    fs.writeFileSync(path, newExtensionPoint(id, name));
    console.log(`💥  Created ${readablePath}`);
  }
}

function updateExtensionPoint(baseUrl, identifier, name) {
  const path = `${baseUrl}/index.ts`;
  const readablePath = path.replace(`${process.cwd()}/`, '');
  const content = getFileContent(path);

  const importContent = getExtensionPointImport(identifier, name);

  // Return early if we've already imported this extension definition
  if(content.match(importContent)) {
    return;
  }

  const newContent = content
    .replace(/\/\*\nPlaceholder for new imports\n\*\//,
      `\n${importContent}`,
    )
    .replace(
      /export type ExtensionPoint =(.+?);/s,
      `export type ExtensionPoint =$1 | ${name}ExtensionPoint;`,
    )
    .replace(
      /export type ExtensionApi =(.+?);/s,
      `export type ExtensionApi =$1 & ${name}ExtensionApi;`,
    )
    .replace(
      /export type ExtensionPointCallback =(.+?);/s,
      `export type ExtensionPointCallback =$1 & ${name}ExtensionPointCallback;`,
    ).trimStart();

  update(path, newContent);
  console.log(`💥  Updated ${readablePath}`);
}

async function prompt() {
  const questions = [
    {
      type: 'select',
      name: 'page',
      message: 'Where in the Admin would you like to expose your new Extension Point?',
      choices: [
        {title: 'Customer Details', value: 'CustomerDetails'},
        {title: 'Customer List', value: 'CustomerList'},
        {title: 'Order Details', value: 'OrderDetails'},
        {title: 'Order List', value: 'OrderList'},
        {title: 'Product Details', value: 'ProductDetails'},
        {title: 'Product List', value: 'ProductList'},
        {title: 'Other', value: 'other'},
      ],
      initial: 0,
    },
    {
      type: (prev) => (prev == 'other' ? 'text' : null),
      name: 'page',
      message: 'Enter the page where you would like to expose your Extension Point (PascalCase).',
      validate: (value) => (pascalCaseValidator(value) ? true : 'Page must use PascalCase'),
    },
    {
      type: 'text',
      name: 'identifier',
      message: 'Enter the identifier of the new extension type (Snake Case).',
    },
  ];

  const responses = await prompts(questions);

  return responses;
}

function extensionPointId(page, name) {
  return `Admin::${page}::${name}`;
}

function update(path, newContent) {
  fs.writeFileSync(path, newContent);
  console.log(`✅  Updated ${path.split('packages/')[1]}`);
}

function formatFiles() {
  // Fix import orders and other eslint issues
  exec('yarn run lint --fix', (err, stdout) => {
    if(err) {
      console.log('error:', stdout);
    }
  });
  exec('yarn run format', (err, stdout) => {
    if(err) {
      console.log('error:', stdout);
    }
  });
}

/* Main block */
try {
  createExtensionPoint();
} catch (error) {
  killProcess('Could not create new extension point.', error);
}

if (process.argv.length > 2) {
  killProcess('No need to supply any arguments. Please use prompts.');
}
