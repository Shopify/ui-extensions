import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {
  createTypeResolver,
  splitByTopLevelComma,
} from '../../shared/build-docs-type-resolver.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_VERSION = process.argv[2];

if (!API_VERSION) {
  console.error('Error: API_VERSION is required.');
  console.error('Usage: node build-docs-targets-json.mjs <API_VERSION>');
  console.error('Example: node build-docs-targets-json.mjs 2025-10');
  process.exit(1);
}

// Configuration for checkout surface
const config = {
  basePath: path.join(__dirname, '../../../src/surfaces/checkout'),
  outputPath: path.join(__dirname, `generated/targets.json`),
  componentTypesPath: null,
  hasComponentTypes: false,
};

// All components will be populated from SUPPORTED_COMPONENTS
const allComponents = [];

// Cache for parsed API files to avoid re-reading
const apiDefinitionsCache = {};

// Create type resolver for checkout surface
const sharedTsPath = path.join(config.basePath, 'shared.ts');
const typeResolver = createTypeResolver(sharedTsPath);

// Expose resolver methods for use in this script
const resolveType = typeResolver.resolveType;
const resolveTypeUnfiltered = typeResolver.resolveTypeUnfiltered;
const getTypeDefinitions = typeResolver.getTypeDefinitions;

function parseComponentTypesFromFiles() {
  // Checkout doesn't have separate component type files
  return {};
}

function parseTargetsFile() {
  const targetsFilePath = path.join(config.basePath, 'extension-targets.ts');

  const content = fs.readFileSync(targetsFilePath, 'utf-8');

  // Parse component type definitions
  const componentTypesMap = parseComponentTypesFromFiles();

  const targets = {};

  // Look for all interfaces that might contain RenderExtension or RunnableExtension targets
  const interfaceNames = [
    'RenderExtensionTargets',
    'RunnableExtensionTargets',
    'OrderStatusExtensionTargets',
    'CustomerAccountExtensionTargets',
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

function parseTargetsFromInterfaceBody(
  interfaceBody,
  targets,
  componentTypesMap,
) {
  // Parse each target definition (handle multi-line)
  const targetRegex = /'([^']+)':\s*RenderExtension<([\s\S]*?)>;/g;

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
  // Parse each RunnableExtension target definition (handle multi-line)
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

    let runnableExtensionContent = match[2].trim();

    // Remove comments before parsing
    runnableExtensionContent = runnableExtensionContent
      .replace(/\/\/[^\n]*/g, '')
      .replace(/\/\*[\s\S]*?\*\//g, '');

    // Split by comma to separate API and Output type
    const parts = splitByTopLevelComma(runnableExtensionContent);

    if (parts.length >= 1) {
      const apiString = parts[0].trim();

      // Parse APIs from the intersection type
      const apis = parseApis(apiString);

      // RunnableExtension targets don't have components - they return data
      targets[targetName] = {
        components: [],
        apis: apis.sort(),
      };
    }
  }
}

function getNestedApis(apiName) {
  // Check if we've already parsed this API
  if (apiDefinitionsCache.hasOwnProperty(apiName)) {
    return apiDefinitionsCache[apiName];
  }

  // Try to find the API file in the surface's api directory
  const apiDir = path.join(config.basePath, 'api');

  if (!fs.existsSync(apiDir)) {
    apiDefinitionsCache[apiName] = [];
    return [];
  }

  // Convert API name to potential file paths
  // e.g., StandardApi -> standard-api, CartApi -> cart-api
  const kebabName = apiName
    .replace(/Api$/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  // Try multiple possible locations
  const possiblePaths = [
    path.join(apiDir, `${kebabName}.ts`),
    path.join(apiDir, `${kebabName}`, `${kebabName}.ts`),
    path.join(apiDir, kebabName.replace(/-/g, ''), `${kebabName}.ts`),
    path.join(apiDir, `${kebabName}-api`, `${kebabName}-api.ts`),
    path.join(apiDir, `${kebabName}-api.ts`),
    path.join(apiDir, `standard-api`, `standard-api.ts`),
  ];

  let content = null;
  for (const apiFilePath of possiblePaths) {
    try {
      if (fs.existsSync(apiFilePath)) {
        content = fs.readFileSync(apiFilePath, 'utf-8');
        break;
      }
    } catch (error) {
      // Continue to next path
    }
  }

  if (!content) {
    apiDefinitionsCache[apiName] = [];
    return [];
  }

  try {
    // Find the export type definition for this API
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
      const generalMatch = part.match(/(\w+Api)\b/);
      if (generalMatch) {
        apiName = generalMatch[1];
      }
    }

    if (apiName) {
      // Add the API itself
      apisSet.add(apiName);

      // Get nested APIs from this API (recursively)
      const nestedApis = getNestedApis(apiName);
      for (const nestedApi of nestedApis) {
        apisSet.add(nestedApi);
        // Recursively get nested APIs of nested APIs
        const deepNestedApis = getNestedApis(nestedApi);
        deepNestedApis.forEach((api) => apisSet.add(api));
      }
    }
  }

  return Array.from(apisSet);
}

/**
 * Parse a TypeScript component type expression
 * Uses the generic resolveType() to handle any type expression dynamically
 */
function parseComponents(componentString, componentTypesMap) {
  // Normalize whitespace
  componentString = componentString.replace(/\s+/g, ' ').trim();

  // Handle generic wrapper types like AnyCheckoutComponentExcept<'X' | 'Y'>
  // These are defined as: type AnyCheckoutComponentExcept<Except> = Exclude<AnyCheckoutComponent, Except>
  // We need to expand them to their actual Exclude form
  const genericExceptMatch = componentString.match(/^(\w+Except)<([^>]+)>$/);
  if (genericExceptMatch) {
    const genericTypeName = genericExceptMatch[1];
    const typeArg = genericExceptMatch[2];

    // Look up the generic type definition to find the base type
    const typeDefs = getTypeDefinitions();
    const genericDef = typeDefs[genericTypeName];

    if (genericDef) {
      // Parse the generic definition to extract the base type from Exclude<BaseType, Except>
      const baseTypeMatch = genericDef.match(/Exclude<(\w+),\s*Except>/);
      if (baseTypeMatch) {
        const baseTypeName = baseTypeMatch[1];
        // Resolve as Exclude<BaseType, typeArg>
        const baseComponents = resolveType(baseTypeName);
        const excludedComponents = resolveType(typeArg);
        return baseComponents.filter((c) => !excludedComponents.includes(c));
      }
    }
  }

  // Handle AllowedComponents<ComponentType> - it's just an identity wrapper
  // BUT: AllowedComponents explicitly allows components, so don't filter private
  // This is how targets like purchase.checkout.chat.render explicitly allow 'Chat'
  const allowedMatch = componentString.match(/AllowedComponents<([^>]+)>/);
  if (allowedMatch) {
    const innerType = allowedMatch[1].trim();
    // Use unfiltered resolution since AllowedComponents explicitly allows these
    return resolveTypeUnfiltered(innerType);
  }

  // Use the generic resolver for everything else
  // This handles: type references, Exclude<>, unions, string literals, etc.
  const result = resolveType(componentString);
  if (result.length > 0) {
    return result;
  }

  // Default to all components if we have them
  if (allComponents.length > 0) {
    return allComponents;
  }

  return ['[Unknown]'];
}

function createCombinedMapping(targetsJson) {
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
  console.log(`📁 Base path: ${config.basePath}`);

  // Generate the JSON
  const targetsJson = parseTargetsFile();

  // Create the combined JSON with reverse mappings
  const combinedJson = createCombinedMapping(targetsJson);

  // Write to output file
  const outputDir = path.dirname(config.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }
  fs.writeFileSync(config.outputPath, JSON.stringify(combinedJson, null, 2));

  console.log('✅ Generated combined targets JSON at:', config.outputPath);

  // Count the different types of entries
  const targetEntries = Object.keys(targetsJson).length;
  const apiEntries = Object.keys(combinedJson).filter(
    (key) =>
      combinedJson[key].targets && !targetsJson[key] && key.endsWith('Api'),
  ).length;
  const componentEntries = Object.keys(combinedJson).filter(
    (key) =>
      combinedJson[key].targets && !targetsJson[key] && !key.endsWith('Api'),
  ).length;

  console.log('\n📋 Summary:');
  console.log(`  Extension targets: ${targetEntries}`);
  console.log(`  API reverse mappings: ${apiEntries}`);
  console.log(`  Component reverse mappings: ${componentEntries}`);
  console.log(`  Total entries in JSON: ${Object.keys(combinedJson).length}`);
} catch (error) {
  console.error('❌ Error generating targets JSON:', error.message);
  console.error(error.stack);
  process.exit(1);
}
