/* eslint-disable no-console */
/* eslint-env node */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXTENSIONS_API_VERSION = process.argv[2];

if (!EXTENSIONS_API_VERSION) {
  console.error('Error: API_VERSION is required.');
  console.error('Usage: node build-docs-targets-json.mjs <API_VERSION>');
  console.error('Example: node build-docs-targets-json.mjs 2024-01');
  process.exit(1);
}

// All POS components will be populated from StandardComponents.ts
let allComponents = [];

// Cache for parsed API files to avoid re-reading
const apiDefinitionsCache = {};

/**
 * Parse components from the local components.ts file
 */
function parseLocalComponents() {
  try {
    const componentsPath = path.join(
      __dirname,
      '../../../src/surfaces/point-of-sale/components.ts',
    );

    if (!existsSync(componentsPath)) {
      console.warn('components.ts not found at:', componentsPath);
      return [];
    }

    const content = fs.readFileSync(componentsPath, 'utf-8');

    // Match export statements like: export {ComponentName} from './components/ComponentName/ComponentName';
    const exportMatches = content.matchAll(/export\s*\{\s*(\w+)\s*\}\s*from/g);
    const components = [];

    for (const match of exportMatches) {
      const componentName = match[1];
      // Filter out Props types and other exports
      if (
        !componentName.endsWith('Props') &&
        !componentName.includes('Type') &&
        componentName.charAt(0) === componentName.charAt(0).toUpperCase()
      ) {
        components.push(componentName);
      }
    }

    return components;
  } catch (error) {
    console.error('Error parsing local components:', error);
    return [];
  }
}

function existsSync(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Parse a union of string literals (e.g., "'Button' | 'Text'")
 * Returns an array of the string values
 */
function parseUnionOfStrings(unionString) {
  const components = [];
  // Split by | and extract quoted strings
  const parts = unionString.split('|');
  for (const part of parts) {
    const trimmed = part.trim();
    const match = trimmed.match(/^'([^']+)'$/);
    if (match) {
      components.push(match[1]);
    }
  }
  return components;
}

/**
 * Parse component types from the separate files in ./components/targets/
 */
function parseComponentTypesFromFiles() {
  // Point-of-sale doesn't have separate component type files
  // Component types are defined inline in targets.ts
  // We'll parse them directly from the targets.ts content
  return {};
}

/**
 * Parse inline component type definitions from targets.ts
 * Handles types like: type ActionComponents = AnyComponentBuilder<Pick<Components, 'Button'>>
 */
function parseInlineComponentTypes(content, componentTypesMap) {
  // Match type definitions like: type ActionComponents = AnyComponentBuilder<...>
  const typeDefRegex =
    /type\s+(\w+)\s*=\s*(AnyComponentBuilder<[\s\S]*?>)\s*;/g;

  let match;
  while ((match = typeDefRegex.exec(content)) !== null) {
    const typeName = match[1];
    const typeDefinition = match[2].replace(/\s+/g, ' ').trim();

    // Handle AnyComponentBuilder<Pick<Components, 'Comp1' | 'Comp2'>>
    const pickMatch = typeDefinition.match(
      /AnyComponentBuilder<\s*Pick<\s*Components\s*,\s*([\s\S]+?)>\s*>/,
    );
    if (pickMatch) {
      const pickedUnion = pickMatch[1].trim();
      componentTypesMap[typeName] = parseUnionOfStrings(pickedUnion);
      console.log(
        `Parsed ${typeName}: ${
          componentTypesMap[typeName].length
        } components (picked: ${componentTypesMap[typeName].join(', ')})`,
      );
      continue;
    }

    // Handle AnyComponentBuilder<Omit<Components, 'Comp1' | 'Comp2'>>
    const omitMatch = typeDefinition.match(
      /AnyComponentBuilder<\s*Omit<\s*Components\s*,\s*([\s\S]+?)>\s*>/,
    );
    if (omitMatch) {
      const omittedUnion = omitMatch[1].trim();
      const omittedComponents = parseUnionOfStrings(omittedUnion);

      if (allComponents.length > 0) {
        componentTypesMap[typeName] = allComponents.filter(
          (component) => !omittedComponents.includes(component),
        );
        console.log(
          `Parsed ${typeName}: ${
            componentTypesMap[typeName].length
          } components (omitting ${omittedComponents.join(', ')})`,
        );
      }
      continue;
    }

    // Handle plain AnyComponentBuilder<Components>
    const plainMatch = typeDefinition.match(
      /AnyComponentBuilder<\s*Components\s*>/,
    );
    if (plainMatch && allComponents.length > 0) {
      componentTypesMap[typeName] = [...allComponents];
      console.log(
        `Parsed ${typeName}: ${componentTypesMap[typeName].length} components (all)`,
      );
    }
  }
}

function parseTargetsFile() {
  const targetsFilePath = path.join(
    __dirname,
    '../../../src/surfaces/point-of-sale/targets.ts',
  );

  const content = fs.readFileSync(targetsFilePath, 'utf-8');

  // Parse and populate allComponents from the local components.ts file if not already set
  if (allComponents.length === 0) {
    const localComponents = parseLocalComponents();
    if (localComponents.length > 0) {
      allComponents = localComponents.sort();
    }
  }

  // Parse component type definitions from the separate files
  const componentTypesMap = parseComponentTypesFromFiles();

  // Also parse inline component types from targets.ts (like ActionComponents, ReceiptComponents, etc.)
  parseInlineComponentTypes(content, componentTypesMap);

  // Extract the ExtensionTargets interface (not RenderExtensionTargets for POS)
  const interfaceMatch = content.match(
    /export interface ExtensionTargets \{([\s\S]+?)\n\}/,
  );
  if (!interfaceMatch) {
    throw new Error('Could not find ExtensionTargets interface');
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
    const beforeMatch = interfaceBody.substring(0, matchStartPos);
    const lastJsDocEnd = beforeMatch.lastIndexOf('*/');

    if (lastJsDocEnd !== -1) {
      const between = beforeMatch.substring(lastJsDocEnd + 2).trim();
      if (between === '') {
        const jsDocStart = beforeMatch.lastIndexOf('/**');
        if (jsDocStart !== -1) {
          const jsDocContent = beforeMatch.substring(
            jsDocStart,
            lastJsDocEnd + 2,
          );
          if (jsDocContent.includes('@private')) {
            continue;
          }
        }
      }
    }

    let renderExtensionContent = match[2].trim();

    // Remove comments before parsing (they can contain commas that break splitting)
    renderExtensionContent = renderExtensionContent
      .replace(/\/\/[^\n]*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');

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

function splitByTopLevelComma(str) {
  const parts = [];
  let current = '';
  let angleDepth = 0;
  let braceDepth = 0;
  let parenDepth = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '<') {
      angleDepth++;
      current += char;
    } else if (char === '>') {
      angleDepth--;
      current += char;
    } else if (char === '{') {
      braceDepth++;
      current += char;
    } else if (char === '}') {
      braceDepth--;
      current += char;
    } else if (char === '(') {
      parenDepth++;
      current += char;
    } else if (char === ')') {
      parenDepth--;
      current += char;
    } else if (
      char === ',' &&
      angleDepth === 0 &&
      braceDepth === 0 &&
      parenDepth === 0
    ) {
      parts.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  if (current) {
    parts.push(current);
  }

  return parts;
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
      // Add the API itself only if it's not a composite (we document its constituents, not the wrapper)
      if (!COMPOSITE_APIS.has(apiName)) {
        apisSet.add(apiName);
      }

      // Get nested APIs from this API (recursively); skip composite APIs (we only want their constituents)
      const nestedApis = getNestedApis(apiName);
      for (const nestedApi of nestedApis) {
        if (COMPOSITE_APIS.has(nestedApi)) {
          // Expand the composite but don't add it; add its nested APIs instead
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

  // Handle AnyComponentBuilder<Pick<Components, 'Comp1' | 'Comp2'>>
  const pickMatch = cleanedComponentString.match(
    /AnyComponentBuilder<\s*Pick<\s*Components\s*,\s*([^>]+)>\s*>/,
  );
  if (pickMatch) {
    const pickedUnion = pickMatch[1].trim();
    // Parse the union of component names
    const components = [];
    const parts = pickedUnion.split('|');
    for (const part of parts) {
      const trimmed = part.trim();
      const match = trimmed.match(/^'([^']+)'$/);
      if (match) {
        components.push(match[1]);
      }
    }
    return components;
  }

  // Handle AnyComponentBuilder<Omit<Components, 'Comp1'>>
  const omitMatch = componentString.match(
    /AnyComponentBuilder<\s*Omit<\s*Components\s*,\s*'([^']+)'\s*>\s*>/,
  );
  if (omitMatch) {
    const omittedComponent = omitMatch[1];
    // Return all components except the omitted one
    return allComponents.filter((component) => component !== omittedComponent);
  }

  // Check if it directly references one of our parsed component types
  for (const [typeName, components] of Object.entries(componentTypesMap)) {
    if (componentString.includes(typeName)) {
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

// Main execution
try {
  console.log('\n🔍 Generating targets JSON for point-of-sale surface');

  // Generate the JSON
  const targetsJson = parseTargetsFile();

  // Create the extended JSON with reverse mappings
  const extendedJson = createReverseMapping(targetsJson);

  // Write to output file
  const outputPath = path.join(__dirname, 'generated/targets.json');
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }
  fs.writeFileSync(outputPath, JSON.stringify(extendedJson, null, 2));

  console.log('✅ Generated targets JSON at:', outputPath);

  // Count the different types of entries
  const targetEntries = Object.keys(targetsJson).length;
  const apiEntries = Object.keys(extendedJson).filter(
    (key) =>
      extendedJson[key].targets && !targetsJson[key] && key.endsWith('Api'),
  ).length;
  const componentEntries = Object.keys(extendedJson).filter(
    (key) =>
      extendedJson[key].targets && !targetsJson[key] && !key.endsWith('Api'),
  ).length;

  console.log('\n📋 Summary:');
  console.log(`  Extension targets: ${targetEntries}`);
  console.log(`  API reverse mappings: ${apiEntries}`);
  console.log(`  Component reverse mappings: ${componentEntries}`);
  console.log(`  Total entries in JSON: ${Object.keys(extendedJson).length}`);
} catch (error) {
  console.error('❌ Error generating targets JSON:', error.message);
  console.error(error.stack);
  process.exit(1);
}
