/* eslint-disable no-undef, no-console */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const componentNames = [];

// Process arguments
for (let i = 0; i < args.length; i++) {
  componentNames.push(args[i]);
}

// Check if at least one component name is provided
if (componentNames.length === 0) {
  console.error(
    'Usage: node create-doc-files.js component_name1 [component_name2 ...]',
  );
  process.exit(1);
}

console.log(`Scaffolding components docs for admin`);

const baseDir = './packages/ui-extensions/src/surfaces/admin/components';

componentNames.forEach((componentName) => {
  const folder = path.join(baseDir, componentName);
  fs.mkdirSync(folder, {recursive: true});

  const examplesDir = path.join(folder, 'examples');
  fs.mkdirSync(examplesDir, {recursive: true});

  const exDocsFile = path.join(folder, `${componentName}.doc.ts`);
  const abDocsFile = path.join(folder, `${componentName}.ab.doc.ts`);
  const sharedDocsFile = path.join(folder, 'shared.ts');

  // Convert camelCase to kebab-case
  const lowercaseComponentName = componentName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  // Create HTML and JSX example file
  const examples = [
    path.join(examplesDir, `default.html`),
    path.join(examplesDir, `default.jsx`),
  ];
  examples.forEach((example) => {
    if (fs.existsSync(example)) return;
    fs.writeFileSync(
      example,
      `  <s-${lowercaseComponentName}></s-${lowercaseComponentName}>\n`,
    );
    console.log(`Created example file for ${componentName}`);
  });

  const sharedContent = `const shared = {
  name: '${componentName}',
  description: '${componentName} is used to ...',
  thumbnail: '${lowercaseComponentName}-thumbnail.png',
  isVisualComponent: true,
  definitions: [
    {
      title: '${componentName}',
      description: '',
      type: '${componentName}',
    },
  ],
  subCategory: '',
  related: [],
  defaultExample: {
    codeblock: {
      title: '',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default shared;`;

  const appBridgeDocContent = `import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Experimental Components',
};

export default data;
`;

  const extensionDocContent = `import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Components',
};

export default data;
`;

  writeContentToFile(exDocsFile, extensionDocContent);
  writeContentToFile(abDocsFile, appBridgeDocContent);
  writeContentToFile(sharedDocsFile, sharedContent);
});

function writeContentToFile(filePath, content, componentName) {
  if (fs.existsSync(filePath)) {
    console.log(`Documentation file for ${componentName} already exists`);
    return;
  }

  fs.writeFileSync(filePath, content);
  console.log(`Created documentation file for ${componentName}`);
}
/* eslint-enable no-undef, no-console */
