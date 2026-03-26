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

const EXTENSIONS_API_VERSION = process.argv[2];

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
const relativeShopifyDevPath = path.join(rootPath, '../../../shopify-dev');
const worldShopifyDevPath = path.join(
  process.env.HOME || '',
  'src/github.com/Shopify/shopify-dev',
);
const shopifyDevPath = existsSync(relativeShopifyDevPath)
  ? relativeShopifyDevPath
  : worldShopifyDevPath;
const shopifyDevDBPath = path.join(
  shopifyDevPath,
  'areas/platforms/shopify-dev/db/data/docs/templated_apis',
);

const generatedDocsDataFile = 'generated_docs_data_v2.json';
const generatedStaticPagesFile = 'generated_static_pages.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const tsconfig = 'tsconfig.docs.json';

const transformJson = async (filePath) => {
  let jsonData = JSON.parse((await fs.readFile(filePath, 'utf8')).toString());

  if (Array.isArray(jsonData)) {
    jsonData = jsonData.filter(Boolean);
  }
  await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
};

const cleanup = async () => {
  try {
    // Clean up temporary component definitions file
    if (existsSync(tempComponentDefs)) {
      await fs.rm(tempComponentDefs);
    }

    // Clean up any remaining .js files from compilation
    const srcFiles = await fs.readdir(rootPath, {recursive: true});
    const builtFiles = srcFiles.filter((file) => file.endsWith('.doc.js'));
    await Promise.all(
      builtFiles.map((file) => {
        const jsFilePath = path.join(rootPath, file);
        return existsSync(jsFilePath) ? fs.rm(jsFilePath) : Promise.resolve();
      }),
    );
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
  } catch (cleanupError) {
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

  const outputDir = `${docsGeneratedRelativePath}/pos_ui_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfig} --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --overridePath ./${docsRelativePath}/typeOverride.json --input ./${docsRelativePath}/reference ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
    `yarn tsc ${docsRelativePath}/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    generatedStaticPagesFile,
    transformJson,
  });

  // Update API version in relative doc links
  await replaceFileContent({
    filePaths: path.join(outputDir, generatedDocsDataFile),
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

  // Generate targets.json (script logs output path)
  console.log('Generating targets.json...');
  try {
    const {execSync} = await import('child_process');
    execSync(
      `node ${path.join(
        docsPath,
        'build-docs-targets-json.mjs',
      )} ${EXTENSIONS_API_VERSION}`,
      {
        stdio: 'inherit',
        cwd: rootPath,
      },
    );
  } catch (targetsError) {
    console.warn(
      'Warning: Failed to generate targets.json:',
      targetsError.message,
    );
  }

  await copyGeneratedToShopifyDev({
    generatedDocsPath,
    shopifyDevPath,
    shopifyDevDBPath,
  });

  await cleanup();
} catch (error) {
  console.error(error);
  console.log(error.stdout?.toString() || '');
  console.log(error.stderr?.toString() || '');
  await cleanup();
  process.exit(1);
}
