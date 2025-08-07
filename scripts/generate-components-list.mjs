#!/usr/bin/env node
/* eslint-env node */
/* eslint no-console: "off" */

import {readdir, readFile, writeFile, access, mkdir} from 'fs/promises';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';
import {execSync} from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SURFACES_DIR = join(__dirname, '../packages/ui-extensions/src/surfaces');
const UI_API_DESIGN_BASE_URL = 'https://ui-api-design.shopify.io/components';
// Helper function to convert kebab-case to PascalCase with proper acronym handling
function convertKebabToPascal(kebabName) {
  // Special cases for common acronyms
  const acronymMap = {
    url: 'URL',
    api: 'API',
    ui: 'UI',
    id: 'ID',
    html: 'HTML',
    css: 'CSS',
    js: 'JS',
    qr: 'QR',
    pos: 'POS',
  };

  return kebabName
    .split('-')
    .map((part) => {
      const lowerPart = part.toLowerCase();
      if (acronymMap[lowerPart]) {
        return acronymMap[lowerPart];
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join('');
}

// Helper function to generate component spec URL
function generateSpecUrl(componentName) {
  // Convert PascalCase to kebab-case for URL
  const kebabCase = componentName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
  return `${UI_API_DESIGN_BASE_URL}/${kebabCase}/`;
}

// Get canonical list of components from ui-api-design package
async function getCanonicalComponents() {
  try {
    console.log(
      '📦 Installing/updating @shopify/ui-api-design to latest version...',
    );

    // Always install the latest version to ensure we have the most up-to-date components
    execSync('npm install @shopify/ui-api-design@latest', {
      stdio: 'inherit',
      cwd: `${__dirname}/..`,
    });

    // Read the components from the installed package
    const componentsDir = join(
      __dirname,
      '../node_modules/@shopify/ui-api-design/dist/components',
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

async function findComponentsFiles() {
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

function extractWebComponents(content) {
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

async function generateHTMLPage(masterList, outputDir) {
  // Ensure the output directory exists
  try {
    await mkdir(outputDir, {recursive: true});
  } catch (error) {
    // Directory might already exist, that's fine
  }

  // Get all surface names sorted
  const allSurfaces = Object.keys(masterList.surfaces).sort();

  // Create table data for all components
  const tableData = [];

  Object.entries(masterList.components).forEach(([component, surfaces]) => {
    const surfaceMap = {};
    // Initialize all surfaces as false
    allSurfaces.forEach((surface) => {
      surfaceMap[surface] = false;
    });
    // Mark surfaces where component exists as true
    surfaces.forEach((surface) => {
      surfaceMap[surface] = true;
    });

    tableData.push({
      component,
      surfaces: surfaceMap,
      surfaceCount: surfaces.length,
      isShared: surfaces.length > 1,
      isImplemented: surfaces.length > 0,
      specUrl: generateSpecUrl(component),
    });
  });

  // Sort by component name
  tableData.sort((firstItem, secondItem) =>
    firstItem.component.localeCompare(secondItem.component),
  );

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Polaris Web Components</title>
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
</head>
<body>
  <s-page>
    <s-stack gap="large">
        
        <s-section heading="Polaris Web Components">
          <s-text color="subdued">Generated on ${new Date(
            masterList.metadata.generatedAt,
          ).toLocaleString()}</s-text>
        </s-section>

        <s-section>
        <s-stack direction="inline" gap="base">
          <s-box padding="base" background="base" borderRadius="base">
            <s-stack gap="small">
              <s-text type="strong">${
                masterList.metadata.totalComponents
              }</s-text>
              <s-text color="subdued">Total Components (Canonical)</s-text>
            </s-stack>
          </s-box>
          
          <s-box padding="base" background="base" borderRadius="base">
            <s-stack gap="small">
              <s-text type="strong">${
                masterList.metadata.implementedComponents
              }</s-text>
              <s-text color="subdued">Implemented Components</s-text>
            </s-stack>
          </s-box>
          
          <s-box padding="base" background="base" borderRadius="base">
            <s-stack gap="small">
              <s-text type="strong">${
                masterList.metadata.totalSurfaces
              }</s-text>
              <s-text color="subdued">Surfaces</s-text>
            </s-stack>
          </s-box>
          
          <s-box padding="base" background="base" borderRadius="base">
            <s-stack gap="small">
              <s-text type="strong">${
                Object.values(masterList.components).filter(
                  (surfaces) => surfaces.length > 1,
                ).length
              }</s-text>
              <s-text color="subdued">Shared Components</s-text>
            </s-stack>
          </s-box>
          
          <s-box padding="base" background="base" borderRadius="base">
            <s-stack gap="small">
              <s-text type="strong">${Math.max(
                ...Object.values(masterList.surfaces).map(
                  (comps) => comps.length,
                ),
              )}</s-text>
              <s-text color="subdued">Largest Surface</s-text>
            </s-stack>
          </s-box>
        </s-stack>
        </s-section>

          <s-section padding="none">
          <s-table>
            <s-box slot="filters">
              <s-grid gridTemplateColumns="1fr auto" gap="small-200">
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-box id="filter-all" borderRadius="base" background="strong" padding="small-400 small-100">
                    All
                  </s-box>
                  <s-button id="filter-implemented" variant="tertiary">Implemented</s-button>
                  <s-button id="filter-shared" variant="tertiary">Shared</s-button>
                  <s-button id="filter-single" variant="tertiary">Single Surface</s-button>
                  <s-button id="filter-unimplemented" variant="tertiary">Not Implemented</s-button>
                </s-stack>
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-button id="search-toggle" variant="secondary" icon="search"></s-button>
                  <s-button variant="secondary" icon="sort"></s-button>
                </s-stack>
              </s-grid>
              
              <s-box id="search-container" style="display: none;">
                <s-divider></s-divider>
                <s-stack gap="small-200">
                  <s-grid gridTemplateColumns="1fr auto" gap="small-200">
                    <s-search-field
                      id="searchField"
                      label=""
                      placeholder="Search components or surfaces..."
                    ></s-search-field>
                    <s-button id="search-cancel" variant="tertiary">Cancel</s-button>
                  </s-grid>
                </s-stack>
              </s-box>
            </s-box>

            <s-table-header-row>
              <s-table-header>
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-checkbox id="header-checkbox"></s-checkbox>
                  <s-text>Component</s-text>
                </s-stack>
              </s-table-header>
              ${allSurfaces
                .map(
                  (surface) => `
              <s-table-header>${surface}</s-table-header>`,
                )
                .join('')}
              <s-table-header>Total</s-table-header>
              <s-table-header>Spec</s-table-header>
            </s-table-header-row>
          
          <s-table-body>
            ${tableData
              .map((row) => {
                const surfacesList = Object.keys(row.surfaces).filter(
                  (surface) => row.surfaces[surface],
                );
                return `
            <s-table-row class="component-row" data-component="${row.component.toLowerCase()}" data-surfaces="${surfacesList
                  .join(' ')
                  .toLowerCase()}" data-shared="${
                  row.isShared
                }" data-implemented="${row.isImplemented}">
              <s-table-cell>
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-checkbox class="row-checkbox" data-component="${
                    row.component
                  }"></s-checkbox>
                                    <s-text type="strong" ${
                                      row.isImplemented ? '' : 'color="subdued"'
                                    }>${row.component}</s-text>
                  ${(() => {
                    if (!row.isImplemented)
                      return '<s-badge tone="subdued">Not Implemented</s-badge>';
                    if (row.isShared)
                      return '<s-badge tone="success">Shared</s-badge>';
                    return '';
                  })()}
                </s-stack>
              </s-table-cell>
              ${allSurfaces
                .map(
                  (surface) => `
              <s-table-cell>
                ${row.surfaces[surface] ? '<s-icon type="check" />' : ''}
              </s-table-cell>`,
                )
                .join('')}
              <s-table-cell>
                <s-text type="strong">${row.surfaceCount}</s-text>
              </s-table-cell>
              <s-table-cell>
                ${
                  row.specUrl
                    ? `
                <s-link href="${row.specUrl}" target="_blank">
                  <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                    <s-text>View Spec</s-text>
                    <s-icon type="external" />
                  </s-stack>
                </s-link>
                `
                    : `
                <s-text color="subdued">—</s-text>
                `
                }
              </s-table-cell>
            </s-table-row>`;
              })
              .join('')}
          </s-table-body>
                  </s-table>
        </s-section>

       
      </s-stack>
      
    </s-box>
  </s-page>

  <script>
    // State management
    let currentFilter = 'all';
    let searchTerm = '';
    let showSearch = false;
    let headerChecked = false;
    let rowsChecked = {};
    
    // DOM elements
    const searchField = document.getElementById('searchField');
    const searchContainer = document.getElementById('search-container');
    const searchToggle = document.getElementById('search-toggle');
    const searchCancel = document.getElementById('search-cancel');
    const headerCheckbox = document.getElementById('header-checkbox');
    const filterAll = document.getElementById('filter-all');
    const filterImplemented = document.getElementById('filter-implemented');
    const filterShared = document.getElementById('filter-shared');
    const filterSingle = document.getElementById('filter-single');
    const filterUnimplemented = document.getElementById('filter-unimplemented');
    
    // Initialize row checkboxes state
    document.querySelectorAll('.component-row').forEach(row => {
      const component = row.dataset.component;
      rowsChecked[component] = false;
    });
    
    // Filter functions
    function updateFilterButtons() {
      [filterAll, filterImplemented, filterShared, filterSingle, filterUnimplemented].forEach(btn => {
        btn.style.background = '';
        btn.style.padding = 'small-400 small-100';
        btn.classList.remove('selected');
      });
      
      const activeFilter = document.getElementById('filter-' + currentFilter);
      if (activeFilter) {
        activeFilter.style.background = 'strong';
      }
    }
    
    function filterRows() {
      const rows = document.querySelectorAll('.component-row');
      let visibleCount = 0;
      
      rows.forEach(row => {
        const component = row.dataset.component;
        const surfaces = row.dataset.surfaces;
        const isShared = row.dataset.shared === 'true';
        const isImplemented = row.dataset.implemented === 'true';
        
        // Filter by type
        let matchesFilter = true;
        if (currentFilter === 'implemented') {
          matchesFilter = isImplemented;
        } else if (currentFilter === 'shared') {
          matchesFilter = isShared;
        } else if (currentFilter === 'single') {
          matchesFilter = isImplemented && !isShared;
        } else if (currentFilter === 'unimplemented') {
          matchesFilter = !isImplemented;
        }
        
        // Filter by search
        const matchesSearch = searchTerm === '' || 
          component.includes(searchTerm.toLowerCase()) || 
          surfaces.includes(searchTerm.toLowerCase());
        
        if (matchesFilter && matchesSearch) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      });
      
      updateHeaderCheckbox();
    }
    
    function updateHeaderCheckbox() {
      const visibleRows = Array.from(document.querySelectorAll('.component-row')).filter(row => 
        row.style.display !== 'none'
      );
      
      if (visibleRows.length === 0) {
        headerChecked = false;
      } else {
        const visibleCheckedCount = visibleRows.filter(row => 
          rowsChecked[row.dataset.component]
        ).length;
        
        headerChecked = visibleCheckedCount === visibleRows.length;
      }
      
      if (headerCheckbox) {
        headerCheckbox.checked = headerChecked;
      }
    }
    
    // Event listeners
    if (searchToggle) {
      searchToggle.addEventListener('click', () => {
        showSearch = !showSearch;
        searchContainer.style.display = showSearch ? 'block' : 'none';
        if (showSearch && searchField) {
          searchField.focus();
        }
      });
    }
    
    if (searchCancel) {
      searchCancel.addEventListener('click', () => {
        showSearch = false;
        searchTerm = '';
        searchContainer.style.display = 'none';
        if (searchField) {
          searchField.value = '';
        }
        filterRows();
      });
    }
    
    if (searchField) {
      searchField.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterRows();
      });
    }
    
    if (headerCheckbox) {
      headerCheckbox.addEventListener('change', (e) => {
        headerChecked = e.target.checked;
        const visibleRows = Array.from(document.querySelectorAll('.component-row')).filter(row => 
          row.style.display !== 'none'
        );
        
        visibleRows.forEach(row => {
          const component = row.dataset.component;
          rowsChecked[component] = headerChecked;
          const rowCheckbox = row.querySelector('.row-checkbox');
          if (rowCheckbox) {
            rowCheckbox.checked = headerChecked;
          }
        });
      });
    }
    
    // Filter button event listeners
    [filterAll, filterImplemented, filterShared, filterSingle, filterUnimplemented].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          currentFilter = btn.id.replace('filter-', '');
          updateFilterButtons();
          filterRows();
        });
      }
    });
    
    // Row checkbox event listeners
    document.querySelectorAll('.row-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const component = e.target.dataset.component;
        rowsChecked[component] = e.target.checked;
        updateHeaderCheckbox();
      });
    });
    
    // Initialize
    updateFilterButtons();
    filterRows();
  </script>
</body>
</html>`;

  const htmlPath = join(outputDir, 'index.html');
  await writeFile(htmlPath, html);
}

async function main() {
  console.log('🔍 Getting canonical component list from ui-api-design...\n');

  // Get the canonical list of components from ui-api-design
  const canonicalComponents = await getCanonicalComponents();
  console.log(
    `📦 Found ${canonicalComponents.length} canonical components from ui-api-design`,
  );

  console.log('\n🔍 Scanning surfaces for component implementations...\n');

  const componentFiles = await findComponentsFiles();
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

  // Add unimplemented components to the componentToSurfaces mapping
  for (const component of canonicalComponents) {
    if (!componentToSurfaces[component]) {
      componentToSurfaces[component] = []; // No surfaces implement this component yet
    }
  }

  // Generate the master list
  const masterList = {
    surfaces: surfaceComponents,
    components: componentToSurfaces,
    metadata: {
      totalComponents: canonicalComponents.length, // Total canonical components
      implementedComponents: Object.keys(componentToSurfaces).filter(
        (comp) => componentToSurfaces[comp].length > 0,
      ).length,
      totalSurfaces: Object.keys(surfaceComponents).length,
      generatedAt: new Date().toISOString(),
      specBaseUrl: UI_API_DESIGN_BASE_URL,
    },
  };

  // Output results
  console.log('\n📊 Component Analysis Summary:');
  console.log(
    `   Total unique components: ${masterList.metadata.totalComponents}`,
  );
  console.log(`   Total surfaces: ${masterList.metadata.totalSurfaces}`);

  console.log('\n🔄 Components shared across surfaces:');
  const sharedComponents = Object.entries(componentToSurfaces)
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
  Object.entries(surfaceComponents)
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
