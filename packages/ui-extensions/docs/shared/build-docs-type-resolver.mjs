/* eslint-disable no-console */
/* eslint-env node */
/**
 * Shared type resolver for build-docs-targets-json scripts
 *
 * This module provides utilities for parsing TypeScript type definitions
 * and resolving component types, including handling of:
 * - String literals: 'ComponentName'
 * - Type references: TypeName
 * - Union types: A | B | C
 * - Exclude types: Exclude<Base, Excluded>
 * - Array types: (typeof ARRAY)[number]
 * - @private JSDoc tags for excluding private components
 */

import fs from 'fs';

/**
 * Creates a type resolver instance for a specific surface
 * @param {string} sharedTsPath - Path to the shared.ts file for the surface
 * @returns {Object} Type resolver with methods for resolving types
 */
export function createTypeResolver(sharedTsPath) {
  // Cache for type definitions parsed from shared.ts
  let typeDefinitionsCache = null;
  const resolvedTypesCache = {};
  // Set of type names that are marked with @private JSDoc tag
  let privateTypesCache = null;

  /**
   * Parse all type definitions from shared.ts
   * Returns a map of type name -> type definition string
   * Also detects @private JSDoc tags to identify private types
   */
  function parseTypeDefinitions() {
    if (typeDefinitionsCache !== null) {
      return typeDefinitionsCache;
    }

    typeDefinitionsCache = {};
    privateTypesCache = new Set();

    try {
      if (!fs.existsSync(sharedTsPath)) {
        return typeDefinitionsCache;
      }

      const content = fs.readFileSync(sharedTsPath, 'utf-8');

      // Parse const arrays (like SUPPORTED_COMPONENTS) - store as resolved arrays
      const constArrayRegex =
        /export const (\w+)\s*=\s*\[([\s\S]*?)\]\s*as const/g;
      let constMatch;
      while ((constMatch = constArrayRegex.exec(content)) !== null) {
        const constName = constMatch[1];
        const arrayContent = constMatch[2];
        const components = arrayContent.match(/'([^']+)'/g);
        if (components) {
          typeDefinitionsCache[constName] = components.map((component) =>
            component.replace(/'/g, ''),
          );
        }
      }

      // Parse all type definitions: export type TypeName = Definition;
      // Also check for @private JSDoc comments preceding the type
      const typeRegex = /export type (\w+)(?:<[^>]+>)?\s*=\s*/g;
      let match;

      while ((match = typeRegex.exec(content)) !== null) {
        const typeName = match[1];
        const startPos = match.index + match[0].length;

        // Check for @private in JSDoc comment before this type definition
        // Look backwards from the match to find a preceding JSDoc comment
        const beforeMatch = content.substring(0, match.index);
        const lastJsDocEnd = beforeMatch.lastIndexOf('*/');
        if (lastJsDocEnd !== -1) {
          // Check if there's no other code between the JSDoc and this type
          const between = beforeMatch.substring(lastJsDocEnd + 2).trim();
          if (between === '') {
            // Find the start of this JSDoc comment
            const jsDocStart = beforeMatch.lastIndexOf('/**');
            if (jsDocStart !== -1) {
              const jsDocContent = beforeMatch.substring(
                jsDocStart,
                lastJsDocEnd + 2,
              );
              // Check if this JSDoc contains @private tag
              if (jsDocContent.includes('@private')) {
                privateTypesCache.add(typeName);
              }
            }
          }
        }

        // Find the end of the type definition (semicolon at depth 0)
        let endPos = startPos;
        let depth = 0;
        let inString = false;

        for (let i = startPos; i < content.length; i++) {
          const char = content[i];
          const prevChar = i > 0 ? content[i - 1] : '';

          if (char === "'" && prevChar !== '\\') {
            inString = !inString;
          }

          if (!inString) {
            if (char === '<' || char === '(' || char === '{' || char === '[') {
              depth++;
            } else if (
              char === '>' ||
              char === ')' ||
              char === '}' ||
              char === ']'
            ) {
              depth--;
            } else if (char === ';' && depth === 0) {
              endPos = i;
              break;
            }
          }
        }

        const definition = content.substring(startPos, endPos).trim();
        typeDefinitionsCache[typeName] = definition;
      }

      return typeDefinitionsCache;
    } catch (error) {
      console.warn('Warning: Failed to parse type definitions:', error.message);
      return typeDefinitionsCache;
    }
  }

  /**
   * Check if a type is marked as @private
   */
  function isPrivateType(typeName) {
    // Ensure type definitions are parsed (which also populates privateTypesCache)
    parseTypeDefinitions();
    return privateTypesCache && privateTypesCache.has(typeName);
  }

  /**
   * Get the components from @private types (to exclude them from other types)
   */
  function getPrivateComponents() {
    parseTypeDefinitions();
    const privateComponents = [];
    if (privateTypesCache) {
      for (const typeName of privateTypesCache) {
        const resolved = resolveTypeInternal(typeName, false); // Don't filter private when getting private components
        privateComponents.push(...resolved);
      }
    }
    return privateComponents;
  }

  /**
   * Internal type resolver - can optionally skip filtering of @private components
   * @param {string} typeExpr - The type expression to resolve
   * @param {boolean} filterPrivate - Whether to filter out @private components (default: true)
   */
  function resolveTypeInternal(typeExpr, filterPrivate = true) {
    if (!typeExpr) return [];

    const trimmedTypeExpr = typeExpr.trim();

    // Check cache first (but only for filtered results)
    const cacheKey = filterPrivate
      ? trimmedTypeExpr
      : `__unfiltered__${trimmedTypeExpr}`;
    if (resolvedTypesCache[cacheKey]) {
      return [...resolvedTypesCache[cacheKey]];
    }

    const typeDefs = parseTypeDefinitions();
    let result = [];

    // Handle string literal: 'ComponentName'
    const stringLiteralMatch = trimmedTypeExpr.match(/^'([^']+)'$/);
    if (stringLiteralMatch) {
      result = [stringLiteralMatch[1]];
      resolvedTypesCache[cacheKey] = result;
      return [...result];
    }

    // IMPORTANT: Check for unions FIRST before other patterns
    // This ensures we don't match partial patterns within a union
    if (trimmedTypeExpr.includes('|')) {
      const parts = splitByTopLevelPipe(typeExpr);
      // Only treat as union if we actually got multiple parts
      if (parts.filter((part) => part.trim()).length > 1) {
        for (const part of parts) {
          const trimmed = part.trim();
          if (trimmed) {
            result.push(...resolveTypeInternal(trimmed, filterPrivate));
          }
        }
        // Deduplicate
        result = [...new Set(result)];
        resolvedTypesCache[cacheKey] = result;
        return [...result];
      }
    }

    // Handle (typeof ARRAY_NAME)[number] - anchored to match entire expression
    const typeofMatch = trimmedTypeExpr.match(/^\(typeof (\w+)\)\[number\]$/);
    if (typeofMatch) {
      const arrayName = typeofMatch[1];
      if (Array.isArray(typeDefs[arrayName])) {
        result = [...typeDefs[arrayName]];
        resolvedTypesCache[cacheKey] = result;
        return [...result];
      }
    }

    // Handle Exclude<BaseType, ExcludedType>
    const excludeMatch = trimmedTypeExpr.match(/^Exclude<(.+)>$/);
    if (excludeMatch) {
      const innerContent = excludeMatch[1];
      const parts = splitByTopLevelComma(innerContent);
      if (parts.length >= 2) {
        const baseType = parts[0].trim();
        const excludedType = parts[1].trim();

        const baseComponents = resolveTypeInternal(baseType, filterPrivate);
        const excludedComponents = resolveTypeInternal(
          excludedType,
          filterPrivate,
        );

        result = baseComponents.filter(
          (component) => !excludedComponents.includes(component),
        );
        resolvedTypesCache[cacheKey] = result;
        return [...result];
      }
    }

    // Handle type reference (look up in definitions and resolve recursively)
    if (/^\w+$/.test(trimmedTypeExpr)) {
      // If this type itself is marked @private, return empty (unless we're not filtering)
      if (filterPrivate && isPrivateType(trimmedTypeExpr)) {
        resolvedTypesCache[cacheKey] = [];
        return [];
      }

      const definition = typeDefs[trimmedTypeExpr];
      if (Array.isArray(definition)) {
        // It's a pre-resolved array (like SUPPORTED_COMPONENTS)
        result = [...definition];
      } else if (typeof definition === 'string') {
        // Recursively resolve the definition
        result = resolveTypeInternal(definition, filterPrivate);
      }
      resolvedTypesCache[cacheKey] = result;
      return [...result];
    }

    // If we can't resolve it, return empty
    resolvedTypesCache[cacheKey] = result;
    return [...result];
  }

  /**
   * Resolve a type expression to component strings
   * Automatically excludes components from types marked with @private JSDoc tag
   * @param {string} typeExpr - The type expression to resolve
   * @returns {string[]} Array of component names
   */
  function resolveType(typeExpr) {
    // Get result with private components filtered out
    let result = resolveTypeInternal(typeExpr, true);

    // Also filter out any components that come from @private types
    const privateComponents = getPrivateComponents();
    if (privateComponents.length > 0) {
      result = result.filter(
        (component) => !privateComponents.includes(component),
      );
    }

    return result;
  }

  /**
   * Resolve a type expression WITHOUT filtering @private components
   * Use this for AllowedComponents<> which explicitly allows private components
   * @param {string} typeExpr - The type expression to resolve
   * @returns {string[]} Array of component names
   */
  function resolveTypeUnfiltered(typeExpr) {
    return resolveTypeInternal(typeExpr, false);
  }

  /**
   * Get the parsed type definitions (for debugging or advanced use)
   */
  function getTypeDefinitions() {
    return parseTypeDefinitions();
  }

  /**
   * Get the set of private type names
   */
  function getPrivateTypeNames() {
    parseTypeDefinitions();
    return privateTypesCache ? new Set(privateTypesCache) : new Set();
  }

  return {
    resolveType,
    resolveTypeUnfiltered,
    getTypeDefinitions,
    getPrivateTypeNames,
    getPrivateComponents,
    isPrivateType,
  };
}

/**
 * Split a string by top-level pipe (|) characters, respecting nesting
 */
export function splitByTopLevelPipe(str) {
  const parts = [];
  let current = '';
  let depth = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '<' || char === '(' || char === '{' || char === '[') {
      depth++;
      current += char;
    } else if (char === '>' || char === ')' || char === '}' || char === ']') {
      depth--;
      current += char;
    } else if (char === '|' && depth === 0) {
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

/**
 * Split a string by top-level comma (,) characters, respecting nesting
 */
export function splitByTopLevelComma(str) {
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
