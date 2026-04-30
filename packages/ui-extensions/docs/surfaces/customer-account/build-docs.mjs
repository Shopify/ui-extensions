/* eslint-disable no-undef, no-console */
import {exec as execCb, execSync} from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {promisify} from 'util';

import {
  copyGeneratedToShopifyDev,
  replaceFileContent,
  resolveShopifyDevPath,
} from '../build-doc-shared.mjs';

const execAsync = promisify(execCb);

const EXTENSIONS_API_VERSION = process.argv[2] || 'unstable';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/customer-account';
const docsGeneratedRelativePath = 'docs/surfaces/customer-account/generated';
const srcRelativePath = 'src/surfaces/customer-account';
const checkoutSrcRelativePath = 'src/surfaces/checkout';
const checkoutComponentsRelativePath = `${checkoutSrcRelativePath}/components`;
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const checkoutSrcPath = path.join(rootPath, checkoutSrcRelativePath);
const checkoutComponentsDir = path.join(checkoutSrcPath, 'components');
const generatedDocsPath = path.join(docsPath, 'generated');
const shopifyDevPath = await resolveShopifyDevPath(rootPath);
const shopifyDevDBPath = path.join(
  shopifyDevPath,
  'areas/platforms/shopify-dev/db/data/docs/templated_apis',
);

const generatedDocsDataFile = 'generated_docs_data.json';
const generatedDocsDataV2File = 'generated_docs_data_v2.json';
const generatedStaticPagesFile = 'generated_static_pages.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const tsconfig = 'tsconfig.docs.json';

const maxBuffer = 50 * 1024 * 1024;

const EXCLUDED_CHECKOUT_TYPES = new Set([
  'components-shared.d.ts',
  'ConsentCheckbox.d.ts',
  'ConsentPhoneField.d.ts',
]);

const copyCheckoutTypesToTemp = async () => {
  const files = await fs.readdir(checkoutComponentsDir);
  return Promise.all(
    files
      .filter(
        (file) => file.endsWith('.d.ts') && !EXCLUDED_CHECKOUT_TYPES.has(file),
      )
      .map(async (file) => {
        const srcFile = path.join(checkoutComponentsDir, file);
        const tempFile = path.join(
          checkoutComponentsDir,
          file.replace('.d.ts', '.ts'),
        );
        await fs.copyFile(srcFile, tempFile);
        return tempFile;
      }),
  );
};

const cleanupTempFiles = async (tempFiles) => {
  await Promise.all(
    tempFiles.filter((file) => existsSync(file)).map((file) => fs.rm(file)),
  );
};

const cleanupGeneratedJsFiles = async (directories) => {
  await Promise.all(
    directories.map(async (dir) => {
      if (!existsSync(dir)) return;
      const files = await fs.readdir(dir, {recursive: true});
      await Promise.all(
        files
          .filter((file) => file.endsWith('.js'))
          .map((file) => {
            const jsPath = path.join(dir, file);
            const tsPath = path.join(dir, file.replace(/\.js$/, '.ts'));
            return existsSync(tsPath) ? fs.rm(jsPath) : Promise.resolve();
          }),
      );
    }),
  );
};

// Customer account does not surface ConsentCheckbox / ConsentPhoneField, but
// they leak in via checkout's bundled component types and the AnyComponent
// unions in checkout's shared.ts. Strip both top-level entries and string
// literals from union values.
const CONSENT_TYPE_NAME = /^Consent(Checkbox|PhoneField)/;
const stripConsentComponents = (mergedData) => {
  for (const key of Object.keys(mergedData)) {
    if (CONSENT_TYPE_NAME.test(key)) {
      delete mergedData[key];
      continue;
    }
    for (const fp of Object.keys(mergedData[key])) {
      const td = mergedData[key][fp];
      if (typeof td.value !== 'string' || !td.value.includes('Consent')) {
        continue;
      }
      td.value = td.value
        .replace(/\s*\|\s*'(ConsentCheckbox|ConsentPhoneField)'/g, '')
        .replace(/^'(ConsentCheckbox|ConsentPhoneField)'\s*\|\s*/, '');
    }
  }
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
  const tempRefOutputDir = `${outputDir}/_temp_ref`;
  const tempCompOutputDir = `${outputDir}/_temp_comp`;

  await fs.mkdir(outputDir, {recursive: true});
  await fs.mkdir(tempRefOutputDir, {recursive: true});
  await fs.mkdir(tempCompOutputDir, {recursive: true});

  // Single tsc step — tsconfig.docs.json already covers all .doc.ts files
  // (reference, staticPages, categories, and component docs)
  console.log('Compiling TypeScript...');
  execSync(
    `yarn tsc --project ${docsRelativePath}/${tsconfig} --moduleResolution node --target esNext --module CommonJS --skipLibCheck`,
    {stdio: 'pipe'},
  );

  // Split generate-docs into independent parallel commands.
  // Internally, generate-docs creates a TypeScript program for every
  // --typesInput directory × every --input directory. Splitting reference
  // docs from component docs avoids redundant type parsing:
  //   - Reference docs (APIs/targets) only need customer-account types
  //   - Component docs only need checkout component types
  //     (customer-account types are included automatically as the base path)
  console.log('Generating docs in parallel...');
  const overridePath = `./${docsRelativePath}/typeOverride.json`;
  await Promise.all([
    execAsync(
      `yarn generate-docs --overridePath ${overridePath} --input ./${docsRelativePath}/reference --typesInput ./${srcRelativePath} --output ./${tempRefOutputDir}`,
      {maxBuffer},
    ),
    execAsync(
      `yarn generate-docs --overridePath ${overridePath} --input ./${srcRelativePath} --typesInput ./${checkoutComponentsRelativePath} --output ./${tempCompOutputDir}`,
      {maxBuffer},
    ),
    execAsync(
      `yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${outputDir}`,
      {maxBuffer},
    ),
    execAsync(
      `yarn generate-docs --isCategoryPage --input ./${docsRelativePath}/categories --output ./${outputDir}`,
      {maxBuffer},
    ),
  ]);

  // Merge the two generated_docs_data_v2.json files (v2 dict format)
  const [refData, compData] = await Promise.all([
    fs
      .readFile(path.join(tempRefOutputDir, generatedDocsDataV2File), 'utf8')
      .then(JSON.parse),
    fs
      .readFile(path.join(tempCompOutputDir, generatedDocsDataV2File), 'utf8')
      .then(JSON.parse),
  ]);
  const mergedData = {...refData, ...compData};
  stripConsentComponents(mergedData);
  const mergedDataJson = JSON.stringify(mergedData, null, 2);
  await fs.writeFile(
    path.join(outputDir, generatedDocsDataV2File),
    mergedDataJson,
  );

  // Clean up temp directories
  await Promise.all([
    fs.rm(tempRefOutputDir, {recursive: true}),
    fs.rm(tempCompOutputDir, {recursive: true}),
  ]);

  // Clean up .js files only in directories where tsc output lands
  await cleanupGeneratedJsFiles([
    path.join(rootPath, docsRelativePath),
    path.join(rootPath, srcRelativePath),
    path.join(rootPath, 'src/docs/shared'),
  ]);

  const generatedFiles = [path.join(outputDir, generatedDocsDataV2File)];
  if (generatedStaticPagesFile) {
    generatedFiles.push(path.join(outputDir, generatedStaticPagesFile));
  }

  // Make sure https://shopify.dev URLs are relative so they work in Spin
  await replaceFileContent({
    filePaths: generatedFiles,
    searchValue: 'https://shopify.dev',
    replaceValue: '',
  });

  // Replace 'unstable' with the exact API version in relative doc links
  await replaceFileContent({
    filePaths: path.join(outputDir, generatedDocsDataV2File),
    searchValue: '/docs/api//unstable/',
    replaceValue: `/docs/api/customer-account-ui-extensions/${EXTENSIONS_API_VERSION}`,
  });

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'areas/platforms/shopify-dev/content/assets/images/templated-apis-screenshots/customer-account-ui-extensions',
      EXTENSIONS_API_VERSION,
    ),
    {recursive: true},
  );
};

let checkoutTempFiles = [];
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

  console.log('Copying checkout .d.ts files to temporary .ts files...');
  checkoutTempFiles = await copyCheckoutTypesToTemp();

  await generateExtensionsDocs();

  // Generate targets.json
  console.log('Generating targets.json...');
  try {
    execSync(`node ${path.join(docsPath, 'build-docs-targets-json.mjs')} ${EXTENSIONS_API_VERSION}`, {
      stdio: 'inherit',
      cwd: rootPath,
    });
    console.log('✅ Generated targets.json');
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

  await fs.rm(tempComponentDefs);
  await cleanupTempFiles(checkoutTempFiles);
} catch (error) {
  await cleanupTempFiles(checkoutTempFiles);
  if (existsSync(tempComponentDefs)) {
    await fs.rm(tempComponentDefs);
  }
  console.error(error);
  console.log(error.stdout?.toString?.() ?? '');
  console.log(error.stderr?.toString?.() ?? '');
  process.exit(1);
}
