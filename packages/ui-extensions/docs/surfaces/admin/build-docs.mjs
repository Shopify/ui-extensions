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
import {extractIconList} from './build-doc-extract-icons.mjs';

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

const generatedDocsDataFile = 'generated_docs_data.json';
const generatedDocsDataV2File = 'generated_docs_data_v2.json';

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

const escapeForJSTemplate = (str) => {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
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

/**
 * Renders the JSX template for the icon preview.
 * @returns The processed HTML string.
 */
const renderIconPreviewJsxTemplate = async (iconPreviewData) => {
  const templatePath = path.join(
    docsPath,
    'templates/icon-renderer/jsx-render.html',
  );
  const template = await fs.readFile(templatePath, 'utf-8');

  const jsxFilePath = path.join(docsPath, iconPreviewData.jsxFile);
  let jsxCode = await fs.readFile(jsxFilePath, 'utf-8');

  const iconListString = `[${iconPreviewData.icons
    .map((icon) => `'${icon}'`)
    .join(',')}]`;
  jsxCode = jsxCode.replace(/"__ICON_LIST__"/g, iconListString);

  const escapedJsxCode = escapeForJSTemplate(jsxCode);

  return template
    .replace(/\{\{COMPOSED_STYLES\}\}/g, iconPreviewData.customStyles || '')
    .replace(/\{\{BODY_CONTENT\}\}/g, iconPreviewData.bodyContent || '')
    .replace(/\{\{JSX_CODE\}\}/g, escapedJsxCode);
};

const htmlWrapper = (htmlString, layoutStyles = '', customStyles = '') => {
  const baseStyles = 'box-sizing: border-box; margin: 0; padding: 0.5rem;';
  const composedStyles = composeStyles(baseStyles, layoutStyles, customStyles);

  return `<!DOCTYPE html><html><head><style>html, body {height:100%} body {${composedStyles}}</style><script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script></head><body>${decodeHTML(
    htmlString,
  )}</body></html>`;
};

/*
Using JSX Builder to self-host Preact and Sucrase.
https://github.com/shopify-playground/jsx-builder
*/
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
  // Check if 'return' appears as a statement
  // If "return" has words before AND after it (like "for return request"), it's in text
  // Otherwise, check if there's a return statement
  const hasReturnInText = /\w+\s+return\s+\w+/.test(jsxString);
  const hasReturnStatement = !hasReturnInText && /\breturn\b/.test(jsxString);

  if (!hasReturnStatement) {
    jsxStringProcessed = `return (${jsxString})`;
  }

  return `<!DOCTYPE html> <html> <head> <style> html, body {height:100%} body {${composedStyles}} </style> <script src="https://cdn.shopify.com/shopifycloud/polaris.js"></script> <script src="https://cdn.shopify.com/shopifycloud/jsx-builder/jsx-builder.min.js"></script> </head>
  <body>${
    bodyContent || ''
  }<script> (function() { const {render, h, Fragment, Component, useState} = window.preact; const jsxCode = \`const App = () => { ${decodeHTML(
    jsxStringProcessed,
  )
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(
      /\$/g,
      '\\$',
    )} };\`; try { const {code} = window.sucrase.transform(jsxCode, { transforms: ['jsx'], jsxPragma: 'h', jsxFragmentPragma: 'Fragment', production: true }); const fn = new Function('h', 'Fragment', 'Component', 'useState', code + '; return App;'); const App = fn(h, Fragment, Component, useState); const target = document.getElementById('wrapper-element') || document.body; if (target) render(h(App), target); } catch(e) { console.error('JSX Transform Error:', e); const body = document.body; if (body) body.innerHTML = '<div style="color:red;padding:1rem;">Error rendering example: ' + e.message + '</div>'; } })();
    </script>
</body>
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

      const customStylesString = stylesToString(customStyles);

      return jsxWrapper(
        htmlString,
        bodyContent,
        layoutStyles,
        customStylesString,
      );
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
    wrapperAttributes: 'style="width: 100%;"',
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
  fullWidth: createTemplate({
    layoutStyles: 'display: grid; place-items: center;',
    wrapperElement: 's-box',
    wrapperAttributes: 'padding="base", inlineSize="100%"',
  }),
  example: createTemplate({
    layoutStyles: 'display: grid; place-items: center; gap: 0.5rem;',
    wrapperElement: 's-box',
    wrapperAttributes: 'padding="base"',
  }),
  formWrapper: createTemplate({
    layoutStyles:
      'display: grid; place-items: center; gap: 0.5rem; background: #F1F1F1;  padding: 1rem;',
    wrapperElement: 's-box',
    wrapperAttributes: 'padding="base", inlineSize="300px"',
  }),
};

const transformJson = async (filePath, isExtensions) => {
  let jsonData = JSON.parse((await fs.readFile(filePath, 'utf8')).toString());

  // V2 format is an object keyed by symbol name; transforms only apply to legacy array format
  if (!Array.isArray(jsonData)) {
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    return;
  }

  const iconEntry = jsonData.find(
    (entry) => entry.name === 'Icon' && entry.subSections,
  );
  if (iconEntry) {
    const iconDataPath = path.join(srcPath, 'components/Icon/icon-data.json');
    const iconData = JSON.parse(await fs.readFile(iconDataPath, 'utf-8'));
    const iconPreviewData = iconData.iconPreviewData;

    iconPreviewData.icons = await extractIconList();

    const subSection = iconEntry.subSections.find((section) =>
      section.sectionContent?.includes('{{ICON_PREVIEW_IFRAME}}'),
    );
    if (subSection) {
      const html = await renderIconPreviewJsxTemplate(iconPreviewData);
      // Converting to base64 to avoid having to escape the HTML in the JSX template.
      const base64Html = Buffer.from(html, 'utf-8').toString('base64');
      const darkModeListener = await fs.readFile(
        path.join(docsPath, 'templates/icon-renderer/dark-mode-listener.jsx'),
        'utf-8',
      );
      const base64DarkModeListener = Buffer.from(
        darkModeListener,
        'utf-8',
      ).toString('base64');
      subSection.sectionContent = subSection.sectionContent.replace(
        /\{\{ICON_PREVIEW_IFRAME\}\}/g,
        `<iframe id="icon-preview-iframe" width="100%" height="580px" sandbox="allow-scripts" src="data:text/html;base64,${base64Html}"></iframe>
        <script src="data:text/javascript;base64,${base64DarkModeListener}"></script>
        `,
      );
    }
  }

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
          newTabs.push({...tab, title: tab.language});
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
            title: tab.language === 'preview-jsx' ? 'jsx' : 'html',
            code: tab.code,
            language: tab.language === 'preview-jsx' ? 'jsx' : 'html',
            editable:
              tab.language === 'preview-jsx' ? tab.editable || false : false,
          },
          {code: previewHTML, language: 'preview'},
        );
      });

      entry.defaultExample.codeblock.tabs = newTabs.sort((first, second) => {
        if (first.language === 'jsx') return -1;
        if (second.language === 'jsx') return 1;
        return 0;
      });
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

              newTabs.push(
                {
                  title: tab.language === 'preview-jsx' ? 'jsx' : 'html',
                  code: tab.code,
                  language: tab.language === 'preview-jsx' ? 'jsx' : 'html',
                },
                {
                  code: previewHTML,
                  language: 'preview',
                },
              );
            } else {
              newTabs.push({
                title: tab.language,
                code: tab.code,
                language: tab.language,
                editable:
                  tab.language === 'preview-jsx'
                    ? tab.editable || false
                    : false,
              });
            }
          });

          example.codeblock.tabs = newTabs.sort((first, second) => {
            if (first.language === 'jsx') return -1;
            if (second.language === 'jsx') return 1;
            return 0;
          });
        });
      });
    }
  });

  // Merge the App Bridge docs with the Shopify Dev docs (if that file exists)
  if (!isExtensions && shopifyDevExists) {
    const shopifyDevDocs = path.join(
      shopifyDevDBPath,
      'app_home/generated_docs_data.json',
    );
    if (existsSync(shopifyDevDocs)) {
      const shopifyDevDocsContent = await fs.readFile(shopifyDevDocs, 'utf8');
      const shopifyDevDocsDocsParsed = JSON.parse(
        shopifyDevDocsContent.toString(),
      );

      const filteredDocs = shopifyDevDocsDocsParsed.filter(
        (entry) =>
          entry.category !== 'Web components' &&
          entry.category !== 'Polaris web components' &&
          entry.category !== 'Patterns',
      );

      // Combine arrays with shopify dev docs first, followed by new data
      jsonData = [...filteredDocs, ...jsonData];
    }
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
  if (SHOPIFY_DEV_EXTENSIONS_FOLDER) {
    console.log(
      `Shopify-dev admin_extensions folder will be: ${SHOPIFY_DEV_EXTENSIONS_FOLDER}`,
    );
  }

  const outputDir = `${docsGeneratedRelativePath}/admin_extensions/${EXTENSIONS_API_VERSION}`;

  const scripts = [
    `yarn tsc --project ${docsRelativePath}/${tsconfigExtensions} --moduleResolution node  --target esNext  --module CommonJS --skipLibCheck`,
    `yarn generate-docs --input ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    generatedDocsDataV2File,
    transformJson: (filePath) => transformJson(filePath, true),
  });

  // Replace 'unstable' with the exact API version in relative doc links
  const generatedDocsPathForVersion = path.join(rootPath, outputDir);
  await replaceFileContent({
    filePaths: path.join(generatedDocsPathForVersion, generatedDocsDataFile),
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
    `yarn tsc --project ${docsRelativePath}/${tsconfigAppBridge} --moduleResolution node  --target esNext  --module CommonJS --skipLibCheck`,
    `yarn generate-docs --input ./${srcRelativePath} --typesInput ./${srcRelativePath} --output ./${outputDir}`,
  ];

  await generateFiles({
    scripts,
    outputDir,
    rootPath,
    generatedDocsDataFile,
    generatedDocsDataV2File,
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
