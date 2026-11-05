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

// These names appear in the public type tables. Keep this scoped to the
// authenticated-account reference chain; other docs-only types are intentional.
function assertAuthenticatedAccountPublicNames(docsData) {
  function getDeclaration(typeName) {
    const declarations = Object.values(docsData[typeName] ?? {});
    if (declarations.length !== 1) {
      throw new Error(
        `Authenticated Account docs expected one ${typeName} declaration, found ${declarations.length}.`,
      );
    }
    return declarations[0];
  }

  function getMember(declaration, memberName) {
    const members = Array.isArray(declaration.members)
      ? declaration.members.filter((member) => member.name === memberName)
      : [];
    if (members.length !== 1) {
      throw new Error(
        `Authenticated Account docs expected one ${declaration.name}.${memberName} member, found ${members.length}.`,
      );
    }
    return members[0];
  }

  function getPublicDeclaration(referenceName, expectedName) {
    if (referenceName !== expectedName) {
      throw new Error(
        `Authenticated Account docs expected public type ${expectedName}, found ${referenceName}.`,
      );
    }
    const declaration = getDeclaration(referenceName);
    if (declaration.name !== expectedName) {
      throw new Error(
        `Authenticated Account docs expected table name ${expectedName}, found ${declaration.name}.`,
      );
    }
    return declaration;
  }

  const facade = getDeclaration('Docs_Standard_AuthenticatedAccountApi');
  const accountReference = getMember(facade, 'authenticatedAccount').value;
  const account = getPublicDeclaration(
    accountReference,
    'AuthenticatedAccount',
  );
  const customerReference = getMember(account, 'customer').value;
  const customerMatch =
    typeof customerReference === 'string'
      ? customerReference
          .replace(/\s+/g, '')
          .match(/^SubscribableSignalLike<(\w+)\|undefined>$/)
      : null;

  if (!customerMatch) {
    throw new Error(
      `Authenticated Account docs expected an optional customer signal, found ${customerReference}.`,
    );
  }
  getPublicDeclaration(customerMatch[1], 'AuthenticatedAccountCustomer');
}

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
    `yarn generate-docs --strictInput --overridePath ${overridePath} --input ./${srcRelativePath} ./${checkoutComponentsRelativePath} --output ./${outputDir}`,
    {maxBuffer},
  );

  const generatedFiles = [path.join(outputDir, generatedDocsDataV2File)];

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

  assertAuthenticatedAccountPublicNames(
    JSON.parse(await fs.readFile(generatedFiles[0], 'utf8')),
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
