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

/**
 * Templates
 */
const EXTENSION_INPUT_TEMPLATE = `
import {useExtensionInput} from './utils';

export interface {{name}} {
  // TBD
}

export interface {{name}}Input {
  {{name-camelCase}}: {{name}};
}

function is{{name}}Input(input: any): input is {{name}}Input {
  return '{{name-camelCase}}' in input;
}

export function use{{name}}() {
  const input = useExtensionInput();
  if (!is{{name}}Input(input)) {
    throw new Error('No {{name-camelCase}} input found');
  }

  const {{{name-camelCase}}} = input;
  return {{name-camelCase}};
}
`.trimLeft();

/**
 * Create extension input
 */
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function createExtensionInput(extensionInputName) {
  const path = 'packages/app-extensions-renderer/src/input';
  const extensionInputDir = `${process.cwd()}/${path}`;
  const extensionInputNameCamelCase = camelize(extensionInputName);
  const content = EXTENSION_INPUT_TEMPLATE.replace(/{{name}}/g, extensionInputName).replace(
    /{{name-camelCase}}/g,
    extensionInputNameCamelCase,
  );

  fs.mkdirSync(extensionInputDir, {recursive: true});
  fs.writeFileSync(`${extensionInputDir}/${extensionInputNameCamelCase}.tsx`, content);

  console.log(`✅ Create ${extensionInputName}`);
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
const extensionInputName = process.argv[2].trim();

try {
  createExtensionInput(extensionInputName);
} catch (error) {
  killProcess("Couldn't create extension input.", error);
}

console.log('🔥🔥🔥 Remember to update these files:');
console.log('packages/app-extensions-renderer/src/input/index.ts');
console.log('packages/app-extensions-renderer/src/extension-points.ts');
