/* eslint-env node */
/* eslint no-console: "off" */
import {readdir, readFile} from 'fs/promises';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {execSync} from 'child_process';
import {extractDetailedComponentProps} from './type-analysis.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load shared type definitions from ui-api-design
 */
async function loadSharedCanonicalTypes() {
  const sharedTypes = {};
  try {
    const sharedDir = join(
      __dirname,
      '../../node_modules/@shopify/ui-api-design/dist/shared',
    );
    const sharedFiles = await readdir(sharedDir);

    // Load all .d.ts files from the shared directory
    for (const file of sharedFiles) {
      if (file.endsWith('.d.ts')) {
        try {
          const filePath = join(sharedDir, file);
          const content = await readFile(filePath, 'utf-8');
          const fileName = file.replace('.d.ts', '');
          sharedTypes[fileName] = content;
          console.log(`📋 Loaded shared type: ${fileName}`);
        } catch (error) {
          console.warn(
            `⚠️  Could not load shared type ${file}:`,
            error.message,
          );
        }
      }
    }
  } catch (error) {
    console.warn(
      '⚠️  Could not load shared canonical types directory:',
      error.message,
    );
  }

  return sharedTypes;
}

/**
 * Merge component content with shared types for proper resolution
 */
function mergeContentWithSharedTypes(componentContent, sharedTypes) {
  let mergedContent = componentContent;

  // Add all shared type definitions at the beginning
  for (const [fileName, content] of Object.entries(sharedTypes)) {
    if (content) {
      // Remove import statements for this shared file and add the actual type definitions
      const importRegex = new RegExp(
        `import\\s*{\\s*[^}]*\\s*}\\s*from\\s*['"][^'"]*${fileName}['"];?\\s*`,
        'g',
      );
      mergedContent = mergedContent.replace(importRegex, '');
      mergedContent = `${content}\n${mergedContent}`;
    }
  }

  return mergedContent;
}

/**
 * Get canonical list of components from ui-api-design package
 */
export async function getCanonicalComponents() {
  try {
    console.log(
      '📦 Installing/updating @shopify/ui-api-design to latest version...',
    );

    // Always install the latest version to ensure we have the most up-to-date components
    execSync('npm install @shopify/ui-api-design@latest', {
      stdio: 'inherit',
      cwd: `${__dirname}/../..`,
    });

    // Read the components from the installed package
    const componentsDir = join(
      __dirname,
      '../../node_modules/@shopify/ui-api-design/dist/components',
    );
    const componentDirs = await readdir(componentsDir, {withFileTypes: true});

    return componentDirs
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name)
      .sort();
  } catch (error) {
    console.warn(
      '⚠️  Could not install/read ui-api-design components:',
      error.message,
    );
    return [];
  }
}

/**
 * Get canonical component specifications from ui-api-design
 */
export async function getCanonicalComponentSpecs() {
  try {
    const canonicalSpecs = {};
    const componentsDir = join(
      __dirname,
      '../../node_modules/@shopify/ui-api-design/dist/components',
    );

    // First, load shared type definitions
    const sharedTypes = await loadSharedCanonicalTypes();

    const componentDirs = await readdir(componentsDir, {withFileTypes: true});

    for (const dir of componentDirs) {
      if (dir.isDirectory()) {
        const componentSpecPath = join(componentsDir, dir.name, 'index.d.ts');
        try {
          const specContent = await readFile(componentSpecPath, 'utf-8');
          const componentName = dir.name;

          // Merge component content with shared types for resolution
          const mergedContent = mergeContentWithSharedTypes(
            specContent,
            sharedTypes,
          );

          const specDetails = extractDetailedComponentProps(
            mergedContent,
            componentName,
          );
          if (Object.keys(specDetails).length > 0) {
            canonicalSpecs[componentName] = specDetails;
          }
        } catch (error) {
          // Component spec file doesn't exist or can't be read
          console.warn(
            `⚠️  Could not read spec for ${dir.name}:`,
            error.message,
          );
        }
      }
    }

    return canonicalSpecs;
  } catch (error) {
    console.warn(
      '⚠️  Could not load canonical component specs:',
      error.message,
    );
    return {};
  }
}

/**
 * Build enhanced props comparison data with detailed information
 */
export function buildPropsComparison(
  canonicalComponents,
  canonicalSpecs,
  surfaceComponents,
) {
  const componentPropsComparison = {};
  const allSurfaces = Object.keys(surfaceComponents).filter(
    (key) => !key.endsWith('_props'),
  );

  for (const component of canonicalComponents) {
    componentPropsComparison[component] = {
      canonical: canonicalSpecs[component] || {},
      surfaces: {},
    };

    for (const surface of allSurfaces) {
      const surfacePropsKey = `${surface}_props`;
      const surfaceProps = surfaceComponents[surfacePropsKey];

      if (surfaceProps && surfaceProps[component]) {
        componentPropsComparison[component].surfaces[surface] =
          surfaceProps[component];
      } else {
        componentPropsComparison[component].surfaces[surface] = {};
      }
    }
  }

  return componentPropsComparison;
}

/**
 * Add unimplemented components to the mapping
 */
export function addUnimplementedComponents(
  canonicalComponents,
  componentToSurfaces,
) {
  for (const component of canonicalComponents) {
    if (!componentToSurfaces[component]) {
      componentToSurfaces[component] = []; // No surfaces implement this component yet
    }
  }

  return componentToSurfaces;
}
