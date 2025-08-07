#!/usr/bin/env node
/* eslint-env node */
/* eslint no-console: "off" */

import {writeFile, mkdir} from 'fs/promises';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {execSync} from 'child_process';

// Import our modular components
import {UI_API_DESIGN_BASE_URL} from './lib/config.mjs';
import {extractAllDetailedComponentProps} from './lib/type-analysis.mjs';
import {
  findComponentsFiles,
  processSurfaces,
} from './lib/component-extraction.mjs';
import {
  getCanonicalComponents,
  getCanonicalComponentSpecs,
  buildPropsComparison,
  addUnimplementedComponents,
} from './lib/canonical-components.mjs';
import {generateHTMLPage} from './lib/html-generation.mjs';
import {generateComponentPages} from './lib/component-pages.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Clean up props data from main surfaces object for cleaner output
 */
function cleanSurfacesData(surfaceComponents) {
  const cleanSurfaces = {};
  for (const [key, value] of Object.entries(surfaceComponents)) {
    if (!key.endsWith('_props')) {
      cleanSurfaces[key] = value;
    }
  }
  return cleanSurfaces;
}

/**
 * Main execution function
 */
async function main() {
  console.log(
    '🔍 Getting canonical component list and specs from ui-api-design...\n',
  );

  // Get the canonical list of components and their detailed specs from ui-api-design
  const canonicalComponents = await getCanonicalComponents();
  console.log(
    `📦 Found ${canonicalComponents.length} canonical components from ui-api-design`,
  );

  // Get detailed specifications for each component
  const canonicalSpecs = await getCanonicalComponentSpecs();
  console.log(
    `📋 Loaded detailed specs for ${
      Object.keys(canonicalSpecs).length
    } components`,
  );

  console.log('\n🔍 Scanning surfaces for component implementations...\n');

  const componentFiles = await findComponentsFiles();

  // Process all surfaces and extract component information
  const {surfaceComponents, componentToSurfaces} = await processSurfaces(
    componentFiles,
    canonicalComponents,
    extractAllDetailedComponentProps,
  );

  // Add unimplemented components to the mapping
  const completeComponentToSurfaces = addUnimplementedComponents(
    canonicalComponents,
    componentToSurfaces,
  );

  // Build enhanced props comparison data with detailed information
  const componentPropsComparison = buildPropsComparison(
    canonicalComponents,
    canonicalSpecs,
    surfaceComponents,
  );

  // Clean up props data from main surfaces object for cleaner output
  const cleanSurfaces = cleanSurfacesData(surfaceComponents);

  // Generate the master list with enhanced prop information
  const masterList = {
    surfaces: cleanSurfaces,
    components: completeComponentToSurfaces,
    props: componentPropsComparison,
    metadata: {
      totalComponents: canonicalComponents.length, // Total canonical components
      implementedComponents: Object.keys(completeComponentToSurfaces).filter(
        (comp) => completeComponentToSurfaces[comp].length > 0,
      ).length,
      totalSurfaces: Object.keys(cleanSurfaces).length,
      generatedAt: new Date().toISOString(),
      specBaseUrl: UI_API_DESIGN_BASE_URL,
      hasDetailedSpecs: Object.keys(canonicalSpecs).length > 0,
    },
  };

  // Output results
  console.log('\n📊 Component Analysis Summary:');
  console.log(
    `   Total unique components: ${masterList.metadata.totalComponents}`,
  );
  console.log(`   Total surfaces: ${masterList.metadata.totalSurfaces}`);

  console.log('\n🔄 Components shared across surfaces:');
  const sharedComponents = Object.entries(completeComponentToSurfaces)
    .filter(([, surfaces]) => surfaces.length > 1)
    .sort(
      ([, firstSurfaces], [, secondSurfaces]) =>
        secondSurfaces.length - firstSurfaces.length,
    );

  if (sharedComponents.length > 0) {
    for (const [component, surfaces] of sharedComponents) {
      console.log(`   ${component}: ${surfaces.join(', ')}`);
    }
  } else {
    console.log('   None found');
  }

  console.log('\n📋 Full component list by surface:');
  Object.entries(cleanSurfaces)
    .sort(
      ([, firstComponents], [, secondComponents]) =>
        secondComponents.length - firstComponents.length,
    )
    .forEach(([surface, components]) => {
      console.log(`   ${surface} (${components.length} components):`);
      if (components.length > 0) {
        for (const comp of components) {
          console.log(`     - ${comp}`);
        }
      } else {
        console.log('     (none detected)');
      }
    });

  // Create temporary deployment directory
  const tempDir = join(__dirname, '../.temp-deploy');

  // Save JSON to temp directory
  const outputPath = join(tempDir, 'components-list.json');
  await mkdir(tempDir, {recursive: true});
  await writeFile(outputPath, JSON.stringify(masterList, null, 2));

  // Generate HTML page in temp directory
  await generateHTMLPage(masterList, tempDir);

  // Generate individual component pages
  await generateComponentPages(masterList, tempDir);

  console.log(
    `\n✅ Complete! Results saved to: .temp-deploy/components-list.json and .temp-deploy/index.html`,
  );

  // Check if --deploy flag was passed
  const shouldDeploy = process.argv.includes('--deploy');

  if (shouldDeploy) {
    console.log(`\n🚀 Deploying to Shopify Quick...`);

    try {
      // Check if quick CLI is installed
      try {
        execSync('quick --version', {stdio: 'pipe'});
      } catch {
        console.log(`📦 Installing @shopify/quick CLI...`);
        execSync('npm i -g @shopify/quick', {stdio: 'inherit'});
      }

      // Deploy only the temporary directory (which contains just index.html)
      console.log(`🚀 Deploying to polaris-components...`);
      execSync('quick deploy .temp-deploy polaris-components', {
        stdio: 'inherit',
        cwd: join(__dirname, '..'),
      });

      console.log(`\n✅ Deployment complete!`);
      console.log(
        `🌐 Your site should be available at: https://polaris-components.shopify.app`,
      );
    } catch (error) {
      console.error(`❌ Deployment failed:`, error.message);
      console.log(`\n💡 Manual deployment:`);
      console.log(`   npm i -g @shopify/quick`);
      console.log(`   quick deploy .temp-deploy polaris-components`);
    }
  } else {
    console.log(`\n🚀 To deploy with Shopify Quick CLI:`);
    console.log(`   node scripts/generate-components-list.mjs --deploy`);
    console.log(`\n💡 Or manually:`);
    console.log(`   npm i -g @shopify/quick`);
    console.log(`   quick deploy .temp-deploy polaris-components`);
  }

  console.log(`\nRun the script with: npm run components:list`);
}

main().catch((error) => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
