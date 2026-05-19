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
  resolveShopifyDevPath,
} from '../build-doc-shared.mjs';

const EXTENSIONS_API_VERSION = process.argv[2];
const SHOPIFY_DEV_EXTENSIONS_FOLDER = process.argv[3] ?? null;

if (!EXTENSIONS_API_VERSION) {
  console.error('Error: API_VERSION is required.');
  console.error('Usage: node build-docs.mjs <API_VERSION>');
  console.error('Example: node build-docs.mjs 2024-01');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/point-of-sale';
const docsGeneratedRelativePath = 'docs/surfaces/point-of-sale/generated';
const srcRelativePath = 'src/surfaces/point-of-sale';
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const generatedDocsPath = path.join(docsPath, 'generated');
const shopifyDevPath = await resolveShopifyDevPath(rootPath);
const shopifyDevDBPath = path.join(
  shopifyDevPath,
  'areas/platforms/shopify-dev/db/data/docs/templated_apis',
);

const generatedDocsDataV2File = 'generated_docs_data_v2.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const cleanup = async () => {
  try {
    if (existsSync(tempComponentDefs)) {
      await fs.rm(tempComponentDefs);
    }
  } catch (cleanupError) {
    console.warn(
      'Warning: Failed to clean up temporary files:',
      cleanupError.message,
    );
  }
};

// Set up cleanup handlers for various exit scenarios
process.on('exit', () => {
  // Note: Only synchronous operations work in 'exit' handler
  try {
    if (existsSync(tempComponentDefs)) {
      require('fs').unlinkSync(tempComponentDefs);
    }
  } catch (error) {
    // Ignore cleanup errors on exit
  }
});

process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT, cleaning up...');
  await cleanup();
  process.exit(130);
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, cleaning up...');
  await cleanup();
  process.exit(143);
});

process.on('uncaughtException', async (error) => {
  console.error('Uncaught Exception:', error);
  await cleanup();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  await cleanup();
  process.exit(1);
});

const generateExtensionsDocs = async () => {
  console.log(
    `Building Point of Sale UI Extensions docs for ${EXTENSIONS_API_VERSION} version`,
  );

  if (SHOPIFY_DEV_EXTENSIONS_FOLDER) {
    console.log(
      `Shopify-dev pos_ui_extensions folder will be: ${SHOPIFY_DEV_EXTENSIONS_FOLDER}`,
    );
  }

  const outputDir = `${docsGeneratedRelativePath}/pos_ui_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn generate-docs --overridePath ./${docsRelativePath}/typeOverride.json --input ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataV2File,
  });

  // Update API version in relative doc links
  await replaceFileContent({
    filePaths: path.join(outputDir, generatedDocsDataV2File),
    searchValue: '/docs/api/pos-ui-extensions/[^/]*/',
    replaceValue: `/docs/api/pos-ui-extensions/${EXTENSIONS_API_VERSION}/`,
  });

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'areas/platforms/shopify-dev/content/assets/images/templated-apis-screenshots/pos-ui-extensions',
      EXTENSIONS_API_VERSION,
    ),
    {recursive: true},
  );

  // Generate targets.json (extension targets + APIs + components mapping)
  const targetsScriptPath = path.join(__dirname, 'build-docs-targets-json.mjs');
  childProcess.execSync(`node ${targetsScriptPath}`, {
    stdio: 'inherit',
    cwd: rootPath,
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

  const posOutputDir = path.join(
    rootPath,
    docsGeneratedRelativePath,
    'pos_ui_extensions',
    EXTENSIONS_API_VERSION,
  );
  const targetsJsonPath = path.join(posOutputDir, 'targets.json');
  const generatedDocsDataV2Path = path.join(
    posOutputDir,
    generatedDocsDataV2File,
  );
  console.log('\nGenerated docs at:');
  console.log('  POS UI extensions:', posOutputDir);
  console.log('  targets.json:', targetsJsonPath);
  console.log('  generated_docs_data_v2.json:', generatedDocsDataV2Path);

  await copyGeneratedToShopifyDev({
    generatedDocsPath,
    shopifyDevPath,
    shopifyDevDBPath,
  });

  if (
    SHOPIFY_DEV_EXTENSIONS_FOLDER &&
    SHOPIFY_DEV_EXTENSIONS_FOLDER !== EXTENSIONS_API_VERSION
  ) {
    const posSource = path.join(
      shopifyDevDBPath,
      'pos_ui_extensions',
      EXTENSIONS_API_VERSION,
    );
    const posDestination = path.join(
      shopifyDevDBPath,
      'pos_ui_extensions',
      SHOPIFY_DEV_EXTENSIONS_FOLDER,
    );

    if (existsSync(posSource)) {
      if (existsSync(posDestination)) {
        await fs.rm(posDestination, {recursive: true});
      }

      await fs.rename(posSource, posDestination);
      console.log(
        `  Renamed pos_ui_extensions/${EXTENSIONS_API_VERSION} → pos_ui_extensions/${SHOPIFY_DEV_EXTENSIONS_FOLDER} in shopify-dev`,
      );
    }
  }

  await cleanup();
} catch (error) {
  console.error(error);
  console.log(error.stdout?.toString() || '');
  console.log(error.stderr?.toString() || '');
  await cleanup();
  process.exit(1);
}
