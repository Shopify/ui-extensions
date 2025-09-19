/* eslint-disable no-undef, no-console */
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import {
  generateFiles,
  copyGeneratedToShopifyDev,
  replaceFileContent,
} from '../build-doc-shared.mjs';

const EXTENSIONS_API_VERSION = process.argv[2] || 'unstable';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/customer-account';
const docsGeneratedRelativePath = 'docs/surfaces/customer-account/generated';
const srcRelativePath = 'src/surfaces/customer-account';
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const generatedDocsPath = path.join(docsPath, 'generated');
const shopifyDevPath = path.join(rootPath, '../../../shopify-dev');
const shopifyDevDBPath = path.join(
  shopifyDevPath,
  'db/data/docs/templated_apis',
);

const generatedDocsDataFile = 'generated_docs_data.json';
const generatedStaticPagesFile = 'generated_static_pages.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const tsconfig = 'tsconfig.docs.json';

const transformJson = async (filePath) => {
  let jsonData = JSON.parse((await fs.readFile(filePath, 'utf8')).toString());

  jsonData = jsonData.filter(Boolean);
  await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
};

const generateExtensionsDocs = async () => {
  console.log(
    `Building Customer Account UI Extensions docs for ${EXTENSIONS_API_VERSION} version`,
  );

  if (EXTENSIONS_API_VERSION === 'unstable') {
    console.log(
      "You can add a calver version argument (e.g. 'yarn docs:customer-account 2024-07') to generate the docs for a stable version.",
    );
  }

  const outputDir = `${docsGeneratedRelativePath}/customer_account_ui_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfig} --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --overridePath ./${docsRelativePath}/typeOverride.json --input ./${docsRelativePath}/reference ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
    `yarn tsc ${docsRelativePath}/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${outputDir}`,
    `yarn tsc ${docsRelativePath}/categories/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --isCategoryPage --input ./${docsRelativePath}/categories --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    generatedStaticPagesFile,
    transformJson,
  });

  // Replace 'unstable' with the exact API version in relative doc links
  await replaceFileContent({
    filePaths: path.join(outputDir, generatedDocsDataFile),
    searchValue: '/docs/api//unstable/',
    replaceValue: `/docs/api/customer-account-ui-extensions/${EXTENSIONS_API_VERSION}`,
  });

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'react-app/public/images/templated-apis-screenshots/customer-account-ui-extensions',
      EXTENSIONS_API_VERSION,
    ),
    {recursive: true},
  );
};

try {
  if (existsSync(generatedDocsPath)) {
    await fs.rm(generatedDocsPath, {recursive: true});
  }
  await fs.copyFile(componentDefs, tempComponentDefs);
  await replaceFileContent({
    filePaths: tempComponentDefs,
    searchValue: /typeof globalThis\.HTMLElement/g,
    replaceValue: 'any',
  });
  await generateExtensionsDocs();
  await copyGeneratedToShopifyDev({
    generatedDocsPath,
    shopifyDevPath,
    shopifyDevDBPath,
  });

  await fs.rm(tempComponentDefs);
} catch (error) {
  console.error(error);
  console.log(error.stdout.toString());
  console.log(error.stderr.toString());
  process.exit(1);
}
