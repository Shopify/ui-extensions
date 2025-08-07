/* eslint-env node */
/* eslint no-console: "off" */
import {writeFile} from 'fs/promises';
import {join} from 'path';
import {generateSpecUrl} from './config.mjs';

/**
 * Generate individual component pages
 */
export async function generateComponentPages(masterList, outputDir) {
  const componentPages = [];

  for (const [componentName, surfaces] of Object.entries(
    masterList.components,
  )) {
    const componentProps = masterList.props[componentName] || {};
    const canonicalProps = componentProps.canonical || {};
    const surfaceProps = componentProps.surfaces || {};

    const isImplemented = surfaces.length > 0;
    const specUrl = generateSpecUrl(componentName);

    // Calculate prop differences
    const hasPropsDifferences = calculatePropsDifferences(surfaceProps);

    const html = generateComponentPageHTML(componentName, {
      surfaces,
      isImplemented,
      specUrl,
      canonicalProps,
      surfaceProps,
      hasPropsDifferences,
      allSurfaces: Object.keys(masterList.surfaces).sort(),
      metadata: masterList.metadata,
    });

    const fileName = `${componentName.toLowerCase()}.html`;
    const filePath = join(outputDir, fileName);
    await writeFile(filePath, html);

    componentPages.push({
      name: componentName,
      fileName,
      isImplemented,
      surfaces: surfaces.length,
      hasPropsDifferences,
    });
  }

  return componentPages;
}

/**
 * Calculate prop differences for a single component
 */
function calculatePropsDifferences(surfaceProps) {
  if (!surfaceProps) return false;

  const surfacesWithProps = Object.entries(surfaceProps).filter(
    ([, props]) => Object.keys(props).length > 0,
  );

  if (surfacesWithProps.length <= 1) return false;

  const [, firstProps] = surfacesWithProps[0];
  const firstPropNames = Object.keys(firstProps).sort();

  return !surfacesWithProps.every(([, props]) => {
    const propNames = Object.keys(props).sort();
    return JSON.stringify(propNames) === JSON.stringify(firstPropNames);
  });
}

/**
 * Generate HTML for individual component page
 */
function generateComponentPageHTML(componentName, data) {
  const {
    surfaces,
    isImplemented,
    specUrl,
    canonicalProps,
    surfaceProps,
    hasPropsDifferences,
    allSurfaces,
    metadata,
  } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${componentName} - Polaris Web Components</title>
  <script src="https://cdn.shopify.com/shopifycloud/app-bridge-ui-experimental.js"></script>
</head>
<body>
  <s-page inlineSize="large">
    <s-stack gap="large">
      
      ${generateComponentHeader(
        componentName,
        isImplemented,
        hasPropsDifferences,
        specUrl,
      )}

      ${generateImplementationOverview(
        componentName,
        surfaces,
        canonicalProps,
        isImplemented,
        allSurfaces,
        surfaceProps,
      )}

      ${generateUnifiedPropsComparison(
        componentName,
        canonicalProps,
        surfaceProps,
        surfaces,
      )}

      ${generateFooter(metadata)}

    </s-stack>
  </s-page>
</body>
</html>`;
}

/**
 * Generate component header section
 */
function generateComponentHeader(
  componentName,
  isImplemented,
  hasPropsDifferences,
  specUrl,
) {
  return `<!-- Header with navigation -->
      <s-section>
        <s-stack gap="small-200">
          <s-stack direction="inline" gap="small-200" alignItems="center">
            <a href="index.html" style="text-decoration: none; color: inherit;">
              <s-text>← Back to Components List</s-text>
            </a>
            <s-divider direction="vertical"></s-divider>
            <s-text color="subdued" size="small">Component Details</s-text>
          </s-stack>
          
          <s-stack direction="inline" gap="base" alignItems="center">
            <s-heading level="1">${componentName}</s-heading>
            ${
              isImplemented
                ? ''
                : '<s-badge tone="subdued">Not Implemented</s-badge>'
            }
            ${
              hasPropsDifferences
                ? '<s-badge tone="warning">Props Differ</s-badge>'
                : ''
            }
          </s-stack>
          
          <s-stack direction="inline" gap="small-200">
            ${
              specUrl
                ? `<a href="${specUrl}" target="_blank" style="text-decoration: none; color: inherit;">
              <s-stack direction="inline" gap="small-200" alignItems="center">
                <s-text>View Official Spec</s-text>
                <s-icon type="external" />
              </s-stack>
            </a>`
                : ''
            }
          </s-stack>
        </s-stack>
      </s-section>`;
}

/**
 * Generate implementation overview section
 */
function generateImplementationOverview(
  componentName,
  surfaces,
  canonicalProps,
  isImplemented,
  allSurfaces,
  surfaceProps,
) {
  return `<!-- Implementation Overview -->
      <s-section heading="Implementation Overview">
        <s-stack gap="base">
          <s-stack direction="inline" gap="base">
            <s-box padding="base" background="base" borderRadius="base">
              <s-stack gap="small">
                <s-text type="strong">${surfaces.length}</s-text>
                <s-text color="subdued">Surfaces</s-text>
              </s-stack>
            </s-box>
            
            <s-box padding="base" background="base" borderRadius="base">
              <s-stack gap="small">
                <s-text type="strong">${
                  Object.keys(canonicalProps).filter(
                    (key) => !key.startsWith('_'),
                  ).length
                }</s-text>
                <s-text color="subdued">Canonical Props</s-text>
              </s-stack>
            </s-box>
            
            <s-box padding="base" background="base" borderRadius="base">
              <s-stack gap="small">
                <s-text type="strong">${isImplemented ? 'Yes' : 'No'}</s-text>
                <s-text color="subdued">Implemented</s-text>
              </s-stack>
            </s-box>
          </s-stack>
          
          <!-- Surface Implementation Grid -->
          <s-grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="small-200">
            ${allSurfaces
              .map(
                (surface) => `
              <s-box padding="base" background="${
                surfaces.includes(surface) ? 'success' : 'subdued'
              }" borderRadius="base">
                <s-stack gap="small-100" alignItems="center">
                  <s-icon type="${
                    surfaces.includes(surface) ? 'check' : 'x'
                  }" />
                  <s-text type="strong" color="${
                    surfaces.includes(surface) ? 'base' : 'subdued'
                  }">${surface}</s-text>
                  ${
                    surfaces.includes(surface) && surfaceProps[surface]
                      ? `<s-text size="small" color="subdued">${
                          Object.keys(surfaceProps[surface]).filter(
                            (key) => !key.startsWith('_'),
                          ).length
                        } props</s-text>`
                      : ''
                  }
                </s-stack>
              </s-box>
            `,
              )
              .join('')}
          </s-grid>
        </s-stack>
      </s-section>`;
}

/**
 * Generate unified props comparison section
 */
function generateUnifiedPropsComparison(
  componentName,
  canonicalProps,
  surfaceProps,
  surfaces,
) {
  // Get all unique prop names from canonical and all surfaces
  const allPropNames = new Set();

  // Add canonical prop names
  Object.keys(canonicalProps).forEach((prop) => {
    if (!prop.startsWith('_')) {
      allPropNames.add(prop);
    }
  });

  // Add surface prop names
  surfaces.forEach((surface) => {
    const props = surfaceProps[surface] || {};
    Object.keys(props).forEach((prop) => {
      if (!prop.startsWith('_')) {
        allPropNames.add(prop);
      }
    });
  });

  if (allPropNames.size === 0) {
    return '<s-section heading="📋 Properties"><s-text color="subdued">No properties found for this component.</s-text></s-section>';
  }

  // Separate props and slots
  const regularProps = [];
  const slots = [];

  Array.from(allPropNames)
    .sort()
    .forEach((propName) => {
      const canonicalProp = canonicalProps[propName];
      const isSlot =
        canonicalProp?.isSlot ||
        surfaces.some((surface) => surfaceProps[surface]?.[propName]?.isSlot);

      if (isSlot) {
        slots.push(propName);
      } else {
        regularProps.push(propName);
      }
    });

  return `<!-- Properties Comparison Table -->
      <s-section heading="📋 Properties & Implementation Matrix">
        <s-stack gap="base">
          <s-text color="subdued">
            Quick comparison matrix showing how each surface implements the canonical specification.
          </s-text>
          
          ${
            regularProps.length > 0
              ? `
            <s-stack gap="small-200">
              <s-heading level="3">Props (${regularProps.length})</s-heading>
              ${generateComparisonTable(
                regularProps,
                canonicalProps,
                surfaceProps,
                surfaces,
                false,
              )}
            </s-stack>
          `
              : ''
          }
          
          ${
            slots.length > 0
              ? `
            <s-stack gap="small-200">
              <s-heading level="3">Slots (${slots.length})</s-heading>
              ${generateComparisonTable(
                slots,
                canonicalProps,
                surfaceProps,
                surfaces,
                true,
              )}
            </s-stack>
          `
              : ''
          }
        </s-stack>
      </s-section>`;
}

/**
 * Generate unified prop card showing canonical spec and all surface implementations
 */
function generateUnifiedPropCard(
  propName,
  canonicalProp,
  surfaceProps,
  surfaces,
) {
  const isSlot =
    canonicalProp?.isSlot ||
    surfaces.some((surface) => surfaceProps[surface]?.[propName]?.isSlot);

  // Get surface implementations for this prop
  const surfaceImplementations = surfaces
    .map((surface) => ({
      surface,
      prop: surfaceProps[surface]?.[propName] || null,
    }))
    .filter((impl) => impl.prop !== null);

  // Determine overall implementation status
  const implementedSurfaces = surfaceImplementations.length;
  const totalSurfaces = surfaces.length;
  const allMatch = surfaceImplementations.every((impl) => {
    if (!canonicalProp) return false;
    const propType = impl.prop.expandedType?.resolvedType || impl.prop.type;
    const canonicalType =
      canonicalProp.expandedType?.resolvedType || canonicalProp.type;
    return (
      canonicalType === propType &&
      canonicalProp.optional === impl.prop.optional
    );
  });

  let cardColor = 'base';
  let statusBadge = '';

  if (!canonicalProp) {
    cardColor = 'info';
    statusBadge =
      '<s-badge tone="info" size="small">Surface-specific</s-badge>';
  } else if (implementedSurfaces === 0) {
    cardColor = 'critical';
    statusBadge =
      '<s-badge tone="critical" size="small">Not implemented</s-badge>';
  } else if (implementedSurfaces < totalSurfaces) {
    cardColor = 'warning';
    statusBadge = `<s-badge tone="warning" size="small">Partial (${implementedSurfaces}/${totalSurfaces})</s-badge>`;
  } else if (allMatch) {
    cardColor = 'success';
    statusBadge =
      '<s-badge tone="success" size="small">Fully implemented</s-badge>';
  } else {
    cardColor = 'caution';
    statusBadge =
      '<s-badge tone="warning" size="small">Implementation differs</s-badge>';
  }

  return `<s-box padding="base" background="${cardColor}" borderRadius="base">
    <s-stack gap="base">
      <!-- Property Header -->
      <s-stack direction="inline" gap="small-200" alignItems="center" justifyContent="space-between">
        <s-stack direction="inline" gap="small-200" alignItems="center">
          <s-text type="strong" size="large">${propName}${
    canonicalProp?.optional ? '?' : ''
  }</s-text>
          ${
            isSlot
              ? '<s-badge tone="success" size="small">Slot</s-badge>'
              : '<s-badge tone="neutral" size="small">Prop</s-badge>'
          }
          ${statusBadge}
        </s-stack>
        <s-text size="small" color="subdued">${implementedSurfaces}/${totalSurfaces} surfaces</s-text>
      </s-stack>
      
      <!-- Canonical Specification -->
      ${
        canonicalProp
          ? `
        <s-stack gap="small-200">
          <s-heading level="4">📋 Canonical Specification</s-heading>
          <s-box padding="small-200" background="base" borderRadius="small">
            <s-stack gap="small-200">
              <s-stack direction="inline" gap="small-200" alignItems="center">
                <s-badge tone="info" size="small">${
                  canonicalProp.expandedType?.resolvedType ||
                  canonicalProp.type ||
                  'unknown'
                }</s-badge>
                ${
                  canonicalProp.optional
                    ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
                    : '<s-badge tone="warning" size="small">Required</s-badge>'
                }
              </s-stack>
              ${
                canonicalProp.description
                  ? `<s-text size="small">${canonicalProp.description}</s-text>`
                  : ''
              }
              ${
                canonicalProp.defaultValue
                  ? `<s-text size="small" color="subdued"><strong>Default:</strong> ${canonicalProp.defaultValue}</s-text>`
                  : ''
              }
            </s-stack>
          </s-box>
        </s-stack>
      `
          : ''
      }
      
      <!-- Surface Implementations -->
      ${
        implementedSurfaces > 0
          ? `
        <s-stack gap="small-200">
          <s-heading level="4">🔧 Surface Implementations</s-heading>
          <s-grid columns="2" gap="small-200">
            ${surfaceImplementations
              .map((impl) =>
                generateSurfaceImplSummary(
                  impl.surface,
                  impl.prop,
                  canonicalProp,
                ),
              )
              .join('')}
          </s-grid>
        </s-stack>
      `
          : ''
      }
      
      ${
        implementedSurfaces < totalSurfaces
          ? `
        <s-stack gap="small-100">
          <s-text size="small" type="strong" color="subdued">Missing from:</s-text>
          <s-stack direction="inline" gap="small-100">
            ${surfaces
              .filter((surface) => !surfaceProps[surface]?.[propName])
              .map(
                (surface) =>
                  `<s-badge tone="subdued" size="small">${surface}</s-badge>`,
              )
              .join('')}
          </s-stack>
        </s-stack>
      `
          : ''
      }
    </s-stack>
  </s-box>`;
}

/**
 * Generate comparison table for properties
 */
function generateComparisonTable(
  propNames,
  canonicalProps,
  surfaceProps,
  surfaces,
  isSlots,
) {
  if (propNames.length === 0) return '';
  return `<s-table>
    <s-table-header-row>
      <s-table-header>Property</s-table-header>
      <s-table-header>Canonical Spec</s-table-header>
      ${surfaces
        .map((surface) => `<s-table-header>${surface}</s-table-header>`)
        .join('')}
    </s-table-header-row>
    <s-table-body>
      ${propNames
        .map((propName) =>
          generateTableRow(
            propName,
            canonicalProps[propName],
            surfaceProps,
            surfaces,
            isSlots,
          ),
        )
        .join('')}
    </s-table-body>
  </s-table>`;
}

/**
 * Parse type string and split union types into individual badges
 */
function parseTypeIntoBadges(typeString) {
  if (!typeString)
    return '<s-badge tone="subdued" size="small">unknown</s-badge>';

  // Check if it's a union type (contains |)
  if (typeString.includes(' | ')) {
    const isOptional = typeString.endsWith('?');
    const baseType = isOptional ? typeString.slice(0, -1) : typeString;

    // Split by | and clean up each part
    const unionParts = baseType.split(' | ').map((part) => part.trim());

    const badges = unionParts
      .map((part) => `<s-badge tone="info" size="small">${part}</s-badge>`)
      .join('');

    const optionalBadge = isOptional
      ? '<s-badge tone="subdued" size="small">optional</s-badge>'
      : '';

    return `<s-stack direction="inline" gap="small-200" wrap>${badges}${optionalBadge}</s-stack>`;
  }

  // For non-union types, just return a single badge
  const isOptional = typeString.endsWith('?');
  const baseType = isOptional ? typeString.slice(0, -1) : typeString;
  const optionalBadge = isOptional
    ? '<s-badge tone="subdued" size="small">optional</s-badge>'
    : '';

  return `<s-stack direction="inline" gap="small-200"><s-badge tone="info" size="small">${baseType}</s-badge>${optionalBadge}</s-stack>`;
}

/**
 * Generate a single table row for property comparison
 */
function generateTableRow(
  propName,
  canonicalProp,
  surfaceProps,
  surfaces,
  isSlot,
) {
  const canonicalType =
    canonicalProp?.expandedType?.resolvedType || canonicalProp?.type;
  const canonicalDisplay = canonicalProp
    ? parseTypeIntoBadges(
        `${canonicalType}${canonicalProp.optional ? '?' : ''}`,
      )
    : '<s-badge tone="subdued" size="small">Not in spec</s-badge>';

  // Get description from canonical prop if available
  const description = canonicalProp?.description;
  const hasDescription = description && description.trim();

  return `<s-table-row>
    <s-table-cell>
      <s-stack gap="small-100">
        <s-stack direction="inline" gap="small-100" alignItems="center">
          <s-text type="strong">${propName}</s-text>
          ${isSlot ? '<s-badge size="small" tone="success">SLOT</s-badge>' : ''}
        </s-stack>
        ${
          hasDescription
            ? `<s-text size="small" color="subdued">${description}</s-text>`
            : ''
        }
      </s-stack>
    </s-table-cell>
    <s-table-cell>
      ${canonicalDisplay}
    </s-table-cell>
    ${surfaces
      .map((surface) => {
        const surfaceProp = surfaceProps[surface]?.[propName];
        return generateStatusCell(surfaceProp, canonicalProp, surface);
      })
      .join('')}
  </s-table-row>`;
}

/**
 * Generate status cell for surface implementation
 */
function generateStatusCell(surfaceProp, canonicalProp, surface) {
  if (!surfaceProp) {
    return `<s-table-cell>
      <s-stack gap="small-100" alignItems="center">
        <s-icon type="close" color="critical" />
        <s-text size="small" color="critical">Missing</s-text>
      </s-stack>
    </s-table-cell>`;
  }

  if (!canonicalProp) {
    const surfaceType =
      surfaceProp.expandedType?.resolvedType || surfaceProp.type;
    const surfaceDisplay = `${surfaceType}${surfaceProp.optional ? '?' : ''}`;

    return `<s-table-cell>
      <s-stack gap="small-100">
        <s-stack direction="inline" gap="small-100" alignItems="center">
          <s-icon type="info" color="info" />
          <s-text size="small" color="info">Surface-only</s-text>
        </s-stack>
        <s-badge tone="info" size="small">${surfaceDisplay}</s-badge>
      </s-stack>
    </s-table-cell>`;
  }

  const surfaceType =
    surfaceProp.expandedType?.resolvedType || surfaceProp.type;
  const canonicalType =
    canonicalProp.expandedType?.resolvedType || canonicalProp.type;
  const matches =
    canonicalType === surfaceType &&
    canonicalProp.optional === surfaceProp.optional;

  if (matches) {
    return `<s-table-cell>
      <s-stack gap="small-100" alignItems="center">
        <s-icon type="check" color="success" />
        <s-text size="small" color="success">Match</s-text>
      </s-stack>
    </s-table-cell>`;
  } else {
    // Build cleaner visual diff
    const surfaceDisplay = `${surfaceType}${surfaceProp.optional ? '?' : ''}`;

    // Show the surface type and optionality differences visually
    const optionalityDiffers = canonicalProp.optional !== surfaceProp.optional;

    return `<s-table-cell>
      <s-stack gap="small-100">
        <s-stack direction="inline" gap="small-100" alignItems="center">
          <s-icon type="alert" color="warning" />
          <s-text size="small" color="warning">Differs</s-text>
        </s-stack>
        <s-stack gap="small-50">
          <s-badge tone="critical" size="small">${surfaceDisplay}</s-badge>
          ${
            optionalityDiffers
              ? `<s-text size="small" color="subdued">${
                  surfaceProp.optional
                    ? 'Surface is optional, spec requires it'
                    : 'Surface requires, spec is optional'
                }</s-text>`
              : ''
          }
        </s-stack>
      </s-stack>
    </s-table-cell>`;
  }
}

/**
 * Generate compact surface implementation summary
 */
function generateSurfaceImplSummary(surface, prop, canonicalProp) {
  const propType = prop.expandedType?.resolvedType || prop.type;
  const canonicalType =
    canonicalProp?.expandedType?.resolvedType || canonicalProp?.type;

  const matches =
    canonicalProp &&
    canonicalType === propType &&
    canonicalProp.optional === prop.optional;

  return `<s-box padding="small-200" background="${
    matches ? 'success' : 'caution'
  }" borderRadius="small">
    <s-stack gap="small-100">
      <s-stack direction="inline" gap="small-100" alignItems="center" justifyContent="space-between">
        <s-text type="strong" size="small">${surface}</s-text>
        ${
          matches
            ? '<s-icon type="check" color="success" />'
            : '<s-icon type="alert" color="warning" />'
        }
      </s-stack>
      <s-stack direction="inline" gap="small-100" alignItems="center">
        <s-badge tone="info" size="small">${propType || 'unknown'}</s-badge>
        ${
          prop.optional
            ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
            : '<s-badge tone="warning" size="small">Required</s-badge>'
        }
      </s-stack>
      ${
        !matches && canonicalProp
          ? generateSpecDiff(canonicalProp, prop, canonicalType, propType)
          : ''
      }
    </s-stack>
  </s-box>`;
}

// REMOVED: generateCanonicalSpecSection and generateSurfaceImplementationsSection (replaced by unified comparison)

/**
 * Generate surface implementations section
 */
function generateSurfaceImplementationsSection(
  surfaces,
  surfaceProps,
  canonicalProps,
) {
  if (surfaces.length === 0) {
    return `<!-- Implementation Status -->
      <s-section heading="Implementation Status">
        <s-box padding="large" background="subdued" borderRadius="base">
          <s-stack gap="base" alignItems="center">
            <s-icon type="alert-circle" />
            <s-heading level="3">Component Not Implemented</s-heading>
            <s-text color="subdued">This component is defined in the canonical specification but is not yet implemented in any surface.</s-text>
          </s-stack>
        </s-box>
      </s-section>`;
  }

  return `<!-- Surface Implementations -->
      <s-section heading="🔧 Surface Implementations">
        <s-stack gap="large">
          ${surfaces
            .map((surface) =>
              generateSurfaceSection(
                surface,
                surfaceProps[surface] || {},
                canonicalProps,
              ),
            )
            .join('')}
        </s-stack>
      </s-section>`;
}

/**
 * Generate a surface implementation section
 */
function generateSurfaceSection(surface, props, canonicalProps) {
  const propsEntries = Object.entries(props).filter(
    ([key]) => !key.startsWith('_'),
  );

  // Separate slots from regular props
  const slots = propsEntries.filter(([, propInfo]) => propInfo.isSlot);
  const regularProps = propsEntries.filter(([, propInfo]) => !propInfo.isSlot);

  return `<s-stack gap="base">
                <s-heading level="3">${surface}</s-heading>
                
                ${
                  regularProps.length > 0
                    ? `
                  <s-stack gap="small-200">
                    <s-heading level="4">Props</s-heading>
                    ${regularProps
                      .sort(([propA], [propB]) => propA.localeCompare(propB))
                      .map(([propName, propInfo]) =>
                        generateSurfacePropCard(
                          propName,
                          propInfo,
                          canonicalProps[propName],
                        ),
                      )
                      .join('')}
                  </s-stack>
                `
                    : ''
                }
                
                ${
                  slots.length > 0
                    ? `
                  <s-stack gap="small-200">
                    <s-heading level="4">Slots</s-heading>
                    ${slots
                      .sort(([propA], [propB]) => propA.localeCompare(propB))
                      .map(([propName, propInfo]) =>
                        generateSurfaceSlotCard(
                          propName,
                          propInfo,
                          canonicalProps[propName],
                        ),
                      )
                      .join('')}
                  </s-stack>
                `
                    : ''
                }
                
                ${
                  propsEntries.length === 0
                    ? '<s-text color="subdued">No detailed props information available for this surface.</s-text>'
                    : ''
                }
              </s-stack>`;
}

/**
 * Generate a prop card for canonical props
 */
function generatePropCard(propName, propInfo) {
  return `<s-box padding="base" background="base" borderRadius="base">
                  <s-stack gap="small-200">
                    <s-stack direction="inline" gap="small-200" alignItems="center">
                      <s-text type="strong">${propName}${
    propInfo.optional ? '?' : ''
  }</s-text>
                      <s-badge tone="info" size="small">${
                        propInfo.expandedType?.resolvedType ||
                        propInfo.type ||
                        'unknown'
                      }</s-badge>
                      ${
                        propInfo.optional
                          ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
                          : '<s-badge tone="warning" size="small">Required</s-badge>'
                      }
                    </s-stack>
                    
                    ${
                      propInfo.description
                        ? `<s-text>${propInfo.description}</s-text>`
                        : ''
                    }
                    
                    ${generateExpandedTypeInfo(propInfo)}
                    
                    ${generateJSDocTags(propInfo.tags)}
                    
                    ${
                      propInfo.defaultValue
                        ? `
                      <s-stack gap="small-100">
                        <s-text size="small" type="strong" color="subdued">Default:</s-text>
                        <s-box padding="small-200" background="strong" borderRadius="small">
                          <s-text size="small" style="font-family: monospace;">${propInfo.defaultValue}</s-text>
                        </s-box>
                      </s-stack>
                    `
                        : ''
                    }
                  </s-stack>
                </s-box>`;
}

/**
 * Generate a slot card for displaying slot information
 */
function generateSlotCard(slotName, slotInfo) {
  return `<s-box padding="base" background="success" borderRadius="base">
                        <s-stack gap="small-200">
                          <s-stack direction="inline" gap="small-200" alignItems="center">
                            <s-text type="strong">${slotName}${
    slotInfo.optional ? '?' : ''
  }</s-text>
                            <s-badge tone="success" size="small">Slot</s-badge>
                            <s-badge tone="info" size="small">${
                              slotInfo.expandedType?.resolvedType ||
                              slotInfo.type ||
                              'ComponentChildren'
                            }</s-badge>
                            ${
                              slotInfo.optional
                                ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
                                : '<s-badge tone="warning" size="small">Required</s-badge>'
                            }
                          </s-stack>
                          
                          ${
                            slotInfo.description
                              ? `<s-text>${slotInfo.description}</s-text>`
                              : ''
                          }
                          
                          ${generateExpandedTypeInfo(slotInfo)}
                          ${generateJSDocTags(slotInfo.tags)}
                          
                          ${
                            slotInfo.defaultValue
                              ? `
                            <s-stack gap="small-100">
                              <s-text size="small" type="strong" color="subdued">Default:</s-text>
                              <s-box padding="small-200" background="strong" borderRadius="small">
                                <s-text size="small" style="font-family: monospace;">${slotInfo.defaultValue}</s-text>
                              </s-box>
                            </s-stack>
                          `
                              : ''
                          }
                        </s-stack>
                      </s-box>`;
}

/**
 * Generate a prop card for surface props with comparison
 */
function generateSurfacePropCard(propName, propInfo, canonicalProp) {
  // Use resolved types for comparison
  const propType = propInfo.expandedType?.resolvedType || propInfo.type;
  const canonicalType =
    canonicalProp?.expandedType?.resolvedType || canonicalProp?.type;

  const matchesSpec =
    canonicalProp &&
    canonicalType === propType &&
    canonicalProp.optional === propInfo.optional;

  return `<s-box padding="base" background="${
    matchesSpec ? 'base' : 'caution'
  }" borderRadius="base">
                            <s-stack gap="small-200">
                              <s-stack direction="inline" gap="small-200" alignItems="center">
                                <s-text type="strong">${propName}${
    propInfo.optional ? '?' : ''
  }</s-text>
                                <s-badge tone="info" size="small">${
                                  propInfo.expandedType?.resolvedType ||
                                  propInfo.type ||
                                  'unknown'
                                }</s-badge>
                                ${
                                  propInfo.optional
                                    ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
                                    : '<s-badge tone="warning" size="small">Required</s-badge>'
                                }
                                
                                ${
                                  canonicalProp
                                    ? ''
                                    : '<s-badge tone="info" size="small">Surface-specific</s-badge>'
                                }
                                ${
                                  canonicalProp && !matchesSpec
                                    ? '<s-badge tone="warning" size="small">Differs from spec</s-badge>'
                                    : ''
                                }
                                ${
                                  matchesSpec
                                    ? '<s-badge tone="success" size="small">Matches spec</s-badge>'
                                    : ''
                                }
                              </s-stack>
                              
                              ${
                                propInfo.description
                                  ? `<s-text>${propInfo.description}</s-text>`
                                  : ''
                              }
                              
                              ${generateExpandedTypeInfo(propInfo)}
                              
                              ${generateJSDocTags(propInfo.tags)}
                              
                              ${
                                canonicalProp && !matchesSpec
                                  ? generateSpecDiff(
                                      canonicalProp,
                                      propInfo,
                                      canonicalType,
                                      propType,
                                    )
                                  : ''
                              }
                              
                              ${
                                propInfo.defaultValue
                                  ? `
                                <s-stack gap="small-100">
                                  <s-text size="small" type="strong" color="subdued">Default:</s-text>
                                  <s-box padding="small-200" background="strong" borderRadius="small">
                                    <s-text size="small" style="font-family: monospace;">${propInfo.defaultValue}</s-text>
                                  </s-box>
                                </s-stack>
                              `
                                  : ''
                              }
                            </s-stack>
                          </s-box>`;
}

/**
 * Generate a slot card for surface implementations with comparison
 */
function generateSurfaceSlotCard(slotName, slotInfo, canonicalSlot) {
  // Use resolved types for comparison
  const slotType = slotInfo.expandedType?.resolvedType || slotInfo.type;
  const canonicalType =
    canonicalSlot?.expandedType?.resolvedType || canonicalSlot?.type;

  const matchesSpec =
    canonicalSlot &&
    canonicalType === slotType &&
    canonicalSlot.optional === slotInfo.optional;

  const backgroundColor = matchesSpec ? 'success' : 'caution';

  let specBadge = '';
  if (canonicalSlot) {
    if (matchesSpec) {
      specBadge = '<s-badge tone="success" size="small">Matches spec</s-badge>';
    } else {
      specBadge =
        '<s-badge tone="warning" size="small">Differs from spec</s-badge>';
    }
  }

  return `<s-box padding="base" background="${backgroundColor}" borderRadius="base">
                            <s-stack gap="small-200">
                              <s-stack direction="inline" gap="small-200" alignItems="center">
                                <s-text type="strong">${slotName}${
    slotInfo.optional ? '?' : ''
  }</s-text>
                                <s-badge tone="success" size="small">Slot</s-badge>
                                <s-badge tone="info" size="small">${
                                  slotInfo.expandedType?.resolvedType ||
                                  slotInfo.type ||
                                  'ComponentChildren'
                                }</s-badge>
                                ${
                                  slotInfo.optional
                                    ? '<s-badge tone="neutral" size="small">Optional</s-badge>'
                                    : '<s-badge tone="warning" size="small">Required</s-badge>'
                                }
                                
                                ${
                                  canonicalSlot
                                    ? ''
                                    : '<s-badge tone="info" size="small">Surface-specific</s-badge>'
                                }
                                
                                ${specBadge}
                              </s-stack>
                              
                              ${
                                slotInfo.description
                                  ? `<s-text>${slotInfo.description}</s-text>`
                                  : ''
                              }
                              
                              ${generateExpandedTypeInfo(slotInfo)}
                              ${generateJSDocTags(slotInfo.tags)}
                              
                              ${
                                canonicalSlot && !matchesSpec
                                  ? generateSpecDiff(
                                      canonicalSlot,
                                      slotInfo,
                                      canonicalType,
                                      slotType,
                                    )
                                  : ''
                              }
                              
                              ${
                                slotInfo.defaultValue
                                  ? `
                                <s-stack gap="small-100">
                                  <s-text size="small" type="strong" color="subdued">Default:</s-text>
                                  <s-box padding="small-200" background="strong" borderRadius="small">
                                    <s-text size="small" style="font-family: monospace;">${slotInfo.defaultValue}</s-text>
                                  </s-box>
                                </s-stack>
                              `
                                  : ''
                              }
                            </s-stack>
                          </s-box>`;
}

/**
 * Generate a detailed spec difference with visual highlighting
 */
function generateSpecDiff(canonicalProp, propInfo, canonicalType, propType) {
  // Check if both are union types (contain |)
  const isCanonicalUnion = canonicalType.includes('|');
  const isPropUnion = propType.includes('|');

  if (isCanonicalUnion && isPropUnion) {
    return generateUnionTypeDiff(
      canonicalProp,
      propInfo,
      canonicalType,
      propType,
    );
  } else {
    return generateSimpleTypeDiff(
      canonicalProp,
      propInfo,
      canonicalType,
      propType,
    );
  }
}

/**
 * Generate diff for union types with added/removed values highlighted
 */
function generateUnionTypeDiff(
  canonicalProp,
  propInfo,
  canonicalType,
  propType,
) {
  // Parse union values
  const canonicalValues = parseUnionType(canonicalType);
  const propValues = parseUnionType(propType);

  // Find differences
  const missingValues = canonicalValues.filter(
    (val) => !propValues.includes(val),
  );
  const extraValues = propValues.filter(
    (val) => !canonicalValues.includes(val),
  );

  const commonValues = canonicalValues.filter((val) =>
    propValues.includes(val),
  );

  const optionalDiff = canonicalProp.optional !== propInfo.optional;
  const hasDifferences =
    missingValues.length > 0 || extraValues.length > 0 || optionalDiff;

  if (!hasDifferences) return '';

  return `
    <s-box padding="small-200" background="warning" borderRadius="small">
      <s-stack gap="small-100">
        <s-text size="small" type="strong" color="critical">Spec Difference</s-text>
        
        ${
          optionalDiff
            ? `
          <s-text size="small" color="critical">
            ${
              canonicalProp.optional
                ? 'Should be optional'
                : 'Should be required'
            }
          </s-text>
        `
            : ''
        }
        
        ${
          commonValues.length > 0
            ? `
          <s-stack direction="inline" gap="small-100">
            ${commonValues
              .map(
                (val) =>
                  `<s-badge tone="success" size="small">${val}</s-badge>`,
              )
              .join('')}
          </s-stack>
        `
            : ''
        }
        
                ${
                  missingValues.length > 0
                    ? `
           <s-stack direction="inline" gap="small-100">
             ${missingValues
               .map(
                 (val) =>
                   `<s-badge tone="critical" size="small">${val}</s-badge>`,
               )
               .join('')}
           </s-stack>
         `
                    : ''
                }
         
         ${
           extraValues.length > 0
             ? `
           <s-stack direction="inline" gap="small-100">
             ${extraValues
               .map(
                 (val) =>
                   `<s-badge tone="warning" size="small">${val}</s-badge>`,
               )
               .join('')}
           </s-stack>
         `
             : ''
         }
      </s-stack>
    </s-box>
  `;
}

/**
 * Generate diff for non-union types
 */
function generateSimpleTypeDiff(
  canonicalProp,
  propInfo,
  canonicalType,
  propType,
) {
  const optionalDiff = canonicalProp.optional !== propInfo.optional;
  const typeDiff = canonicalType !== propType;

  if (!optionalDiff && !typeDiff) return '';

  return `
    <s-box padding="small-200" background="warning" borderRadius="small">
      <s-stack gap="small-100">
        <s-text size="small" type="strong" color="critical">Spec Difference</s-text>
        
        ${
          optionalDiff
            ? `
          <s-text size="small" color="critical">
            ${
              canonicalProp.optional
                ? 'Should be optional'
                : 'Should be required'
            }
          </s-text>
        `
            : ''
        }
        
        ${
          typeDiff
            ? `
          <s-stack direction="inline" gap="small-100">
            <s-badge tone="critical" size="small">Expected: ${canonicalType}${
                canonicalProp.optional ? '?' : ''
              }</s-badge>
            <s-badge tone="warning" size="small">Actual: ${propType}${
                propInfo.optional ? '?' : ''
              }</s-badge>
          </s-stack>
        `
            : ''
        }
      </s-stack>
    </s-box>
  `;
}

/**
 * Parse union type string into individual values
 */
function parseUnionType(typeString) {
  if (!typeString.includes('|')) {
    return [typeString.trim()];
  }

  return typeString
    .split('|')
    .map((val) => val.trim())
    .map((val) => val.replace(/^['"`]|['"`]$/g, '')) // Remove surrounding quotes
    .filter((val) => val.length > 0);
}

/**
 * Generate expanded type information
 */
function generateExpandedTypeInfo(propInfo) {
  if (!propInfo.expandedType?.details) return '';

  const details = propInfo.expandedType.details;
  const infoItems = [];

  if (details.isUnion) {
    infoItems.push(`Union of ${details.unionCount} types`);
  }

  if (details.isArray) {
    infoItems.push('Array type');
  }

  if (details.isObjectLiteral) {
    const propCount = Object.keys(details.properties || {}).length;
    infoItems.push(`Object with ${propCount} properties`);
  }

  if (details.isConditional) {
    infoItems.push('Conditional type');
  }

  if (details.typeArguments) {
    infoItems.push(
      `Generic with ${details.typeArguments.length} type arguments`,
    );
  }

  if (infoItems.length === 0) return '';

  return `<s-text size="small" color="subdued">Type details: ${infoItems.join(
    ', ',
  )}</s-text>`;
}

/**
 * Generate JSDoc tags display
 */
function generateJSDocTags(tags) {
  if (!tags || Object.keys(tags).length === 0) return '';

  const tagEntries = Object.entries(tags).filter(([key]) => key !== 'default');
  if (tagEntries.length === 0) return '';

  return `<s-stack gap="small-100">
    <s-text size="small" type="strong" color="subdued">Documentation tags:</s-text>
    ${tagEntries
      .map(
        ([tag, value]) =>
          `<s-text size="small" color="subdued">@${tag}: ${value}</s-text>`,
      )
      .join('')}
  </s-stack>`;
}

/**
 * Generate footer section
 */
function generateFooter(metadata) {
  return `<!-- Footer -->
      <s-section>
        <s-divider></s-divider>
        <s-stack direction="inline" gap="small-200" alignItems="center">
          <s-text size="small" color="subdued">Generated on ${new Date(
            metadata.generatedAt,
          ).toLocaleString()}</s-text>
          <a href="index.html" style="text-decoration: none; color: inherit;">
            <s-text>← Back to Components List</s-text>
          </a>
        </s-stack>
      </s-section>`;
}
