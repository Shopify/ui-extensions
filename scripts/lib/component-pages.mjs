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

      ${generateCanonicalSpecSection(componentName, canonicalProps)}

      ${generateSurfaceImplementationsSection(
        surfaces,
        surfaceProps,
        canonicalProps,
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
 * Generate canonical specification section
 */
function generateCanonicalSpecSection(componentName, canonicalProps) {
  const canonicalPropEntries = Object.entries(canonicalProps).filter(
    ([key]) => !key.startsWith('_'),
  );

  if (canonicalPropEntries.length === 0) {
    return '';
  }

  return `<!-- Canonical Specification -->
      <s-section heading="📋 Canonical Specification">
        <s-stack gap="base">
          <s-text color="subdued">
            This is the official specification from the ui-api-design package.
          </s-text>
          
          <s-stack gap="small-200">
            ${canonicalPropEntries
              .sort(([propA], [propB]) => propA.localeCompare(propB))
              .map(([propName, propInfo]) =>
                generatePropCard(propName, propInfo),
              )
              .join('')}
          </s-stack>
        </s-stack>
      </s-section>`;
}

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

  return `<s-stack gap="base">
                <s-heading level="3">${surface}</s-heading>
                
                ${
                  propsEntries.length > 0
                    ? `
                  <s-stack gap="small-200">
                    ${propsEntries
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
                    : '<s-text color="subdued">No detailed props information available for this surface.</s-text>'
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
                      ${generateComplexityBadge(propInfo)}
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
                                
                                ${generateComplexityBadge(propInfo)}
                                
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
                                  ? `
                                <s-box padding="small-200" background="warning" borderRadius="small">
                                  <s-stack gap="small-100">
                                    <s-text size="small" type="strong" color="critical">Specification Difference:</s-text>
                                    <s-text size="small">
                                      Spec: <strong>${canonicalType}${
                                      canonicalProp.optional ? '?' : ''
                                    }</strong> vs 
                                      Implementation: <strong>${propType}${
                                      propInfo.optional ? '?' : ''
                                    }</strong>
                                    </s-text>
                                  </s-stack>
                                </s-box>
                              `
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
 * Generate complexity badge based on type complexity
 */
function generateComplexityBadge(propInfo) {
  if (!propInfo.expandedType?.details?.complexity) return '';

  const complexity = propInfo.expandedType.details.complexity;
  if (complexity <= 3) return '';

  let tone = 'info';
  if (complexity > 10) {
    tone = 'critical';
  } else if (complexity > 6) {
    tone = 'warning';
  }
  return `<s-badge tone="${tone}" size="small">Complex (${complexity})</s-badge>`;
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
