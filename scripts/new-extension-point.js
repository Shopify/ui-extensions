const fs = require('fs');
const {exec} = require('child_process');
const prompts = require('prompts');

const {getFileContent, killProcess, pascalCaseValidator, toSpinalCase} = require('./utils');

const {
  newApiTemplate,
  newCallbackTemplate,
  indexTemplate,
} = require('./templates/new-extension-point-templates.js');

async function createExtensionPoint() {
  const {page, name} = await prompt();
  const id = extensionPointId(page, name);
  const baseUrl = `${process.cwd()}/packages/argo-admin/src/extension-points`;
  const dirName = toSpinalCase(page);
  const props = {baseUrl, dirName, id, name, page};

  updateExtensionPoint(baseUrl, id);
  updateSchemaTypes(name);
  updateSchema(id, name);
  updateExtensionApi(baseUrl, dirName, page);
  updateExtensionPointCallback(props);

  ['api', 'callback', 'index'].forEach((fileType) => updateOrCreatePageFiles(fileType, props));

  formatFiles();

  console.log(`🆔  New extension point ID: "${id}"`);
  console.log(`💥  Updated or created 3 files in: src/extension-points/${dirName}`);
  console.log(`  ① api.ts`);
  console.log(`  ② callback.ts`);
  console.log(`  ③ index.ts`);
  console.log(
    `📚 Read more about this generator here: ${process.cwd()}/docs/Scripts/extension-point-generator.md`,
  );
}

function updateOrCreatePageFiles(fileType, props) {
  const {baseUrl, dirName} = props;
  // Create the extension point directory if it does not exist
  if (!fs.existsSync(`${baseUrl}/${dirName}`)) {
    fs.mkdirSync(`${baseUrl}/${dirName}`);
    console.log(`📁  Created new directory: src/extension-points/${dirName}`);
  }

  // Create api.ts, callback.ts, and index.ts in the extension point directory if they do not exist
  if (fs.existsSync(`${baseUrl}/${dirName}/${fileType}.ts`)) {
    updatePageFile(fileType, props);
  } else {
    createPageFile(fileType, props);
  }
}

function updatePageFile(fileType, {baseUrl, dirName, id, name, page}) {
  const path = `${baseUrl}/${dirName}/${fileType}.ts`;
  const content = getFileContent(path);
  if (fileType === 'api') {
    updateApiFile(content, id, name, path);
  } else if (fileType === 'callback') {
    updateCallbackFile(content, id, name, path);
  }
}

function updateApiFile(content, id, name, path) {
  const newContent = `${content
    .replace(
      'export interface',
      `export type ${name}Api<T extends ExtensionPoint> = StandardApi<T> & ToastApi & DataApi<T>;\n\nexport interface`,
    )
    .replace(`}\n`, `'${id}': ${name}Api<'${id}'>;\n}\n`)}`;

  update(path, newContent);
}

function updateCallbackFile(content, id, name, path) {
  const newContent = `${content.replace("} from './api';", `, ${name}Api} from './api';`).replace(
    `>;\n}\n`,
    `>;\n'${id}': RenderableExtensionCallback<
    ${name}Api<'${id}'>,
    RemoteRoot<ExtensionPointSchema['${id}']>
  >;
  }\n`,
  )}`;

  update(path, newContent);
}

function createPageFile(fileType, {baseUrl, dirName, id, name, page}) {
  const path = `${baseUrl}/${dirName}/${fileType}.ts`;
  const templateMap = {
    api: newApiTemplate(page, id, name),
    callback: newCallbackTemplate(page, id, name),
    index: indexTemplate(page),
  };

  fs.writeFileSync(path, templateMap[fileType]);
}

function updateExtensionPoint(baseUrl, id) {
  const path = `${baseUrl}/extension-point.ts`;
  const content = getFileContent(path);
  const newContent = `${content.replace(';', `\n  | '${id}';`)}`.trimStart();

  update(path, newContent);
}

function updateSchemaTypes(name) {
  const path = `${process.cwd()}/packages/argo-admin/src/components/schemas/types.ts`;
  const content = getFileContent(path);

  if (content.includes(name)) {
    console.log('This type already exists. No changes made to src/components/schemas/types.ts');
  } else {
    const newSchemaType = `\nexport type ${name}Schema = any;\n`;
    fs.appendFileSync(path, newSchemaType);
    console.log(
      '✅  Added type to src/components/schemas/types.ts -❗️ Remember to edit new Type❗️',
    );
  }
}

function updateSchema(id, name) {
  const path = `${process.cwd()}/packages/argo-admin/src/components/schemas/extension-point-schema.ts`;
  const content = getFileContent(path);

  let newContent = `
    ${content.replace('}\n', `  '${id}': ${name}Schema;}\n`)}`.trimStart();

  // Only import Schema if it has not yet been imported
  if (!content.includes(name)) {
    newContent = `${newContent.replace('import {', `import {${name}Schema,`)}`;
  }

  update(path, newContent);
}

function updateExtensionApi(baseUrl, dirName, page) {
  const path = `${baseUrl}/extension-api.ts`;
  const content = getFileContent(path);

  // Only import and extend ExtensionApi if it has not yet been imported
  if (!content.includes(page)) {
    const newContent = `
      ${content
        .replace(
          '\nexport interface',
          `import {${page}ExtensionApi} from './${dirName}';\n\nexport interface`,
        )
        .replace(`extends `, `extends ${page}ExtensionApi,\n`)}`.trimStart();
    update(path, newContent);
  }
}

function updateExtensionPointCallback({baseUrl, dirName, page}) {
  const path = `${baseUrl}/extension-point-callback.ts`;
  const content = getFileContent(path);

  // Only import and extend ExtensionPointCallback if it has not yet been imported
  if (!content.includes(page)) {
    const newContent = `${content
      .replace(
        '\nexport interface',
        `import {${page}ExtensionPointCallback} from './${dirName}';\n\n export interface`,
      )
      .replace('extends', `extends ${page}ExtensionPointCallback,`)}`;

    update(path, newContent);
  }
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
      name: 'name',
      message: 'Enter name of new Extension Point (PascalCase).',
      validate: (value) => (pascalCaseValidator(value) ? true : 'Name must use PascalCase'),
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
  exec('yarn run format', (err) => {
    if (err) throw err;
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
