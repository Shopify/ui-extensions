/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
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
/** Folder name for admin_extensions when copying to shopify-dev. Defaults to EXTENSIONS_API_VERSION; for 2026-04 we use 2026-04-rc so docs land in the rc folder. */
const SHOPIFY_DEV_EXTENSIONS_FOLDER =
  process.argv[3] ??
  (EXTENSIONS_API_VERSION === '2026-04' ? '2026-04-rc' : null);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/admin';
const docsGeneratedRelativePath = 'docs/surfaces/admin/generated';
const srcRelativePath = 'src/surfaces/admin';
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const generatedDocsPath = path.join(docsPath, 'generated');
const worldPath = path.join(process.env.HOME, 'world/trees/root/src');
const worldDBPath = path.join(
  worldPath,
  'areas/platforms/shopify-dev/db/data/docs/templated_apis',
);
const worldExists = existsSync(worldPath);

const shopifyDevPath = worldExists
  ? worldPath
  : path.join(rootPath, '../../../shopify-dev');
const shopifyDevDBPath = worldExists
  ? worldDBPath
  : path.join(
      shopifyDevPath,
      'areas/platforms/shopify-dev/db/data/docs/templated_apis',
    );

const shopifyDevExists = existsSync(shopifyDevPath);

const generatedDocsDataV2File = 'generated_docs_data_v2.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const generateExtensionsDocs = async () => {
  console.log(
    `Building Admin UI Extensions docs for ${EXTENSIONS_API_VERSION} version`,
  );

  if (EXTENSIONS_API_VERSION === 'unstable') {
    console.log(
      "You can add a calver version argument (e.g. 'yarn docs:admin 2023-07') to generate the docs for a stable version.",
    );
  }
  if (SHOPIFY_DEV_EXTENSIONS_FOLDER) {
    console.log(
      `Shopify-dev admin_extensions folder will be: ${SHOPIFY_DEV_EXTENSIONS_FOLDER}`,
    );
  }

  const outputDir = `${docsGeneratedRelativePath}/admin_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn generate-docs --input ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataV2File,
  });

  // Replace 'unstable' with the exact API version in relative doc links
  const generatedDocsPathForVersion = path.join(rootPath, outputDir);
  await replaceFileContent({
    filePaths: path.join(generatedDocsPathForVersion, generatedDocsDataV2File),
    searchValue: '/docs/api/admin-extensions/unstable/',
    replaceValue: `/docs/api/admin-extensions/${EXTENSIONS_API_VERSION}`,
  });

  // Generate targets.json (extension targets + APIs + components mapping)
  const targetsScriptPath = path.join(__dirname, 'build-docs-targets-json.mjs');
  childProcess.execSync(`node ${targetsScriptPath}`, {
    stdio: 'inherit',
    cwd: rootPath,
  });
};

const generateAppBridgeDocs = async () => {
  console.log('Building App Home docs');

  const outputDir = `${docsGeneratedRelativePath}/app_home`;
  const scripts = [
    `yarn generate-docs --input ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataV2File,
  });
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
  await generateAppBridgeDocs();

  const adminExtensionsOutput = path.join(
    rootPath,
    docsGeneratedRelativePath,
    'admin_extensions',
    EXTENSIONS_API_VERSION,
  );
  const appHomeOutput = path.join(
    rootPath,
    docsGeneratedRelativePath,
    'app_home',
  );
  const targetsJsonPath = path.join(adminExtensionsOutput, 'targets.json');
  const generatedDocsDataV2Path = path.join(
    adminExtensionsOutput,
    generatedDocsDataV2File,
  );
  console.log('\nGenerated docs at:');
  console.log('  Admin extensions:', adminExtensionsOutput);
  console.log('  targets.json:', targetsJsonPath);
  console.log('  generated_docs_data_v2.json:', generatedDocsDataV2Path);
  console.log('  App Home:', appHomeOutput);

  await copyGeneratedToShopifyDev({
    generatedDocsPath,
    shopifyDevPath,
    shopifyDevDBPath,
  });

  if (
    SHOPIFY_DEV_EXTENSIONS_FOLDER &&
    SHOPIFY_DEV_EXTENSIONS_FOLDER !== EXTENSIONS_API_VERSION &&
    shopifyDevExists
  ) {
    const adminExtSource = path.join(
      shopifyDevDBPath,
      'admin_extensions',
      EXTENSIONS_API_VERSION,
    );
    const adminExtDest = path.join(
      shopifyDevDBPath,
      'admin_extensions',
      SHOPIFY_DEV_EXTENSIONS_FOLDER,
    );
    if (existsSync(adminExtSource)) {
      if (existsSync(adminExtDest)) {
        await fs.rm(adminExtDest, {recursive: true});
      }
      await fs.rename(adminExtSource, adminExtDest);
      console.log(
        `  Renamed admin_extensions/${EXTENSIONS_API_VERSION} → admin_extensions/${SHOPIFY_DEV_EXTENSIONS_FOLDER} in shopify-dev`,
      );
    }
  }

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'areas/platforms/shopify-dev/content/assets/images/templated-apis-screenshots/admin',
    ),
    {recursive: true},
  );

  await fs.rm(tempComponentDefs);
} catch (error) {
  console.error(error);
  if (error.stdout) {
    console.log(error.stdout.toString());
  }
  if (error.stderr) {
    console.log(error.stderr.toString());
  }
  process.exit(1);
}
