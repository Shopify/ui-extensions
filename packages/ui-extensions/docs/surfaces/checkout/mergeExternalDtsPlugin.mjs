import {readFileSync, writeFileSync, unlinkSync} from 'node:fs';

import {generateDtsBundle} from 'dts-bundle-generator';

const DISABLE_LINTING_COMMENT = `/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/namespace */`;
const DOM_TYPE_REFERENCE =
  '// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment\n/// <reference lib="DOM" />';
const IMPORT_REGEX =
  /import {(.*\n*)} from '((?:@.*)|preact|preact\/compat)';\n/g;
const EXPORT_REGEX = /export {.*\n*} from '(@.*)';\n/g;
const ALIAS_REGEX = /as (([^ ,]*Props)[^ ,]*)/g;
const ALIAS_FROM_TO_REGEX =
  /type ((?:[a-zA-Z0-9]|\$)*\b) as ((?:[a-zA-Z]*)Props(?:[a-zA-Z0-9]|\$)*\b)/g;

/**
 * Cleans up the content to be merged into the main file
 * Make sure we export all interfaces and types
 */
function cleanContent(content) {
  return content
    .replaceAll('\ninterface', '\nexport interface')
    .replaceAll('\ntype', '\nexport type')
    .replaceAll("import * as preact from 'preact';\n", '');
}

export async function mergeExternalDts({
  file,
  tempFilePath,
  externalOutput,
  tsconfigPath,
  inlinedLibraries,
}) {
  const versionString = getVersionTag();
  const mainTypesContent = readFileSync(file).toString();
  const {mainContent, externalImports} = await extractImports({
    content: mainTypesContent,
    tempFilePath,
    tsconfigPath,
    inlinedLibraries,
  });

  writeFileSync(
    file,
    [
      versionString,
      DISABLE_LINTING_COMMENT,
      DOM_TYPE_REFERENCE,
      externalImports,
      mainContent,
    ].join('\n'),
  );

  if (externalOutput) {
    writeFileSync(
      externalOutput,
      [versionString, DISABLE_LINTING_COMMENT, externalImports].join('\n'),
    );
  }
}

export async function mergeSingleComponentDts({
  file,
  tempFilePath,
  sharedFileName,
  tsconfigPath,
}) {
  const versionString = getVersionTag();
  const mainTypesContent = readFileSync(file).toString();
  const {mainContent, imports} = await extractImports({
    content: mainTypesContent,
    tempFilePath,
    tsconfigPath,
    inlinedLibraries: [],
  });

  // Replace all `as x` with `x` since the shared types file will already have aliases
  // Also split on commas to support multiple imports
  const cleanedImports = imports
    .map((module) => {
      return module
        .replaceAll(/(\w+)\s+as\s+/g, '')
        .trim()
        .split(',');
    })
    .flat();

  const cleanedMainContent = cleanContent(mainContent);

  writeFileSync(
    file,
    [
      versionString,
      DISABLE_LINTING_COMMENT,
      DOM_TYPE_REFERENCE,
      `import type {${cleanedImports.join(',')}} from './${sharedFileName}';`,
      cleanedMainContent,
    ].join('\n'),
  );
}

function extractImports({
  content,
  tempFilePath,
  inlinedLibraries,
  tsconfigPath,
}) {
  const externals = [];
  const interfacesToRename = [];
  let mainContent = content;
  let importLine;
  let exportLine;

  const imports = [];
  while ((importLine = IMPORT_REGEX.exec(content))) {
    externals.push(importLine[0].replace('import', 'export type'));
    mainContent = mainContent.replace(importLine[0], '');
    imports.push(importLine[1]);
  }

  while ((exportLine = EXPORT_REGEX.exec(content))) {
    externals.push(exportLine[0].replace('export', 'export type'));
    mainContent = mainContent.replace(exportLine[0], '');
  }

  // Replace rename ReactProps to its alias before exporting
  const localInterfacesToRename = [];
  let matchedExportAsAlias;
  while ((matchedExportAsAlias = ALIAS_FROM_TO_REGEX.exec(content))) {
    localInterfacesToRename.push({
      alias: matchedExportAsAlias[2],
      original: matchedExportAsAlias[1],
    });
    mainContent = mainContent.replace(
      matchedExportAsAlias[0],
      `type ${matchedExportAsAlias[2]}`,
    );
  }

  mainContent = renameInterfaces(mainContent, localInterfacesToRename);

  const externalContent = externals.join('');
  let matchedAlias;
  while ((matchedAlias = ALIAS_REGEX.exec(externalContent))) {
    interfacesToRename.push({
      alias: matchedAlias[1],
      original: matchedAlias[2],
    });
  }

  writeFileSync(tempFilePath, externalContent);

  const [externalTypesContent] = generateDtsBundle(
    [
      {
        filePath: tempFilePath,
        libraries: {
          inlinedLibraries,
        },
        noCheck: true,
        output: {
          inlineDeclareGlobals: false,
          noBanner: true,
          exportReferencedTypes: true,
        },
      },
    ],
    {
      preferredConfigPath: tsconfigPath,
    },
  );

  const externalImports = renameInterfaces(
    externalTypesContent,
    interfacesToRename,
  ).replace(/export {(\n|.)*};/, '');

  unlinkSync(tempFilePath);

  return {
    externalImports,
    mainContent,
    imports,
  };
}

function renameInterfaces(content, interfacesToRename) {
  let replacedContent = content;

  let match;
  while ((match = interfacesToRename.pop())) {
    const matchRegex = new RegExp(
      `(?<!\\$|[a-zA-Z0-9])${match.original.replace('$', '\\$')}(?!\\$|[a-zA-Z0-9])`,
      'g',
    );
    replacedContent = replacedContent.replaceAll(matchRegex, match.alias);
  }

  return replacedContent;
}

function getVersionTag() {
  const {version} = JSON.parse(readFileSync('./package.json').toString());
  return `/** VERSION: ${version} **/`;
}
