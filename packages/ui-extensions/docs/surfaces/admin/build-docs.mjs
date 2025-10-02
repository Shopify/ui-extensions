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

const tsconfigExtensions = 'tsconfig.ext.docs.json';
const tsconfigAppBridge = 'tsconfig.ab.docs.json';

const decodeHTML = (str) => {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
};

const composeStyles = (...styles) => {
  return styles
    .filter(Boolean)
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .join(' ');
};

// Don't allow all CSS properties to be used in the customStyles property
// DO NOT ADD MORE PROPERTIES TO THIS LIST
const allowedProperties = ['minHeight', 'minBlockSize'];

const stylesToString = (styles) => {
  if (!styles) return '';
  return Object.entries(styles)
    .filter(
      ([property, value]) =>
        allowedProperties.includes(property) &&
        value !== undefined &&
        value !== null,
    )
    .map(([property, value]) => {
      const kebabProperty = property.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`,
      );
      return `${kebabProperty}: ${value}`;
    })
    .join('; ');
};

const htmlWrapper = (htmlString, layoutStyles = '', customStyles = '') => {
  const baseStyles = 'box-sizing: border-box; margin: 0; padding: 0.5rem;';
  const composedStyles = composeStyles(baseStyles, layoutStyles, customStyles);

  return `<!DOCTYPE html><html><head><style>html, body {height:100%} body {${composedStyles}}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body>${decodeHTML(
    htmlString,
  )}</body></html>`;
};

const jsxWrapper = (
  jsxString,
  bodyContent,
  layoutStyles = '',
  customStyles = '',
) => {
  const baseStyles = 'box-sizing: border-box; margin: 0; padding: 0.5rem;';
  const composedStyles = composeStyles(baseStyles, layoutStyles, customStyles);

  // Auto-wrap JSX if it doesn't already contain a return statement
  // This allows both simple JSX expressions and complete function bodies with hooks
  let jsxStringProcessed = jsxString;
  if (!/\breturn\b/.test(jsxString)) {
    jsxStringProcessed = `return (${jsxString})`;
  }

  return `<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {${composedStyles}} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <script src="https://unpkg.com/preact@10/dist/preact.umd.js"></script> <script src="https://unpkg.com/preact@10/hooks/dist/hooks.umd.js"></script> <script type="text/babel" data-type="module" data-presets="react"> /** @jsx preact.h */ const {render, h, Fragment} = preact; const {useState} = preactHooks; const React = {Fragment}; const App = () => { ${decodeHTML(
    jsxStringProcessed,
  )} }; render(<App />, document.getElementById('wrapper-element') || document.body);
    </script>
  </head>
  <body>${bodyContent || ''}</body>
</html>
`;
};

const createTemplate = ({
  layoutStyles,
  wrapperElement = null,
  wrapperAttributes = '',
}) => {
  return (htmlString, customStyles, jsx = false) => {
    if (jsx) {
      const bodyContent = wrapperElement
        ? `<${wrapperElement}${
            wrapperAttributes ? ` ${wrapperAttributes}` : ''
          } id="wrapper-element"></${wrapperElement}>`
        : '';

      return jsxWrapper(htmlString, bodyContent, layoutStyles, customStyles);
    } else {
      const wrappedHtml = wrapperElement
        ? `<${wrapperElement}${
            wrapperAttributes ? ` ${wrapperAttributes}` : ''
          } id="wrapper-element">${htmlString}</${wrapperElement}>`
        : `<div id="wrapper-element">${htmlString}</div>`;

      const customStylesString = stylesToString(customStyles);

      return htmlWrapper(wrappedHtml, layoutStyles, customStylesString);
    }
  };
};

const templates = {
  default: createTemplate({
    layoutStyles: 'display: grid; place-items: center; gap: 0.5rem;',
  }),
  alignStart: createTemplate({
    layoutStyles: 'display: grid; place-items: start center; gap: 0.5rem;',
    wrapperElement: 'div',
  }),
  wrapped: createTemplate({
    layoutStyles: 'display: grid; place-items: center; gap: 0.5rem;',
    wrapperElement: 'div',
  }),
  inline: createTemplate({
    layoutStyles:
      'display: flex; justify-content: center; align-items: center; gap: 0.5rem;',
  }),
  section: createTemplate({
    layoutStyles: 'display: grid; place-items: center; background: #F1F1F1',
    wrapperElement: 's-section',
    wrapperAttributes: 'padding="none"',
  }),
  page: createTemplate({
    layoutStyles: 'display: grid; place-items: center; background: #F1F1F1;',
  }),
  none: createTemplate({
    layoutStyles: 'padding: 0;',
  }),
  padding: createTemplate({
    layoutStyles: 'padding: 0;',
    wrapperElement: 's-box',
    wrapperAttributes: 'padding="base"',
  }),
  example: createTemplate({
    layoutStyles: 'display: grid; place-items: center; gap: 0.5rem;',
    wrapperElement: 's-box',
    wrapperAttributes: 'padding="base"',
  }),
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
        if (tab.language !== 'preview' && tab.language !== 'preview-jsx') {
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
            ? templates[tab.layout](
                tab.code,
                tab.customStyles,
                tab.language === 'preview-jsx',
              )
            : templates.default(
                tab.code,
                tab.customStyles,
                tab.language === 'preview-jsx',
              );

        newTabs.push(
          {
            code: tab.code,
            language: tab.language === 'preview-jsx' ? 'jsx' : 'html',
            editable:
              tab.language === 'preview-jsx' ? tab.editable || false : false,
          },
          {code: previewHTML, language: 'preview'},
        );
      });

      entry.defaultExample.codeblock.tabs = newTabs;
    }

    if (entry.examples && entry.examples.exampleGroups) {
      entry.examples.exampleGroups.forEach((exampleGroup) => {
        exampleGroup.examples.forEach((example) => {
          if (!example.codeblock?.tabs) {
            return;
          }
          const newTabs = [];

          example.codeblock.tabs.forEach((tab) => {
            if (tab.language === 'preview' || tab.language === 'preview-jsx') {
              const previewHTML =
                tab.layout && tab.layout in templates
                  ? templates[tab.layout](
                      tab.code,
                      tab.customStyles,
                      tab.language === 'preview-jsx',
                    )
                  : templates.example(
                      tab.code,
                      tab.customStyles,
                      tab.language === 'preview-jsx',
                    );

              newTabs.push({code: previewHTML, language: 'preview'});
            } else {
              newTabs.push({
                code: tab.code,
                language: tab.language,
                editable:
                  tab.language === 'preview-jsx'
                    ? tab.editable || false
                    : false,
              });
            }
          });

          example.codeblock.tabs = newTabs;
        });
      });
    }
  });

  // Merge the App Bridge docs with the Shopify Dev docs
  if (!isExtensions && shopifyDevExists) {
    const shopifyDevDocs = path.join(
      shopifyDevDBPath,
      'app_home/generated_docs_data.json',
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

const generateExtensionsDocs = async () => {
  console.log(
    `Building Admin UI Extensions docs for ${EXTENSIONS_API_VERSION} version`,
  );

  if (EXTENSIONS_API_VERSION === 'unstable') {
    console.log(
      "You can add a calver version argument (e.g. 'yarn docs:admin 2023-07') to generate the docs for a stable version.",
    );
  }

  const outputDir = `${docsGeneratedRelativePath}/admin_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfigExtensions} --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --input ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
    `yarn tsc ${docsRelativePath}/staticPages/*.doc.ts --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --isLandingPage --input ./${docsRelativePath}/staticPages --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    generatedStaticPagesFile,
    transformJson: (filePath) => transformJson(filePath, true),
  });

  // Replace 'unstable' with the exact API version in relative doc links
  await replaceFileContent({
    filePaths: path.join(outputDir, generatedDocsDataFile),
    searchValue: '/docs/api/admin-extensions/unstable/',
    replaceValue: `/docs/api/admin-extensions/${EXTENSIONS_API_VERSION}`,
  });
};

const generateAppBridgeDocs = async () => {
  console.log('Building App Home docs');

  const outputDir = `${docsGeneratedRelativePath}/app_home`;
  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfigAppBridge} --moduleResolution node  --target esNext  --module CommonJS`,
    `yarn generate-docs --input ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    transformJson: (filePath) => transformJson(filePath, false),
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
  await copyGeneratedToShopifyDev({
    generatedDocsPath,
    shopifyDevPath,
    shopifyDevDBPath,
  });

  await fs.cp(
    path.join(docsPath, 'screenshots'),
    path.join(
      shopifyDevPath,
      'react-app/public/images/templated-apis-screenshots/admin',
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
