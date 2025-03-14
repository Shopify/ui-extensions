/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_VERSION = process.argv[2] || 'unstable';
const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/admin';
const srcRelativePath = 'src/surfaces/admin';
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const componentDefinitions = path.join(
  rootPath,
  'src/surfaces/admin/components.d.ts',
);
const copiedComponentDefinitions = path.join(srcPath, 'components.ts');
const shopifyDevPath = path.join(rootPath, '../../../shopify-dev');

const replaceFileContent = async (filePath, searchValue, replaceValue) => {
  const content = await fs.readFile(filePath, 'utf8');
  // @ts-ignore -- TS should know this is a string but it doesn't
  const replacedContent = content.replaceAll(searchValue, replaceValue);
  await fs.writeFile(filePath, replacedContent);
};

if (API_VERSION === 'unstable') {
  console.log(
    "Building docs for 'unstable' admin UI extensions API. You can add a calver version argument (e.g. 'yarn docs:admin 2023-07') to generate the docs for a stable version.",
  );
} else {
  console.log(`Building docs for '${API_VERSION}' admin UI extensions API.`);
  console.log(
    "When generating docs for a stable version, 'unstable' docs are not regenerated. This avoids overwriting other unstable changes that are not included in this version.",
  );
  console.log(
    "If you need to update the 'unstable' version, run this command again without the '$API_VERSION' parameter.",
  );
}

// Rename components.d.ts to components.ts so it can be picked up be the compiler
await fs.copyFile(componentDefinitions, copiedComponentDefinitions);

// Replace references of 'globalThis.HTMLElement' to 'any'
await replaceFileContent(
  copiedComponentDefinitions,
  /typeof globalThis\.HTMLElement/g,
  'any',
);

childProcess.execSync(
  `yarn tsc --project ${docsRelativePath}/tsconfig.docs.json --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --overridePath ./${docsRelativePath}/typeOverride.json --input ./${docsRelativePath}/reference ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${docsRelativePath}/generated`,
);
childProcess.execSync(
  `yarn tsc ${docsRelativePath}/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS && yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${docsRelativePath}/generated`,
);

const docsDataPath = path.join(docsPath, 'generated/generated_docs_data.json');

// Clean up generated files
const srcFiles = await fs.readdir(rootPath, {recursive: true});
const docJsFiles = srcFiles.filter((file) => file.endsWith('.doc.js'));
await Promise.all(docJsFiles.map((file) => fs.rm(path.join(rootPath, file))));
await fs.rm(copiedComponentDefinitions);

// Make sure https://shopify.dev URLs are relative so they work in Spin.
// See https://github.com/Shopify/generate-docs/issues/181
await replaceFileContent(docsDataPath, 'https://shopify.dev', '');

// Replace 'unstable' with the exact API version in relative doc links
await replaceFileContent(
  docsDataPath,
  '/docs/api/admin-extensions/unstable/',
  `/docs/api/admin-extensions/${API_VERSION}`,
);

if (!existsSync(shopifyDevPath)) {
  console.log(
    `Not copying docs to shopify-dev because it was not found at ${shopifyDevPath}.`,
  );
  process.exit();
}

// Ship the Admin Extensions Docs to shopify.dev
await fs.mkdir(
  path.join(
    shopifyDevPath,
    'db/data/docs/templated_apis/admin_extensions',
    API_VERSION,
  ),
  {recursive: true},
);

await fs.cp(
  path.join(docsPath, 'generated'),
  path.join(
    shopifyDevPath,
    'db/data/docs/templated_apis/admin_extensions',
    API_VERSION,
  ),
  {recursive: true},
);

// Shim which could live in @shopify/generate-docs to generate App Bridge docs
// In the future we could integrate this back into generate docs
// Right now we are doing this the quick and dirty way.
const docsData = await fs.readFile(docsDataPath, 'utf8');
const appBridgeComponentDocsData = JSON.parse(docsData).filter(
  (doc) =>
    doc.category === 'Components' &&
    // The Admin UI Extension components like AdminLink and AdminBlock should be excluded
    !['Other'].includes(doc.subCategory),
);

const appBridgeDocs = [];
await Promise.all(
  appBridgeComponentDocsData.map(async (component) => {
    delete component.defaultExample;
    component.category = 'Experimental Components';

    const componentDir = path.join(
      srcPath,
      'components',
      component.name,
      'examples',
      // Assumption that we only need one example for each component
      `basic-${component.name.toLowerCase()}.example.html`,
    );

    try {
      const componentExample = (await fs.readFile(componentDir, 'utf8')).trim();

      // eslint-disable-next-line require-atomic-updates
      component.defaultExample = {appBridge: componentExample};
    } catch (error) {
      console.warn('No AppBridge example found for', component.name);
    }

    appBridgeDocs.push(component);
  }),
);

// Heart surgery to ensure Experimental Components are updated
const existingAppBridgeDocsPath = path.join(
  shopifyDevPath,
  'db/data/docs/templated_apis/app_bridge/generated_docs_data.json',
);
const existingAppBridgeDocs = await fs.readFile(
  existingAppBridgeDocsPath,
  'utf-8',
);

const updatedAppBridgeDocs = JSON.parse(existingAppBridgeDocs)
  .filter((existingDoc) => existingDoc.category !== 'Experimental Components')
  .concat(appBridgeDocs);

await fs.writeFile(
  existingAppBridgeDocsPath,
  JSON.stringify(updatedAppBridgeDocs, null, 2),
);

console.log(
  'Admin Extensions Docs: https://shopify-dev.myshopify.io/docs/api/admin-extensions',
);
console.log(
  'App Bridge Docs: https://shopify-dev.myshopify.io/docs/api/app-bridge',
);
