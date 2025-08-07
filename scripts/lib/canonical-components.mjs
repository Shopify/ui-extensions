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

    const componentDirs = await readdir(componentsDir, {withFileTypes: true});

    for (const dir of componentDirs) {
      if (dir.isDirectory()) {
        const componentSpecPath = join(componentsDir, dir.name, 'index.d.ts');
        try {
          const specContent = await readFile(componentSpecPath, 'utf-8');
          const componentName = dir.name;
          const specDetails = extractDetailedComponentProps(
            specContent,
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
