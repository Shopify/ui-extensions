/* eslint-disable no-console */
/* eslint-env node */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {splitByTopLevelComma} from '../../shared/build-docs-type-resolver.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All POS components will be populated from StandardComponents.ts
let allComponents = [];

// Cache for parsed API files to avoid re-reading
const apiDefinitionsCache = {};

/**
 * Parse a string union type from a component file
 * e.g., export type SmartGridComponents = 'Tile';
 * or multi-line: export type BlockExtensionComponents = 'Badge' | 'Box' | ...;
 */
function parseStringUnionType(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Extract all quoted component names from the file
    const componentNames = content.match(/'([^']+)'/g);
    if (componentNames) {
      return componentNames.map((name) => name.replace(/'/g, ''));
    }
  } catch (error) {
    console.error(`Error reading component file ${filePath}:`, error.message);
  }
  return null;
}

/**
 * Parse component types from the separate files in ./components/targets/
 */
function parseComponentTypesFromFiles() {
  const basePath = path.join(
    __dirname,
    '../../../src/surfaces/point-of-sale/components/targets',
  );

  const componentTypesMap = {};

  // Parse SmartGridComponents
  const smartGridComponents = parseStringUnionType(
    path.join(basePath, 'SmartGridComponents.ts'),
  );
  if (smartGridComponents) {
    componentTypesMap.SmartGridComponents = smartGridComponents;
  }

  // Parse ActionExtensionComponents
  const actionComponents = parseStringUnionType(
    path.join(basePath, 'ActionExtensionComponents.ts'),
  );
  if (actionComponents) {
    componentTypesMap.ActionExtensionComponents = actionComponents;
  }

  // Parse BlockExtensionComponents
  const blockComponents = parseStringUnionType(
    path.join(basePath, 'BlockExtensionComponents.ts'),
  );
  if (blockComponents) {
    componentTypesMap.BlockExtensionComponents = blockComponents;
  }

  // Parse ReceiptComponents
  const receiptComponents = parseStringUnionType(
    path.join(basePath, 'ReceiptComponents.ts'),
  );
  if (receiptComponents) {
    componentTypesMap.ReceiptComponents = receiptComponents;
  }

  // Parse StandardComponents (for BasicComponents which excludes 'Tile')
  const standardComponents = parseStringUnionType(
    path.join(basePath, 'StandardComponents.ts'),
  );
  if (standardComponents) {
    componentTypesMap.StandardComponents = standardComponents;
    // BasicComponents = Exclude<StandardComponents, 'Tile'>
    componentTypesMap.BasicComponents = standardComponents.filter(
      (component) => component !== 'Tile',
    );
    // Update global allComponents
    allComponents = standardComponents.sort();
  }

  return componentTypesMap;
}

const TARGETS_FILE_PATH = path.join(
  __dirname,
  '../../../src/surfaces/point-of-sale/extension-targets.ts',
);

function parseTargetsFile() {
  const content = fs.readFileSync(TARGETS_FILE_PATH, 'utf-8');

  // Parse component type definitions from the separate files
  const componentTypesMap = parseComponentTypesFromFiles();

  // Extract the RenderExtensionTargets interface
  const interfaceMatch = content.match(
    /export interface RenderExtensionTargets \{([\s\S]+?)\n\}/,
  );
  if (!interfaceMatch) {
    throw new Error('Could not find RenderExtensionTargets interface');
  }

  const interfaceBody = interfaceMatch[1];

  // Parse each target definition (handle multi-line)
  const targetRegex = /'([^']+)':\s*RenderExtension<([\s\S]*?)>;/g;
  const targets = {};

  let match;
  while ((match = targetRegex.exec(interfaceBody)) !== null) {
    const targetName = match[1];
    const matchStartPos = match.index;

    // Check if this target has @private in its JSDoc comment
    // Look backwards from the match to find a preceding JSDoc comment
    const beforeMatch = interfaceBody.substring(0, matchStartPos);
    const lastJsDocEnd = beforeMatch.lastIndexOf('*/');

    if (lastJsDocEnd !== -1) {
      // Check if there's no other target between the JSDoc and this target
      const between = beforeMatch.substring(lastJsDocEnd + 2).trim();
      // If the text between JSDoc end and target is empty (or just whitespace), the JSDoc belongs to this target
      if (between === '') {
        const jsDocStart = beforeMatch.lastIndexOf('/**');
        if (jsDocStart !== -1) {
          const jsDocContent = beforeMatch.substring(
            jsDocStart,
            lastJsDocEnd + 2,
          );
          // Skip this target if it's marked @private
          if (jsDocContent.includes('@private')) {
            continue;
          }
        }
      }
    }

    let renderExtensionContent = match[2].trim();

    // Remove comments before parsing (they can contain commas that break splitting)
    renderExtensionContent = renderExtensionContent
      .replace(/\/\/[^\n]*/g, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, ''); // Remove multi-line comments

    // Split by comma to separate API and Components (but be careful with nested <> brackets)
    const parts = splitByTopLevelComma(renderExtensionContent);

    if (parts.length >= 2) {
      const apiString = parts[0].trim();
      const componentString = parts[1].trim();

      // Parse APIs from the intersection type
      const apis = parseApis(apiString);

      // Parse components
      const components = parseComponents(componentString, componentTypesMap);

      targets[targetName] = {
        components: components.sort(),
        apis: apis.sort(),
      };
    }
  }

  return targets;
}

/**
 * Parse EventExtensionTargets from extension-targets.ts and return
 * a map of target name -> { components: [], apis: [] } so all extension
 * targets (render + event) appear in the JSON.
 */
function parseEventTargetsFile(content) {
  const eventMatch = content.match(
    /export interface EventExtensionTargets \{([\s\S]+?)\n\}/,
  );
  if (!eventMatch) {
    return {};
  }
  const interfaceBody = eventMatch[1];
  const targetRegex = /'([^']+)':\s*\(/g;
  const targets = {};
  let match;
  while ((match = targetRegex.exec(interfaceBody)) !== null) {
    const targetName = match[1];
    targets[targetName] = {
      components: [],
      apis: [],
    };
  }
  return targets;
}

function getNestedApis(apiName) {
  // Check if we've already parsed this API
  if (Object.prototype.hasOwnProperty.call(apiDefinitionsCache, apiName)) {
    return apiDefinitionsCache[apiName];
  }

  // Map API names to their file paths (try multiple possible locations)
  const apiFilePaths = {
    StandardApi: [
      './api/standard/standard-api',
      './render/api/standard/standard-api',
    ],
    SmartGridApi: ['./api/smartgrid-api/smartgrid-api'],
    ActionApi: [
      './api/action-api/action-api',
      './render/api/action-api/action-api',
    ],
    NavigationApi: [
      './api/navigation-api/navigation-api',
      './render/api/navigation-api/navigation-api',
    ],
    ScannerApi: [
      './api/scanner-api/scanner-api',
      './render/api/scanner-api/scanner-api',
    ],
    CartApi: ['./api/cart-api/cart-api', './render/api/cart-api/cart-api'],
    OrderApi: ['./api/order-api/order-api', './render/api/order-api/order-api'],
    ConnectivityApi: [
      './api/connectivity-api/connectivity-api',
      './render/api/connectivity-api/connectivity-api',
    ],
    DeviceApi: [
      './api/device-api/device-api',
      './render/api/device-api/device-api',
    ],
    LocaleApi: [
      './api/locale-api/locale-api',
      './render/api/locale-api/locale-api',
    ],
    SessionApi: [
      './api/session-api/session-api',
      './render/api/session-api/session-api',
    ],
    ToastApi: ['./api/toast-api/toast-api', './render/api/toast-api/toast-api'],
    ProductSearchApi: [
      './api/product-search-api/product-search-api',
      './render/api/product-search-api/product-search-api',
    ],
    ActionTargetApi: [
      './api/action-target-api/action-target-api',
      './render/api/action-target-api/action-target-api',
    ],
    ProductApi: [
      './api/product-api/product-api',
      './render/api/product-api/product-api',
    ],
    CustomerApi: [
      './api/customer-api/customer-api',
      './render/api/customer-api/customer-api',
    ],
    DraftOrderApi: [
      './api/draft-order-api/draft-order-api',
      './render/api/draft-order-api/draft-order-api',
    ],
    PrintApi: ['./api/print-api/print-api', './render/api/print-api/print-api'],
    StorageApi: ['./api/storage-api/storage-api'],
    CartLineItemApi: ['./api/cart-line-item-api/cart-line-item-api'],
    CashDrawerApi: ['./api/cash-drawer-api/cash-drawer-api'],
    PinPadApi: ['./api/pin-pad-api'],
  };

  const relativePaths = apiFilePaths[apiName];
  if (!relativePaths) {
    // Unknown API, cache and return empty array
    apiDefinitionsCache[apiName] = [];
    return [];
  }

  // Try each possible path
  let content = null;

  for (const relativePath of relativePaths) {
    const basePath = path.join(
      __dirname,
      '../../../src/surfaces/point-of-sale',
      relativePath,
    );

    // Try both .ts and .tsx extensions
    for (const ext of ['.ts', '.tsx']) {
      try {
        const apiFilePath = basePath + ext;
        content = fs.readFileSync(apiFilePath, 'utf-8');
        break;
      } catch (error) {
        // Try next extension
      }
    }

    if (content) {
      break;
    }
  }

  if (!content) {
    apiDefinitionsCache[apiName] = [];
    return [];
  }

  try {
    // Find the export type definition for this API
    // We need to capture everything until we find a semicolon that's not inside braces
    const typeDefStartRegex = new RegExp(`export type ${apiName}[^=]*=`, 's');
    const startMatch = content.match(typeDefStartRegex);

    if (!startMatch) {
      apiDefinitionsCache[apiName] = [];
      return [];
    }

    // Find the end position (semicolon at the correct nesting level)
    const startPos = startMatch.index + startMatch[0].length;
    let endPos = startPos;
    let braceDepth = 0;
    let angleDepth = 0;

    for (let i = startPos; i < content.length; i++) {
      const char = content[i];

      if (char === '{') braceDepth++;
      else if (char === '}') braceDepth--;
      else if (char === '<') angleDepth++;
      else if (char === '>') angleDepth--;
      else if (char === ';' && braceDepth === 0 && angleDepth === 0) {
        endPos = i;
        break;
      }
    }

    const typeDef = content.substring(startPos, endPos);

    // Extract all API names from the type definition
    const nestedApis = [];
    const apiMatches = typeDef.matchAll(/(\w+Api)\b/g);

    for (const apiMatch of apiMatches) {
      const nestedApiName = apiMatch[1];
      // Don't include the API itself
      if (nestedApiName !== apiName && !nestedApis.includes(nestedApiName)) {
        nestedApis.push(nestedApiName);
      }
    }

    apiDefinitionsCache[apiName] = nestedApis;
    return nestedApis;
  } catch (error) {
    // Error parsing, cache and return empty array
    apiDefinitionsCache[apiName] = [];
    return [];
  }
}

// APIs that are composites of other documented APIs - we list their constituent APIs, not these wrapper types
const COMPOSITE_APIS = new Set(['StandardApi', 'ActionTargetApi']);

function parseApis(apiString) {
  const apisSet = new Set();

  // Remove any comments
  const cleanedApiString = apiString
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  // Split by & and extract API names
  const parts = cleanedApiString
    .split('&')
    .map((part) => part.trim())
    .filter((part) => part);

  for (const part of parts) {
    // Match StandardApi<'...'> or just ApiName
    let apiName = null;

    if (part.includes('StandardApi')) {
      apiName = 'StandardApi';
    } else {
      // Extract just the type name before any generic parameters
      const apiMatch = part.match(/^(\w+Api)/);
      if (apiMatch) {
        apiName = apiMatch[1];
      }
    }

    if (apiName) {
      if (!COMPOSITE_APIS.has(apiName)) {
        apisSet.add(apiName);
      }

      const nestedApis = getNestedApis(apiName);
      for (const nestedApi of nestedApis) {
        if (COMPOSITE_APIS.has(nestedApi)) {
          const deepNestedApis = getNestedApis(nestedApi);
          deepNestedApis.forEach((api) => {
            if (!COMPOSITE_APIS.has(api)) apisSet.add(api);
          });
        } else {
          apisSet.add(nestedApi);
          const deepNestedApis = getNestedApis(nestedApi);
          deepNestedApis.forEach((api) => {
            if (!COMPOSITE_APIS.has(api)) apisSet.add(api);
          });
        }
      }
    }
  }

  return Array.from(apisSet);
}

function parseComponents(componentString, componentTypesMap) {
  // Remove whitespace and newlines
  const cleanedComponentString = componentString.replace(/\s+/g, ' ').trim();

  // Check if it directly references one of our parsed component types
  for (const [typeName, components] of Object.entries(componentTypesMap)) {
    if (cleanedComponentString.includes(typeName)) {
      return components;
    }
  }

  // Default to all components if no match
  return allComponents;
}

function createReverseMapping(targetsJson) {
  const result = {...targetsJson};

  // Create reverse mappings for APIs
  const apiToTargets = {};
  const componentToTargets = {};

  // Iterate through all targets
  for (const [targetName, targetData] of Object.entries(targetsJson)) {
    // Map APIs to targets
    for (const api of targetData.apis) {
      if (!apiToTargets[api]) {
        apiToTargets[api] = [];
      }
      apiToTargets[api].push(targetName);
    }

    // Map Components to targets
    for (const component of targetData.components) {
      if (!componentToTargets[component]) {
        componentToTargets[component] = [];
      }
      componentToTargets[component].push(targetName);
    }
  }

  // Add API reverse mappings to result
  for (const [api, targets] of Object.entries(apiToTargets)) {
    result[api] = {
      targets: targets.sort(),
    };
  }

  // Add Component reverse mappings to result
  for (const [component, targets] of Object.entries(componentToTargets)) {
    result[component] = {
      targets: targets.sort(),
    };
  }

  return result;
}

// Find the generated_docs_data_v2.json file to determine output location
function findGeneratedDocsPath() {
  const generatedDir = path.join(__dirname, 'generated');

  function findFile(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const result = findFile(fullPath);
        if (result) return result;
      } else if (file === 'generated_docs_data_v2.json') {
        return path.dirname(fullPath);
      }
    }
    return null;
  }

  const docsPath = findFile(generatedDir);
  return docsPath ?? generatedDir;
}

// Generate the JSON (render targets + event targets)
const renderTargets = parseTargetsFile();
const fileContent = fs.readFileSync(TARGETS_FILE_PATH, 'utf-8');
const eventTargets = parseEventTargetsFile(fileContent);
const targetsJson = {...renderTargets, ...eventTargets};

// Create the extended JSON with reverse mappings
const extendedJson = createReverseMapping(targetsJson);

// Write to output file
const outputPath = path.join(findGeneratedDocsPath(), 'targets.json');
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, {recursive: true});
}
fs.writeFileSync(outputPath, JSON.stringify(extendedJson, null, 2));

console.log('✅ Generated extended targets JSON at:', outputPath);
console.log('\n📋 Parsed component types:');
console.log(
  '  SmartGridComponents, ActionComponents, ReceiptComponents, BlockComponents, BasicComponents',
);
console.log('\n📋 Sample - First target:');
const firstTarget = Object.keys(targetsJson)[0];
console.log(JSON.stringify({[firstTarget]: targetsJson[firstTarget]}, null, 2));
console.log('\n📋 Sample - API reverse mapping:');
console.log(JSON.stringify({StandardApi: extendedJson.StandardApi}, null, 2));
console.log('\n📋 Sample - Component reverse mapping:');
console.log(JSON.stringify({Tile: extendedJson.Tile}, null, 2));
