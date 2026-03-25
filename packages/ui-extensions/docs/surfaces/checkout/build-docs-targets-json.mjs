import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_VERSION = process.argv[2];

if (!API_VERSION) {
  console.error('Error: API_VERSION is required.');
  console.error('Usage: node build-docs-targets-json.mjs <API_VERSION>');
  console.error('Example: node build-docs-targets-json.mjs 2025-10');
  process.exit(1);
}

// All checkout components
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
      '../../../src/surfaces/checkout/components.ts',
    );

    if (!fs.existsSync(componentsPath)) {
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
      if (!componentName.endsWith('Props') && 
          !componentName.includes('Type') &&
          componentName.charAt(0) === componentName.charAt(0).toUpperCase()) {
        components.push(componentName);
      }
    }
    
    return components;
  } catch (error) {
    console.error('Error parsing local components:', error);
    return [];
  }
}

/**
 * Parse component types - checkout doesn't have separate component type files
 */
function parseComponentTypesFromFiles() {
  // Checkout doesn't have separate component type files
  // Component types are defined inline in targets.ts or shared.ts
  return {};
}

function parseTargetsFile() {
  const targetsFilePath = path.join(
    __dirname,
    '../../../src/surfaces/checkout/targets.ts',
  );

  const content = fs.readFileSync(targetsFilePath, 'utf-8');

  // Parse and populate allComponents from the local components.ts file if not already set
  if (allComponents.length === 0) {
    const localComponents = parseLocalComponents();
    if (localComponents.length > 0) {
      allComponents = localComponents.sort();
    }
  }

  // Parse component type definitions
  const componentTypesMap = parseComponentTypesFromFiles();

  const targets = {};

  // Look for all interfaces that might contain RenderExtension or RunnableExtension targets
  const interfaceNames = [
    'RenderExtensionTargets',
    'RunnableExtensionTargets',
    'OrderStatusExtensionTargets',
    'ExtensionTargets',
  ];

  for (const interfaceName of interfaceNames) {
    // Try to find this interface
    const regex = new RegExp(
      `export interface ${interfaceName}[^{]*\\{([\\s\\S]+?)\\n\\}`,
    );
    const match = content.match(regex);

    if (match) {
      // Parse RenderExtension targets (have components)
      if (match[1].includes('RenderExtension<')) {
        parseTargetsFromInterfaceBody(match[1], targets, componentTypesMap);
      }
      // Parse RunnableExtension targets (no components, like address-autocomplete)
      if (match[1].includes('RunnableExtension<')) {
        parseRunnableTargetsFromInterfaceBody(match[1], targets);
      }
    }
  }

  if (Object.keys(targets).length === 0) {
    throw new Error('Could not find extension targets interface');
  }

  return targets;
}

function parseTargetsFromInterfaceBody(interfaceBody, targets, componentTypesMap) {
  // Parse each target definition (handle multi-line)
  const targetRegex = /'([^']+)':\s*RenderExtension<([\s\S]*?)>;/g;

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
          const jsDocContent = beforeMatch.substring(jsDocStart, lastJsDocEnd + 2);
          if (jsDocContent.includes('@private')) {
            continue; // Skip this target
          }
        }
      }
    }

    let renderExtensionContent = match[2].trim();

    // Remove comments before parsing
    renderExtensionContent = renderExtensionContent
      .replace(/\/\/[^\n]*/g, '') // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\//g, ''); // Remove multi-line comments

    // Split by comma to separate API and Components
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
}

/**
 * Parse RunnableExtension targets from an interface body
 * These targets don't have components (they return data, not UI)
 */
function parseRunnableTargetsFromInterfaceBody(interfaceBody, targets) {
  const targetRegex = /'([^']+)':\s*RunnableExtension<([\s\S]*?)>;/g;

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
          const jsDocContent = beforeMatch.substring(jsDocStart, lastJsDocEnd + 2);
          if (jsDocContent.includes('@private')) {
            continue; // Skip this target
          }
        }
      }
    }

    let runnableExtensionContent = match[2].trim();

    // Remove comments before parsing
    runnableExtensionContent = runnableExtensionContent
      .replace(/\/\/[^\n]*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');

    // Split by comma to separate API and Output type
    const parts = splitByTopLevelComma(runnableExtensionContent);

    if (parts.length >= 1) {
      const apiString = parts[0].trim();
      const apis = parseApis(apiString);

      // RunnableExtension targets don't have components - they return data
      targets[targetName] = {
        components: [],
        apis: apis.sort(),
      };
    }
  }
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

// APIs that are composites — list their documented constituent APIs instead of themselves
const COMPOSITE_API_DECOMPOSITION = {
  StandardApi: [
    'AnalyticsApi',
    'BuyerIdentityApi',
    'BuyerJourneyApi',
    'CartInstructionsApi',
    'CheckoutSettingsApi',
    'CheckoutTokenApi',
    'CostApi',
    'CustomerPrivacyApi',
    'DeliveryApi',
    'ExtensionApi',
    'LocalizationApi',
    'LocalizedFieldsApi',
    'PaymentsApi',
    'StorefrontApi',
    'SessionTokenApi',
    'SettingsApi',
    'ShopApi',
    'StorageApi',
    'UiApi',
  ],
  CheckoutApi: [
    'AddressesApi',
    'AttributesApi',
    'CartLinesApi',
    'DiscountsApi',
    'GiftCardsApi',
    'MetafieldsApi',
    'NoteApi',
  ],
  OrderConfirmationApi: ['OrderApi'],
};

function parseApis(apiString) {
  const apisSet = new Set();

  // Remove any comments
  apiString = apiString
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  // Split by & and extract API names
  const parts = apiString
    .split('&')
    .map((s) => s.trim())
    .filter((s) => s);

  for (const part of parts) {
    // Match API names (e.g., StandardApi<'...'> or just ApiName)
    let apiName = null;

    // Extract just the type name before any generic parameters
    const apiMatch = part.match(/^(\w+Api)/);
    if (apiMatch) {
      apiName = apiMatch[1];
    } else {
      // Try to match any capitalized type name ending in Api
      const fallbackMatch = part.match(/(\w+Api)\b/);
      if (fallbackMatch) {
        apiName = fallbackMatch[1];
      }
    }

    if (apiName) {
      if (COMPOSITE_API_DECOMPOSITION[apiName]) {
        for (const constituent of COMPOSITE_API_DECOMPOSITION[apiName]) {
          apisSet.add(constituent);
        }
      } else {
        apisSet.add(apiName);
      }
    }
  }

  return Array.from(apisSet);
}

function parseComponents(componentString, componentTypesMap) {
  // Remove whitespace and newlines
  componentString = componentString.replace(/\s+/g, ' ').trim();

  // Handle AnyComponent (checkout's main component type)
  if (componentString === 'AnyComponent') {
    return allComponents;
  }

  // Handle AllowedComponents<'Comp1' | 'Comp2'>
  const allowedMatch = componentString.match(/AllowedComponents<\s*([^>]+)\s*>/);
  if (allowedMatch) {
    const allowedUnion = allowedMatch[1].trim();
    return parseUnionOfStrings(allowedUnion);
  }

  // Handle AnyComponentExcept<'Comp1' | 'Comp2'>
  const exceptMatch = componentString.match(/AnyComponentExcept<\s*([^>]+)\s*>/);
  if (exceptMatch) {
    const exceptedUnion = exceptMatch[1].trim();
    const exceptedComponents = parseUnionOfStrings(exceptedUnion);
    return allComponents.filter((c) => !exceptedComponents.includes(c));
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

/**
 * Parse a union of string literals (e.g., "'Image' | 'Banner'")
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
  console.log('\n🔍 Generating targets JSON for checkout surface');

  // Generate the JSON
  const targetsJson = parseTargetsFile();

  // Create the extended JSON with reverse mappings
  const extendedJson = createReverseMapping(targetsJson);

  // These components have doc pages but are not exported from the TypeScript source,
  // so the script cannot discover them automatically. Add them manually with all targets.
  const allTargetNames = Object.keys(targetsJson).sort();
  const UNDISCOVERABLE_COMPONENTS = ['StyleHelper'];
  for (const component of UNDISCOVERABLE_COMPONENTS) {
    if (!extendedJson[component]) {
      extendedJson[component] = {targets: allTargetNames};
    }
  }

  // Write to output file
  const outputPath = path.join(
    __dirname,
    `generated/checkout_ui_extensions/${API_VERSION}/targets.json`,
  );
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(outputPath, JSON.stringify(extendedJson, null, 2));

  console.log('✅ Generated targets JSON at:', outputPath);
  
  // Count the different types of entries
  const targetEntries = Object.keys(targetsJson).length;
  const apiEntries = Object.keys(extendedJson).filter(
    (key) => extendedJson[key].targets && !targetsJson[key] && key.endsWith('Api')
  ).length;
  const componentEntries = Object.keys(extendedJson).filter(
    (key) => extendedJson[key].targets && !targetsJson[key] && !key.endsWith('Api')
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
