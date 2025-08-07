/* eslint-env node */
/* eslint no-console: "off" */
import {readdir, readFile, access} from 'fs/promises';
import {join} from 'path';
import {convertKebabToPascal, SURFACES_DIR} from './config.mjs';

/**
 * Find all component files across surfaces
 */
export async function findComponentsFiles() {
  const surfaces = await readdir(SURFACES_DIR, {withFileTypes: true});
  const componentFiles = [];

  for (const surface of surfaces) {
    if (surface.isDirectory()) {
      const surfacePath = join(SURFACES_DIR, surface.name);

      // Check for components.d.ts in the surface root
      const rootComponentsFile = join(surfacePath, 'components.d.ts');
      try {
        await access(rootComponentsFile);
        componentFiles.push({
          surface: surface.name,
          path: rootComponentsFile,
          type: 'web-components',
        });
      } catch {
        // Check for components.d.ts in components subdirectory
        const subComponentsFile = join(
          surfacePath,
          'components',
          'components.d.ts',
        );
        try {
          await access(subComponentsFile);
          componentFiles.push({
            surface: surface.name,
            path: subComponentsFile,
            type: 'web-components',
          });
        } catch {
          console.warn(
            `⚠️  No components.d.ts found for surface: ${surface.name}`,
          );
        }
      }

      // Special case: customer-account can also use checkout components
      if (surface.name === 'customer-account') {
        const checkoutComponentsFile = join(
          SURFACES_DIR,
          'checkout',
          'components',
          'components.d.ts',
        );
        try {
          await access(checkoutComponentsFile);
          componentFiles.push({
            surface: surface.name,
            path: checkoutComponentsFile,
            type: 'web-components',
            sourceNote: 'from checkout',
          });
        } catch {
          console.warn(
            `⚠️  Could not find checkout components for customer-account`,
          );
        }
      }
    }
  }

  return componentFiles;
}

/**
 * Extract web components from TypeScript declaration content
 */
export function extractWebComponents(content) {
  const components = new Set();

  // Method 1: Extract from HTMLElementTagNameMap
  const tagNameMapRegex =
    /interface\s+HTMLElementTagNameMap\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/gs;
  const tagNameMatches = content.match(tagNameMapRegex);

  if (tagNameMatches) {
    for (const match of tagNameMatches) {
      const componentRegex = /\['s-([^']+)'\]\s*:\s*\w+Element/g;
      let componentMatch;
      while ((componentMatch = componentRegex.exec(match)) !== null) {
        const kebabName = componentMatch[1];
        const pascalName = convertKebabToPascal(kebabName);
        components.add(pascalName);
      }
    }
  }

  // Method 2: Extract from JSX IntrinsicElements interface (both global and preact module)
  const jsxInterfaceRegex =
    /interface\s+IntrinsicElements\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/gs;
  const jsxMatches = content.match(jsxInterfaceRegex);

  if (jsxMatches) {
    for (const match of jsxMatches) {
      // Extract both 's-component-name': and ['s-component-name']: patterns
      const componentRegex1 = /\['s-([^']+)'\]\s*:\s*[^;,\n}]+/g;
      const componentRegex2 = /'s-([^']+)'\s*:\s*[^;,\n}]+/g;

      let componentMatch;

      // Pattern 1: ['s-component-name']: ComponentJSXProps
      while ((componentMatch = componentRegex1.exec(match)) !== null) {
        const kebabName = componentMatch[1];
        const pascalName = convertKebabToPascal(kebabName);
        components.add(pascalName);
      }

      // Pattern 2: 's-component-name': ComponentJSXProps
      while ((componentMatch = componentRegex2.exec(match)) !== null) {
        const kebabName = componentMatch[1];
        const pascalName = convertKebabToPascal(kebabName);
        components.add(pascalName);
      }
    }
  }

  // Method 3: Extract from tagName constant declarations (admin and checkout pattern)
  const tagNameRegex =
    /declare\s+const\s+tagName\$\w+\s*=\s*['"](s-[^'"]+)['"]/g;
  let tagNameMatch;
  while ((tagNameMatch = tagNameRegex.exec(content)) !== null) {
    const fullTagName = tagNameMatch[1];
    const kebabName = fullTagName.replace('s-', '');
    const pascalName = convertKebabToPascal(kebabName);
    components.add(pascalName);
  }

  return Array.from(components).sort();
}

/**
 * Process surface files and extract component information
 */
export async function processSurfaces(
  componentFiles,
  canonicalComponents,
  extractAllDetailedComponentProps,
) {
  const surfaceComponents = {};
  const componentToSurfaces = {};

  // Initialize all surfaces
  for (const {surface} of componentFiles) {
    if (!surfaceComponents[surface]) {
      surfaceComponents[surface] = [];
    }
  }

  // For each surface, check which canonical components are implemented
  for (const {surface, path, type, sourceNote} of componentFiles) {
    console.log(
      `📁 Processing ${surface} (${type})${
        sourceNote ? ` ${sourceNote}` : ''
      }...`,
    );

    let implementedComponents = [];

    try {
      if (type === 'web-components') {
        const content = await readFile(path, 'utf-8');
        const extractedComponents = extractWebComponents(content);

        // Only include components that exist in the canonical list
        implementedComponents = extractedComponents.filter((component) =>
          canonicalComponents.includes(component),
        );

        // Extract detailed props for implemented components
        const surfaceProps = extractAllDetailedComponentProps(
          content,
          implementedComponents,
        );

        // Store props in the surface data (we'll need this later for comparison)
        if (!surfaceComponents[`${surface}_props`]) {
          surfaceComponents[`${surface}_props`] = {};
        }
        Object.assign(surfaceComponents[`${surface}_props`], surfaceProps);
      }

      // Merge components, avoiding duplicates
      const existingComponents = new Set(surfaceComponents[surface]);
      for (const component of implementedComponents) {
        if (!existingComponents.has(component)) {
          surfaceComponents[surface].push(component);
          existingComponents.add(component);
        }
      }

      // Sort the final list
      surfaceComponents[surface].sort();

      console.log(
        `   Found ${
          implementedComponents.length
        } implemented components: ${implementedComponents
          .slice(0, 10)
          .join(', ')}${implementedComponents.length > 10 ? '...' : ''}`,
      );

      // Build reverse mapping
      for (const component of implementedComponents) {
        if (!componentToSurfaces[component]) {
          componentToSurfaces[component] = [];
        }
        if (!componentToSurfaces[component].includes(surface)) {
          componentToSurfaces[component].push(surface);
        }
      }
    } catch (error) {
      console.error(`❌ Error processing ${surface}:`, error.message);
    }
  }

  return {surfaceComponents, componentToSurfaces};
}
