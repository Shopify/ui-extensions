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

const generatedDocsDataV2File = 'generated_docs_data_v2.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const maxBuffer = 50 * 1024 * 1024;

const copyCheckoutTypesToTemp = async () => {
  const files = await fs.readdir(checkoutComponentsDir);
  return Promise.all(
    files
      .filter(
        (file) => file.endsWith('.d.ts') && file !== 'components-shared.d.ts',
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

const customerAccountMailingAddressFields = [
  {
    filePath: 'src/surfaces/customer-account/api/shared.ts',
    syntaxKind: 'PropertySignature',
    name: 'extendedFields',
    value: 'AddressExtendedFields',
    description:
      'Structured address components for countries and regions that collect them. ' +
      "The value is `undefined` when structured address data isn't available " +
      'for the order address. Individual fields are `null` when Shopify has ' +
      "a structured address record but a specific component wasn't provided.",
    isOptional: true,
  },
  {
    filePath: 'src/surfaces/customer-account/api/shared.ts',
    syntaxKind: 'PropertySignature',
    name: 'addressCode',
    value: 'string | null',
    description:
      'A country-specific address code, such as a short code or postal ' +
      "delivery code. The value is `null` when the order address doesn't " +
      'have an address code.',
    isOptional: true,
    examples: [
      {
        title: 'Example',
        description: '',
        tabs: [{code: "'01001-000'", title: 'Example'}],
      },
    ],
  },
];

const customerAccountMailingAddressValue = `  /**
   * Structured address components for countries and regions that collect them.
   * The value is \`undefined\` when structured address data isn't available for
   * the order address. Individual fields are \`null\` when Shopify has a
   * structured address record but a specific component wasn't provided.
   */
  extendedFields?: AddressExtendedFields;

  /**
   * A country-specific address code, such as a short code or postal delivery
   * code. The value is \`null\` when the order address doesn't have an address
   * code.
   *
   * @example '01001-000'
   */
  addressCode?: string | null;

`;

const addCustomerAccountMailingAddressDocs = async (generatedDocsV2Path) => {
  const content = await fs.readFile(generatedDocsV2Path, 'utf8');
  const generatedDocs = JSON.parse(content);
  const mailingAddressDocs = generatedDocs.MailingAddress;

  if (!mailingAddressDocs) return;

  const [sourcePath] = Object.keys(mailingAddressDocs);
  const docs = mailingAddressDocs[sourcePath];

  if (!docs?.members || !docs?.value) return;

  const existingMemberNames = new Set(
    docs.members.map((member) => member.name),
  );

  const missingFields = customerAccountMailingAddressFields.filter(
    (field) => !existingMemberNames.has(field.name),
  );

  if (missingFields.length > 0) {
    const address2Index = docs.members.findIndex(
      (member) => member.name === 'address2',
    );
    const insertIndex =
      address2Index === -1 ? docs.members.length : address2Index + 1;
    docs.members.splice(insertIndex, 0, ...missingFields);
  }

  if (!docs.value.includes('extendedFields?: AddressExtendedFields;')) {
    docs.value = docs.value.replace(
      '  /**\n   * The city, town, or village of the address.',
      `${customerAccountMailingAddressValue}  /**\n   * The city, town, or village of the address.`,
    );
  }

  await fs.writeFile(
    generatedDocsV2Path,
    `${JSON.stringify(generatedDocs, null, 2)}\n`,
  );
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

  await fs.mkdir(outputDir, {recursive: true});

  const overridePath = `./${docsRelativePath}/typeOverride.json`;
  await execAsync(
    `yarn generate-docs --overridePath ${overridePath} --input ./${srcRelativePath} ./${checkoutComponentsRelativePath} --output ./${outputDir}`,
    {maxBuffer},
  );

  const generatedFiles = [path.join(outputDir, generatedDocsDataV2File)];

  // Make sure https://shopify.dev URLs are relative so they work in Spin
  await replaceFileContent({
    filePaths: generatedFiles,
    searchValue: 'https://shopify.dev',
    replaceValue: '',
  });

  const generatedDocsV2Path = path.join(outputDir, generatedDocsDataV2File);

  // Replace 'unstable' with the exact API version in relative doc links
  await replaceFileContent({
    filePaths: generatedDocsV2Path,
    searchValue: '/docs/api//unstable/',
    replaceValue: `/docs/api/customer-account-ui-extensions/${EXTENSIONS_API_VERSION}`,
  });

  await addCustomerAccountMailingAddressDocs(generatedDocsV2Path);
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
