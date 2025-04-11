/* eslint-disable no-undef, no-console */
import childProcess from 'child_process';
import fs from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const EXTENSIONS_API_VERSION = process.argv[2] || 'unstable';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, '../../..');
const docsRelativePath = 'docs/surfaces/admin';
const docsGeneratedRelativePath = 'docs/surfaces/admin/generated';
const srcRelativePath = 'src/surfaces/admin';
const docsPath = path.join(rootPath, docsRelativePath);
const srcPath = path.join(rootPath, srcRelativePath);
const generatedDocsPath = path.join(docsPath, 'generated');
const shopifyDevPath = path.join(rootPath, '../../../shopify-dev');
const shopifyDevDBPath = path.join(
  shopifyDevPath,
  'db/data/docs/templated_apis',
);

const shopifyDevExists = existsSync(shopifyDevPath);

const generatedDocsDataFile = 'generated_docs_data.json';
const generatedStaticPagesFile = 'generated_static_pages.json';

const componentDefs = path.join(srcPath, 'components.d.ts');
const tempComponentDefs = path.join(srcPath, 'components.ts');

const replaceFileContent = async (filePaths, searchValue, replaceValue) => {
  const files = Array.isArray(filePaths) ? filePaths : [filePaths];
  for (const filePath of files) {
    const content = await fs.readFile(filePath, 'utf8');
    // @ts-ignore -- TS should know this is a string but it doesn't
    const replacedContent = content.replaceAll(searchValue, replaceValue);
    await fs.writeFile(filePath, replacedContent);
  }
};

const decodeHTML = (str) => {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
};

const htmlWrapper = (htmlString, layout) => {
  return `<!DOCTYPE html><html><head><style>html, body {height:100%} body {box-sizing: border-box; margin: 0; padding:0.5rem; ${layout}}</style><script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script></head><body>${decodeHTML(
    htmlString,
  )}</body></html>`;
};

const templates = {
  default: (htmlString) =>
    htmlWrapper(htmlString, 'display: grid; place-items: center; gap: 0.5rem;'),
  inline: (htmlString) =>
    htmlWrapper(
      htmlString,
      'display: flex; justify-content: center; align-items: center; gap: 0.5rem;',
    ),
  section: (htmlString) =>
    htmlWrapper(
      `<s-section padding="none">${htmlString}</s-section>`,
      'display: grid; place-items: center; background: #F1F1F1',
    ),
  page: (htmlString) =>
    htmlWrapper(
      htmlString,
      'display: grid; place-items: center; background: #F1F1F1;',
    ),
  none: (htmlString) => htmlWrapper(htmlString, 'padding: 0'),
};

const transformJson = async (filePath, isExtensions) => {
  let jsonData = JSON.parse((await fs.readFile(filePath, 'utf8')).toString());

  jsonData.forEach((entry) => {
    // Temporary to ensure that isOptional is added to all members
    if (entry.definitions && entry.isVisualComponent) {
      entry.definitions.forEach((definition) => {
        if (definition.typeDefinitions) {
          Object.values(definition.typeDefinitions).forEach((typeDef) => {
            if (typeDef.members && Array.isArray(typeDef.members)) {
              typeDef.members
                .sort((first, second) => first.name.localeCompare(second.name))
                .forEach((member) => {
                  // eslint-disable-next-line no-prototype-builtins
                  if (member.hasOwnProperty('isOptional')) return;
                  member.isOptional = true;
                });
            }
          });
        }
      });
    }

    if (entry.defaultExample?.codeblock?.tabs) {
      const newTabs = [];
      entry.defaultExample.codeblock.tabs.forEach((tab) => {
        if (tab.language !== 'preview') {
          newTabs.push(tab);
          return;
        }

        if (tab.layout && !(tab.layout in templates)) {
          console.warn(
            `${entry.name} has a layout of ${tab.layout} which is not a valid template.`,
          );
        }

        const previewHTML =
          tab.layout && tab.layout in templates
            ? templates[tab.layout](tab.code)
            : templates.default(tab.code);

        newTabs.push(
          {code: tab.code, language: 'html'},
          {code: previewHTML, language: 'preview'},
        );
      });

      entry.defaultExample.codeblock.tabs = newTabs;
    }
  });

  // Merge the App Bridge docs with the Shopify Dev docs
  if (!isExtensions && shopifyDevExists) {
    const shopifyDevDocs = path.join(
      shopifyDevDBPath,
      'app_bridge/generated_docs_data.json',
    );
    const shopifyDevDocsContent = await fs.readFile(shopifyDevDocs, 'utf8');
    const shopifyDevDocsDocsParsed = JSON.parse(
      shopifyDevDocsContent.toString(),
    );

    const filteredDocs = shopifyDevDocsDocsParsed.filter(
      (entry) => entry.category !== 'Polaris web components',
    );

    // Combine arrays with shopify dev docs first, followed by new data
    jsonData = [...filteredDocs, ...jsonData];
  }

  await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
};

const generateFiles = async (tsconfig, outputDir, isExtensions = true) => {
  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfig} --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --input ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
  ];

  if (isExtensions) {
    scripts.push(
      `yarn tsc ${docsRelativePath}/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS`,
      `yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${outputDir}`,
    );
  }

  scripts.forEach((script) => childProcess.execSync(script, {stdio: 'pipe'}));

  const srcFiles = await fs.readdir(rootPath, {recursive: true});
  const builtFiles = srcFiles.filter((file) => file.endsWith('.ts'));
  await Promise.all(
    builtFiles.map((file) => {
      const jsFilePath = path.join(rootPath, file.replace('.ts', '.js'));
      return existsSync(jsFilePath) ? fs.rm(jsFilePath) : Promise.resolve();
    }),
  );

  const generatedFiles = [path.join(outputDir, generatedDocsDataFile)];
  if (isExtensions) {
    generatedFiles.push(path.join(outputDir, generatedStaticPagesFile));
  }

  // Make sure https://shopify.dev URLs are relative so they work in Spin.
  // See https://github.com/Shopify/generate-docs/issues/181
  await replaceFileContent(generatedFiles, 'https://shopify.dev', '');

  // @ts-ignore
  await transformJson(
    path.join(outputDir, generatedDocsDataFile),
    isExtensions,
  );
};

const copyGeneratedToShopifyDev = async () => {
  if (!shopifyDevExists) {
    console.log(
      `Not copying docs to shopify-dev because it was not found at ${shopifyDevPath}.`,
    );
    process.exit();
  }

  await fs.cp(generatedDocsPath, shopifyDevDBPath, {recursive: true});
};

const generateExtensionsDocs = async () => {
  console.log(
    `Building Admin UI Extensions docs for ${EXTENSIONS_API_VERSION} version`,
  );

  if (EXTENSIONS_API_VERSION === 'unstable') {
    console.log(
      "You can add a calver version argument (e.g. 'yarn docs:admin 2023-07') to generate the docs for a stable version.",
    );
  }

  const extensionsOutputDir = `${docsGeneratedRelativePath}/admin_extensions/${EXTENSIONS_API_VERSION}`;

  await generateFiles('tsconfig.docs.json', extensionsOutputDir);

  // Replace 'unstable' with the exact API version in relative doc links
  await replaceFileContent(
    path.join(extensionsOutputDir, generatedDocsDataFile),
    '/docs/api/admin-extensions/unstable/',
    `/docs/api/admin-extensions/${EXTENSIONS_API_VERSION}`,
  );

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'app/assets/images/templated-apis-screenshots/admin-extensions',
      EXTENSIONS_API_VERSION,
    ),
    {recursive: true},
  );
};

const generateAppBridgeDocs = async () => {
  console.log('Building App Bridge docs');

  await generateFiles(
    'tsconfig.ab.docs.json',
    `${docsGeneratedRelativePath}/app_bridge`,
    false,
  );
};

try {
  if (existsSync(generatedDocsPath)) {
    await fs.rm(generatedDocsPath, {recursive: true});
  }
  await fs.copyFile(componentDefs, tempComponentDefs);
  await replaceFileContent(
    tempComponentDefs,
    /typeof globalThis\.HTMLElement/g,
    'any',
  );
  await generateExtensionsDocs();
  await generateAppBridgeDocs();
  await copyGeneratedToShopifyDev();

  await fs.rm(tempComponentDefs);
} catch (error) {
  console.error(error);
  console.log(error.stdout.toString());
  console.log(error.stderr.toString());
  process.exit(1);
}
