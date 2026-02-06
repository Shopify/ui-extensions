import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EXTENSIONS_API_VERSION = process.argv[2] || 'unstable';

// Configuration for customer-account surface
const config = {
  basePath: path.join(
    __dirname,
    '../../../src/surfaces/customer-account',
  ),
  outputPath: path.join(
    __dirname,
    'generated/targets.json',
  ),
  componentTypesPath: 'components',
  hasComponentTypes: true,
};

// All components will be populated from StandardComponents
let allComponents = [];

// Cache for parsed API files to avoid re-reading
const apiDefinitionsCache = {};

// Cache for customer-account components
let customerAccountComponentsCache = null;

/**
 * Check if an export line has @internal marker before it
 */
function hasInternalMarker(content, matchIndex) {
  // Find the start of the current line
  const lineStart = content.lastIndexOf('\n', matchIndex - 1) + 1;
  
  // If this is the first line (no newline before it), there's no previous line
  if (lineStart === 0 && matchIndex < content.indexOf('\n')) {
    return false;
  }
  
  // Find the previous line
  const prevLineEnd = lineStart - 1;
  if (prevLineEnd < 0) {
    return false; // No previous line
  }
  
  const prevLineStart = content.lastIndexOf('\n', prevLineEnd - 1) + 1;
  const prevLine = content.slice(prevLineStart, prevLineEnd);
  
  return prevLine.includes('@internal');
}

/**
 * Extract component name from an export - checks if it's a valid component (PascalCase, not Props/Type)
 */
function isValidComponentName(name) {
  if (!name) return false;
  const trimmed = name.trim();
  return (
    trimmed.length > 0 &&
    trimmed.charAt(0) === trimmed.charAt(0).toUpperCase() &&
    !trimmed.endsWith('Props') &&
    !trimmed.includes('Type') &&
    !trimmed.startsWith('type ')
  );
}

/**
 * Recursively parse exports from a file and collect component names
 * Follows both `export * from` and `export { } from` patterns
 * 
 * @param {string} filePath - Path to the file to parse
 * @param {Set} components - Set to collect component names into
 * @param {Set} visited - Set of already visited files to prevent cycles
 * @param {string} baseDir - Base directory for resolving relative paths
 */
function parseExportsRecursively(filePath, components, visited, baseDir) {
  // Normalize path
  const normalizedPath = path.resolve(filePath);
  
  // Resolve to actual file path (handle directories and missing extensions)
  let actualPath = normalizedPath;
  
  if (fs.existsSync(actualPath)) {
    // Check if it's a directory - if so, look for index.ts
    const stats = fs.statSync(actualPath);
    if (stats.isDirectory()) {
      actualPath = path.join(actualPath, 'index.ts');
      if (!fs.existsSync(actualPath)) {
        return; // No index.ts in directory
      }
    }
  } else {
    // Path doesn't exist - try adding .ts extension or looking for index.ts
    if (fs.existsSync(normalizedPath + '.ts')) {
      actualPath = normalizedPath + '.ts';
    } else if (fs.existsSync(path.join(normalizedPath, 'index.ts'))) {
      actualPath = path.join(normalizedPath, 'index.ts');
    } else {
      return; // File not found
    }
  }
  
  // Check if already visited (using resolved actual path)
  if (visited.has(actualPath)) {
    return;
  }
  visited.add(actualPath);

  try {
    const content = fs.readFileSync(actualPath, 'utf-8');
    const currentDir = path.dirname(actualPath);

    // Pattern 1: export * from './path'
    const starExportRegex = /export\s*\*\s*from\s*'([^']+)'/g;
    let match;
    while ((match = starExportRegex.exec(content)) !== null) {
      // Check for @internal marker
      if (hasInternalMarker(content, match.index)) {
        continue;
      }

      const exportPath = match[1];
      
      // If it's a relative path, recurse into it
      if (exportPath.startsWith('.')) {
        const resolvedPath = path.resolve(currentDir, exportPath);
        parseExportsRecursively(resolvedPath, components, visited, baseDir);
      }
      // If it's an external module path (like '../../checkout/components'), 
      // try to parse named exports from that module
      else if (!exportPath.startsWith('@')) {
        const resolvedPath = path.resolve(currentDir, exportPath);
        parseExportsRecursively(resolvedPath, components, visited, baseDir);
      }
    }

    // Pattern 2: export { Name1, Name2, ... } from './path'
    const namedExportRegex = /export\s*\{([\s\S]*?)\}\s*from\s*'([^']+)'/g;
    while ((match = namedExportRegex.exec(content)) !== null) {
      const exportContent = match[1];
      const exportPath = match[2];
      
      // Check for @internal marker
      if (hasInternalMarker(content, match.index)) {
        continue;
      }

      // Parse the named exports
      const parts = exportContent.split(',');
      for (const part of parts) {
        const trimmed = part.trim();
        // Skip type exports
        if (trimmed.startsWith('type ')) {
          continue;
        }
        // Extract the component name (handle 'Name as Alias' syntax)
        const componentName = trimmed.split(/\s+/)[0];
        if (isValidComponentName(componentName)) {
          components.add(componentName);
        }
      }
    }

    // Pattern 3: export { Name } (direct exports, likely from same directory)
    // These are usually re-exports from a component's index.ts
    const directExportRegex = /export\s*\{\s*(\w+)\s*\}(?!\s*from)/g;
    while ((match = directExportRegex.exec(content)) !== null) {
      if (hasInternalMarker(content, match.index)) {
        continue;
      }
      const componentName = match[1];
      if (isValidComponentName(componentName)) {
        components.add(componentName);
      }
    }

  } catch (error) {
    // Silently skip files that can't be read
  }
}

/**
 * Parse components from customer-account's own component exports
 * Recursively follows all export statements to build complete component list
 */
function parseCustomerAccountComponents() {
  // Return cached value if available
  if (customerAccountComponentsCache !== null) {
    return customerAccountComponentsCache;
  }

  try {
    const components = new Set();
    const visited = new Set();
    const componentsDir = path.join(config.basePath, 'components');
    const indexPath = path.join(componentsDir, 'index.ts');

    // Start recursive parsing from the components index
    if (fs.existsSync(indexPath)) {
      parseExportsRecursively(indexPath, components, visited, componentsDir);
    }

    if (components.size > 0) {
      customerAccountComponentsCache = Array.from(components);
      console.log(`Parsed ${customerAccountComponentsCache.length} customer-account components (from ${visited.size} files)`);
      return customerAccountComponentsCache;
    }

    customerAccountComponentsCache = ['[CustomerAccountComponentsNotFound]'];
    return customerAccountComponentsCache;
  } catch (error) {
    console.error('Error parsing customer-account components:', error);
    customerAccountComponentsCache = ['[CustomerAccountComponentsError]'];
    return customerAccountComponentsCache;
  }
}

// Keep parseCheckoutComponents for backward compatibility with AnyComponent references
let checkoutComponentsCache = null;

/**
 * Parse components from checkout's components.ts file (for AnyComponent references)
 */
function parseCheckoutComponents() {
  if (checkoutComponentsCache !== null) {
    return checkoutComponentsCache;
  }

  try {
    const checkoutBasePath = path.join(
      __dirname,
      '../../../src/surfaces/checkout',
    );
    const componentsPath = path.join(checkoutBasePath, 'components.ts');

    if (fs.existsSync(componentsPath)) {
      const content = fs.readFileSync(componentsPath, 'utf-8');
      
      const exportMatches = content.matchAll(/export\s*\{\s*(\w+)\s*\}\s*from/g);
      const components = [];
      
      for (const match of exportMatches) {
        const componentName = match[1];
        if (!componentName.endsWith('Props') && 
            !componentName.includes('Type') &&
            componentName.charAt(0) === componentName.charAt(0).toUpperCase()) {
          components.push(componentName);
        }
      }
      
      if (components.length > 0) {
        checkoutComponentsCache = components;
        return checkoutComponentsCache;
      }
    }

    checkoutComponentsCache = ['[CheckoutComponentsNotFound]'];
    return checkoutComponentsCache;
  } catch (error) {
    console.error('Error parsing checkout components:', error);
    checkoutComponentsCache = ['[CheckoutComponentsError]'];
    return checkoutComponentsCache;
  }
}

/**
 * Parse a string union type from a component file and resolve type references
 * e.g., export type StandardComponents = AnyComponent | 'Avatar' | ... (with AnyComponent imported)
 */
function parseStringUnionType(filePath, componentTypesMap = {}) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract all quoted component names from the file (but not from import statements)
    // Remove import lines first
    const contentWithoutImports = content.replace(/^import.*?;$/gm, '');
    const componentNames = contentWithoutImports.match(/'([^']+)'/g);
    const quotedComponents = componentNames
      ? componentNames.map((name) => name.replace(/'/g, ''))
      : [];
    
    // Check if the type references other types (like StandardComponents or AnyComponent)
    // Look for patterns like: StandardComponents | 'OtherComponent'
    const typeRefPattern = /export type \w+ =\s*([\s\S]*?);/;
    const typeDefMatch = content.match(typeRefPattern);
    
    if (typeDefMatch) {
      const typeDef = typeDefMatch[1];
      // Find references to other types (capitalized words that aren't in quotes)
      const typeRefs = typeDef.match(/\b([A-Z]\w+(?:Components?)?)\b/g);
      
      if (typeRefs) {
        const allComponents = [...quotedComponents];
        
        for (const typeRef of typeRefs) {
          // Check if this is AnyComponent - use customer-account's own components
          if (typeRef === 'AnyComponent') {
            const customerAccountComponents = parseCustomerAccountComponents();
            allComponents.push(...customerAccountComponents);
          }
          // If this type reference exists in our map, include its components
          else if (componentTypesMap[typeRef]) {
            allComponents.push(...componentTypesMap[typeRef]);
          }
        }
        
        // Remove duplicates
        return [...new Set(allComponents)];
      }
    }
    
    return quotedComponents.length > 0 ? quotedComponents : null;
  } catch (error) {
    console.error(`Error reading component file ${filePath}:`, error.message);
  }
  return null;
}

/**
 * Parse component types from files in the components directory
 * Uses a two-pass approach:
 * 1. First pass: Parse all component types that only contain quoted strings
 * 2. Second pass: Parse types that reference other types (like StandardComponents)
 */
function parseComponentTypesFromFiles() {
  if (!config.hasComponentTypes || !config.componentTypesPath) {
    return {};
  }

  const componentsPath = path.join(config.basePath, config.componentTypesPath);
  const componentTypesMap = {};

  try {
    // Look for all TypeScript files in the components directory
    const files = fs.readdirSync(componentsPath);
    const tsFiles = files.filter(
      (file) => file.endsWith('.ts') && !file.endsWith('.d.ts'),
    );

    // First pass: Parse files with only quoted strings
    for (const file of tsFiles) {
      const filePath = path.join(componentsPath, file);
      const componentTypeName = file.replace('.ts', '');

      // Skip certain files
      if (
        componentTypeName === 'shared' ||
        componentTypeName === 'components'
      ) {
        continue;
      }

      const components = parseStringUnionType(filePath, {});
      if (components && components.length > 0) {
        componentTypesMap[componentTypeName] = components;

        // If this is StandardComponents, use it as the base
        if (componentTypeName === 'StandardComponents') {
          allComponents = components.sort();
        }
      }
    }

    // Second pass: Re-parse files that might reference other types
    for (const file of tsFiles) {
      const filePath = path.join(componentsPath, file);
      const componentTypeName = file.replace('.ts', '');

      // Skip certain files
      if (
        componentTypeName === 'shared' ||
        componentTypeName === 'components'
      ) {
        continue;
      }

      const components = parseStringUnionType(filePath, componentTypesMap);
      if (components && components.length > 0) {
        componentTypesMap[componentTypeName] = components;
      }
    }
  } catch (error) {
    console.error('Error parsing component types:', error.message);
  }

  return componentTypesMap;
}

/**
 * Parse inline component type definitions from targets.ts
 * Handles types like: type AllComponents = Components[keyof Components]
 */
function parseInlineComponentTypes(content, componentTypesMap) {
  // Match any type definition: type <NAME> = Components[keyof Components]
  // This pattern means "all components from the local Components type"
  const regex = /type\s+(\w+)\s*=\s*Components\[keyof\s+Components\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const typeName = match[1];
    // Use customer-account's own components (not all checkout components)
    const customerAccountComponents = parseCustomerAccountComponents();
    if (customerAccountComponents.length > 0) {
      componentTypesMap[typeName] = customerAccountComponents;
      console.log(`Parsed ${typeName}: ${customerAccountComponents.length} components (from customer-account exports)`);
    }
  }
}

function parseTargetsFile() {
  const targetsFilePath = path.join(config.basePath, 'targets.ts');

  const content = fs.readFileSync(targetsFilePath, 'utf-8');

  // Parse component type definitions
  const componentTypesMap = parseComponentTypesFromFiles();

  // Also parse inline component types from targets.ts (like AllComponents)
  parseInlineComponentTypes(content, componentTypesMap);

  const targets = {};

  // Look for all interfaces that might contain RenderExtension targets
  const interfaceNames = [
    'RenderExtensionTargets',
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

    if (match && match[1].includes('RenderExtension<')) {
      parseTargetsFromInterfaceBody(match[1], targets, componentTypesMap);
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
    let startPos = startMatch.index + startMatch[0].length;
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
 * Handles various patterns: type refs, unions, Exclude, AllowedComponents, etc.
 */
function parseComponents(componentString, componentTypesMap) {
  // Normalize whitespace
  componentString = componentString.replace(/\s+/g, ' ').trim();

  // Handle AnyCheckoutComponentExcept<'Component1' | 'Component2'>
  const checkoutExceptMatch = componentString.match(/AnyCheckoutComponentExcept<([^>]+)>/);
  if (checkoutExceptMatch) {
    const excludedUnion = checkoutExceptMatch[1];
    // Get all checkout components
    const allCheckoutComponents = parseCheckoutComponents();
    // Parse the union of excluded components
    const excludedComponents = parseUnionOfStrings(excludedUnion);
    // Filter out the excluded components
    return allCheckoutComponents.filter((c) => !excludedComponents.includes(c));
  }

  // Handle Exclude<BaseType, ExcludedComponent>
  const excludeMatch = componentString.match(/Exclude<(\w+),\s*'([^']+)'>/);
  if (excludeMatch) {
    const baseType = excludeMatch[1];
    const excluded = excludeMatch[2];
    const baseComponents = resolveComponentType(baseType, componentTypesMap);
    return baseComponents.filter((c) => c !== excluded);
  }

  // Handle AllowedComponents<ComponentType>
  const allowedMatch = componentString.match(/AllowedComponents<([^>]+)>/);
  if (allowedMatch) {
    const innerType = allowedMatch[1].trim();
    return resolveComponentType(innerType, componentTypesMap);
  }

  // Check if it's a direct type reference
  const result = resolveComponentType(componentString, componentTypesMap);
  if (result.length > 0) {
    return result;
  }

  // Default to all components if we have them
  if (allComponents.length > 0) {
    return allComponents;
  }

  return ['[Unknown]'];
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

/**
 * Resolve a component type name to a list of component names
 */
function resolveComponentType(typeName, componentTypesMap) {
  typeName = typeName.trim();

  // Check if it's in our component types map
  if (componentTypesMap[typeName]) {
    return componentTypesMap[typeName];
  }

  // Handle special checkout types
  // For customer-account, AnyComponent refers to customer-account's own component set
  if (typeName === 'AnyComponent') {
    return parseCustomerAccountComponents();
  }
  // AnyCheckoutComponent and AnyThankYouComponent refer to full checkout component set
  if (typeName === 'AnyCheckoutComponent' || typeName === 'AnyThankYouComponent') {
    return parseCheckoutComponents();
  }

  // Check if it's a quoted string literal
  const quotedMatch = typeName.match(/^'([^']+)'$/);
  if (quotedMatch) {
    return [quotedMatch[1]];
  }

  return [];
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
  console.log('\n🔍 Generating targets JSON for customer-account surface');
  console.log(`📁 Base path: ${config.basePath}`);

  // Generate the JSON
  const targetsJson = parseTargetsFile();

  // Create the combined JSON with reverse mappings
  const combinedJson = createCombinedMapping(targetsJson);

  // Write to output file
  const outputDir = path.dirname(config.outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(config.outputPath, JSON.stringify(combinedJson, null, 2));

  console.log('✅ Generated combined targets JSON at:', config.outputPath);
  
  // Count the different types of entries
  const targetEntries = Object.keys(targetsJson).length;
  const apiEntries = Object.keys(combinedJson).filter(
    (key) => combinedJson[key].targets && !targetsJson[key] && key.endsWith('Api')
  ).length;
  const componentEntries = Object.keys(combinedJson).filter(
    (key) => combinedJson[key].targets && !targetsJson[key] && !key.endsWith('Api')
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
