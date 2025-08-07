/* eslint-env node */
/* eslint no-console: "off" */
import {writeFile, mkdir} from 'fs/promises';
import {join} from 'path';
import {generateSpecUrl} from './config.mjs';

/**
 * Generate the main HTML index page
 */
export async function generateHTMLPage(masterList, outputDir) {
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
      props: masterList.props[component] || {},
      hasPropsDifferences: calculatePropsDifferences(
        masterList.props[component],
      ),
    });
  });

  // Sort by component name
  tableData.sort((firstItem, secondItem) =>
    firstItem.component.localeCompare(secondItem.component),
  );

  const html = generateMainPageHTML(masterList, allSurfaces, tableData);

  const htmlPath = join(outputDir, 'index.html');
  await writeFile(htmlPath, html);
}

/**
 * Calculate if there are props differences across surfaces
 */
function calculatePropsDifferences(componentProps) {
  if (!componentProps?.surfaces) return false;

  const surfacesWithProps = Object.entries(componentProps.surfaces).filter(
    ([, props]) => Object.keys(props).length > 0,
  );

  if (surfacesWithProps.length <= 1) return false;

  // Check if all surfaces have the same props
  const [, firstProps] = surfacesWithProps[0];
  const firstPropNames = Object.keys(firstProps).sort();

  return !surfacesWithProps.every(([, surfaceProps]) => {
    const propNames = Object.keys(surfaceProps).sort();
    return JSON.stringify(propNames) === JSON.stringify(firstPropNames);
  });
}

/**
 * Generate the main page HTML content
 */
function generateMainPageHTML(masterList, allSurfaces, tableData) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Polaris Web Components</title>
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
</head>
<body>
  <s-page inlineSize="large">
    <s-stack gap="large">
        
        <s-section heading="Polaris Web Components">
          <s-text color="subdued">Generated on ${new Date(
            masterList.metadata.generatedAt,
          ).toLocaleString()}</s-text>
        </s-section>

        ${generateStatsSection(masterList)}

        ${generateTableSection(allSurfaces, tableData)}

      </s-stack>
  </s-page>

  ${generateInteractiveScript()}
</body>
</html>`;
}

/**
 * Generate the statistics section
 */
function generateStatsSection(masterList) {
  return `<s-section>
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
        </s-section>`;
}

/**
 * Generate the table section with filters and search
 */
function generateTableSection(allSurfaces, tableData) {
  return `<s-section padding="none">
          <s-table>
            ${generateTableFilters()}

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
              <s-table-header>Details</s-table-header>
            </s-table-header-row>
          
          <s-table-body>
            ${generateTableRows(allSurfaces, tableData)}
          </s-table-body>
          </s-table>
        </s-section>`;
}

/**
 * Generate table filters
 */
function generateTableFilters() {
  return `<s-box slot="filters">
              <s-grid gridTemplateColumns="1fr auto" gap="small-200">
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-box id="filter-all" borderRadius="base" background="strong" padding="small-400 small-100">
                    All
                  </s-box>
                  <s-button id="filter-implemented" variant="tertiary">Implemented</s-button>
                  <s-button id="filter-shared" variant="tertiary">Shared</s-button>
                  <s-button id="filter-single" variant="tertiary">Single Surface</s-button>
                  <s-button id="filter-unimplemented" variant="tertiary">Not Implemented</s-button>
                  <s-button id="filter-props-diff" variant="tertiary">Props Differences</s-button>
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
            </s-box>`;
}

/**
 * Generate table rows
 */
function generateTableRows(allSurfaces, tableData) {
  return tableData
    .map((row) => {
      const surfacesList = Object.keys(row.surfaces).filter(
        (surface) => row.surfaces[surface],
      );
      return `
            <s-table-row class="component-row" data-component="${row.component.toLowerCase()}" data-surfaces="${surfacesList
        .join(' ')
        .toLowerCase()}" data-shared="${row.isShared}" data-implemented="${
        row.isImplemented
      }" data-props-diff="${row.hasPropsDifferences}">
              <s-table-cell>
                <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                  <s-checkbox class="row-checkbox" data-component="${
                    row.component
                  }"></s-checkbox>
                  <a href="${row.component.toLowerCase()}.html" style="text-decoration: none; color: inherit;">
                    <s-text type="strong" ${
                      row.isImplemented ? '' : 'color="subdued"'
                    }>${row.component}</s-text>
                  </a>
                  ${(() => {
                    if (!row.isImplemented)
                      return '<s-badge tone="subdued">Not Implemented</s-badge>';
                    if (row.hasPropsDifferences)
                      return '<s-badge tone="warning">Props Differ</s-badge>';
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
                <a href="${row.specUrl}" target="_blank" style="text-decoration: none; color: inherit;">
                  <s-stack direction="inline" gap="small-200" alignContent="center" alignItems="center">
                    <s-text>View Spec</s-text>
                    <s-icon type="external" />
                  </s-stack>
                </a>
                `
                    : `
                <s-text color="subdued">—</s-text>
                `
                }
              </s-table-cell>
              <s-table-cell>
                <a href="${row.component.toLowerCase()}.html" style="text-decoration: none; color: inherit;">
                  <s-text>View Details</s-text>
                </a>
              </s-table-cell>
            </s-table-row>`;
    })
    .join('');
}

/**
 * Generate the interactive JavaScript for the page
 */
function generateInteractiveScript() {
  return `<script>
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
    const filterPropsDiff = document.getElementById('filter-props-diff');

    
    // Initialize row checkboxes state
    document.querySelectorAll('.component-row').forEach(row => {
      const component = row.dataset.component;
      rowsChecked[component] = false;
    });
    

    // Filter functions
    function updateFilterButtons() {
      [filterAll, filterImplemented, filterShared, filterSingle, filterUnimplemented, filterPropsDiff].forEach(btn => {
        if (btn) {
          btn.style.background = '';
          btn.style.padding = 'small-400 small-100';
          btn.classList.remove('selected');
        }
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
        } else if (currentFilter === 'props-diff') {
          matchesFilter = row.dataset.propsDiff === 'true';
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
    [filterAll, filterImplemented, filterShared, filterSingle, filterUnimplemented, filterPropsDiff].forEach(btn => {
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
  </script>`;
}
