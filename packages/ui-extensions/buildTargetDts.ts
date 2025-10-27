import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  copyFileSync,
} from 'fs';
import {join, resolve} from 'path';
import type {SourceFile} from 'ts-morph';
import {Project, SyntaxKind} from 'ts-morph';

function copyComponentDefinitions({
  srcPaths,
  buildPath,
  surface,
}: {
  srcPaths: string[];
  buildPath: string;
  surface: string;
}) {
  const componentsSrcPaths = srcPaths.map((srcPath) =>
    join(srcPath, 'components'),
  );
  const componentsBuildPath = join(
    buildPath,
    `ts/surfaces/${surface}/components`,
  );
  if (!existsSync(buildPath)) {
    mkdirSync(buildPath, {recursive: true});
  }

  const exists = componentsSrcPaths.every((path) => existsSync(path));

  if (!exists) {
    // eslint-disable-next-line no-console
    console.log('No components to copy');
    return false;
  }

  componentsSrcPaths.forEach((componentsSrcPath) => {
    const components = readdirSync(componentsSrcPath);
    components
      .filter((file) => {
        return file.endsWith('d.ts');
      })
      .forEach((file) => {
        copyFileSync(
          join(componentsSrcPath, file),
          join(componentsBuildPath, file),
        );
      });
  });

  return true;
}

function createInitialTargetDefinition({
  buildPath,
  name,
  surface,
}: {
  buildPath: string;
  name: string;
  surface: string;
}) {
  const parts = name.replaceAll("'", '').split('.');
  const fileName = `${parts.join('.')}.d.ts`;
  const directory = join(buildPath, `ts/surfaces/${surface}/targets`);
  const targetPath = join(directory, fileName);

  const template = `import type {ExtensionTargets} from '../extension-targets';
  ${
    surface === 'customer-account' || surface === 'point-of-sale'
      ? `import '../globals';\n`
      : ''
  }
type Target = ExtensionTargets[${name}];
export type Api = Target['api'];
export type Output = Target['output'];
\n`;

  if (!existsSync(directory)) {
    mkdirSync(directory);
  }
  writeFileSync(targetPath, template);
  return targetPath;
}

function processComponentDefinitions({
  srcPaths,
  componentName,
  targetFile,
}: {
  srcPaths: string[];
  project: Project;
  componentName: string;
  names: Set<string>;
  targetFile: SourceFile;
}) {
  const componentSourcePath = srcPaths
    .map((srcPath) => join(srcPath, `components/${componentName}.d.ts`))
    .find((path) => existsSync(path));

  if (!componentSourcePath) {
    // eslint-disable-next-line no-console
    console.log(
      `Component ${componentName} not found in ${componentSourcePath}`,
    );
    return;
  }

  targetFile.addImportDeclaration({
    moduleSpecifier: `../components/${componentName}.d.ts`,
  });
}

function getTargets(sourceFile: SourceFile) {
  const base = sourceFile.getInterface('ExtensionTargets')!;
  const structure = base.getStructure();
  const allInterfaces = [base];

  if (Array.isArray(structure?.extends)) {
    structure.extends.forEach((inherited) => {
      if (typeof inherited === 'string') {
        allInterfaces.push(sourceFile.getInterface(inherited)!);
      }
    });
  }

  return allInterfaces;
}

// Target definitions
function extractTargetComponents(
  sourceFile: SourceFile,
): {name: string; components?: string[]}[] {
  const extensionTargetArray = getTargets(sourceFile);
  return extensionTargetArray
    .map((extensionTargets) => {
      return extensionTargets.getProperties().map((property) => {
        const componentsType = property
          .getType()
          .getProperty('components')
          ?.getTypeAtLocation(extensionTargets);

        let components: string[] | undefined;
        if (componentsType) {
          if (componentsType.isUnion()) {
            components = componentsType
              .getUnionTypes()
              .map((t) => t.getText().replaceAll('"', ''));
            // Single component targets like SmartGridComponents = 'Tile' return an empty array for getUnionTypes, so we need to handle that case
          } else if (componentsType.isLiteral()) {
            components = [componentsType.getText().replaceAll('"', '')];
          }
        }

        return {
          name: property.getName(),
          components,
        };
      });
    })
    .flat();
}

function createTargetDefinition({
  srcPaths,
  buildPath,
  project,
  surface,
  target: {name, components},
}: {
  srcPaths: string[];
  buildPath: string;
  project: Project;
  surface: string;
  target: {name: string; components?: string[]};
}) {
  const targetPath = createInitialTargetDefinition({name, surface, buildPath});
  const targetFile = project.addSourceFileAtPath(targetPath);
  const names = new Set<string>();

  components?.forEach((componentName) => {
    processComponentDefinitions({
      project,
      componentName,
      names,
      targetFile,
      srcPaths,
    });
  });

  targetFile.fixMissingImports();
  targetFile.organizeImports();
  targetFile.saveSync();
}

function extractSurfaceTypesAndComponents(
  surface: string,
  project: Project,
  directory: string,
): {
  apis: string[];
  components: string[];
} {
  const apis = new Set<string>();
  const components = new Set<string>();
  const srcPath = resolve(directory, `src/surfaces/${surface}`);

  // 1. Always include StandardApi as the base
  apis.add('StandardApi');

  // 2. Extract APIs and Components from extension-targets.ts by analyzing RenderExtension types
  const extensionTargetsPath = resolve(srcPath, 'extension-targets.ts');

  if (existsSync(extensionTargetsPath)) {
    // Try to find the source file if it's already been loaded
    let sourceFile = project.getSourceFile(extensionTargetsPath);
    if (!sourceFile) {
      sourceFile = project.addSourceFileAtPath(extensionTargetsPath);
    }

    if (sourceFile) {
      extractAPIsAndComponentsFromExtensionTargets(
        sourceFile,
        apis,
        components,
      );
    }
  }

  // 3. Scan api directory for additional API interfaces
  const apiDir = resolve(srcPath, 'api');
  if (existsSync(apiDir)) {
    scanDirectoryForAPIs(apiDir, project, apis);
  }

  // 4. Scan for component type unions and component directories
  scanDirectoryForComponentTypes(srcPath, project, components);

  return {
    apis: Array.from(apis),
    components: Array.from(components),
  };
}

function extractAPIsAndComponentsFromExtensionTargets(
  sourceFile: SourceFile,
  apis: Set<string>,
  components: Set<string>,
) {
  // Find all RenderExtension type references and extract their API and Component parameters
  const renderExtensionRefs = sourceFile
    .getDescendantsOfKind(SyntaxKind.TypeReference)
    .filter((typeRef) => {
      const typeName = typeRef.getTypeName();
      return typeName.getText() === 'RenderExtension';
    });

  renderExtensionRefs.forEach((renderExtension) => {
    const typeArgs = renderExtension.getTypeArguments();
    if (typeArgs.length >= 1) {
      // First type argument is the API type - handle intersection types like 'CheckoutApi & StandardApi'
      const apiType = typeArgs[0].getText();

      // Split by & to handle intersection types
      apiType.split('&').forEach((api) => {
        const trimmedApi = api.trim();

        // Handle generic types like StandardApi<'target-name'> by extracting the base type
        const baseApiMatch = trimmedApi.match(/^(\w+Api)(<.*>)?$/);
        if (baseApiMatch) {
          const baseApi = baseApiMatch[1];
          if (baseApi.endsWith('Api')) {
            apis.add(baseApi);
          }
        }
      });
    }

    if (typeArgs.length >= 2) {
      // Second type argument is the Component type - extract component type names
      const componentType = typeArgs[1].getText();

      // Handle component unions, component types, and base component names
      extractComponentTypesFromString(componentType, components);
    }
  });
}

function extractComponentTypesFromString(
  componentType: string,
  components: Set<string>,
) {
  // Handle different component type patterns:
  // - Simple types: 'Button'
  // - Union types: 'Button | Text | Banner'
  // - Generic types: 'AnyCheckoutComponent'
  // - Complex types: 'AnyCheckoutComponentExcept<"Chat">'

  // For union types, split by | and process each component
  if (componentType.includes('|')) {
    componentType.split('|').forEach((comp) => {
      const trimmed = comp.trim();
      extractSingleComponentType(trimmed, components);
    });
  } else {
    extractSingleComponentType(componentType.trim(), components);
  }
}

function extractSingleComponentType(
  componentType: string,
  components: Set<string>,
) {
  // Remove quotes from string literals like '"Button"'
  const cleanedComponentType = componentType.replace(/['"]/g, '');

  // Handle generic component types by extracting the base name
  const baseComponentMatch = cleanedComponentType.match(/^(\w+)/);
  if (baseComponentMatch) {
    const baseComponent = baseComponentMatch[1];

    // Filter out noise and generic types
    const excludeTypes = [
      'any',
      'never',
      'string',
      'infer',
      'unknown',
      'void',
      'undefined',
      'null',
    ];

    if (
      baseComponent &&
      !excludeTypes.includes(baseComponent.toLowerCase()) &&
      baseComponent.length > 1
    ) {
      // Add well-known component union types
      if (
        baseComponent.includes('Component') ||
        baseComponent.includes('Components')
      ) {
        components.add(baseComponent);
      }

      // Add individual component names (typically PascalCase starting with uppercase)
      else if (baseComponent.match(/^[A-Z][a-z]/)) {
        components.add(baseComponent);
      }
    }
  }
}

function scanDirectoryForComponentTypes(
  srcPath: string,
  project: Project,
  components: Set<string>,
) {
  // Look for component type definitions in shared.ts, components.ts, etc.
  const componentFiles = [
    resolve(srcPath, 'shared.ts'),
    resolve(srcPath, 'components.ts'),
    resolve(srcPath, 'shared/index.ts'),
  ];

  componentFiles.forEach((filePath) => {
    if (existsSync(filePath)) {
      try {
        const sourceFile =
          project.getSourceFile(filePath) ||
          project.addSourceFileAtPath(filePath);

        // Extract type aliases that might be component unions
        sourceFile
          .getTypeAliases()
          .filter((alias) => {
            const name = alias.getName();
            return name.includes('Component') || name.includes('Components');
          })
          .forEach((alias) => {
            components.add(alias.getName());
          });

        // Extract interfaces that might be components
        sourceFile
          .getInterfaces()
          .filter((iface) => {
            const name = iface.getName();
            return (
              name.includes('Component') ||
              name.includes('Components') ||
              name.match(/^[A-Z][a-z]+$/)
            ); // Simple component names like Button, Text, etc.
          })
          .forEach((iface) => {
            components.add(iface.getName());
          });
      } catch (error) {
        // Skip files that can't be parsed
      }
    }
  });
}

function scanDirectoryForAPIs(
  apiDir: string,
  project: Project,
  apis: Set<string>,
) {
  const scanDir = (dir: string) => {
    if (!existsSync(dir)) return;

    const items = readdirSync(dir, {withFileTypes: true});
    items.forEach((item) => {
      if (item.isDirectory()) {
        scanDir(join(dir, item.name));
      } else if (item.name.endsWith('.ts') && !item.name.endsWith('.doc.ts')) {
        const filePath = join(dir, item.name);
        try {
          const sourceFile = project.addSourceFileAtPath(filePath);

          // Extract all exported interfaces ending with 'Api'
          sourceFile
            .getInterfaces()
            .filter(
              (iface) => iface.isExported() && iface.getName().endsWith('Api'),
            )
            .forEach((iface) => {
              apis.add(iface.getName());
            });
        } catch (error) {
          // Skip files that can't be parsed
        }
      }
    });
  };

  scanDir(apiDir);
}

function createSurfaceGlobalDeclarations({
  buildPath,
  surface,
  project,
  directory,
}: {
  buildPath: string;
  surface: string;
  project: Project;
  directory: string;
}) {
  const globalsDir = join(buildPath, `ts/surfaces/${surface}`);
  const globalsPath = join(globalsDir, 'globals.d.ts');

  if (!existsSync(globalsDir)) {
    mkdirSync(globalsDir, {recursive: true});
  }

  // Extract all APIs and Components available for this surface
  const {apis, components} = extractSurfaceTypesAndComponents(
    surface,
    project,
    directory,
  );

  const shopifyObjectType =
    apis.length > 1 ? apis.join(' & ') : apis[0] || 'any';

  // Create component type union for this surface
  const surfaceComponentsType =
    components.length > 0 ? components.join(' | ') : 'never';

  const globalDeclaration = `// Auto-generated global shopify object and component types for ${surface} surface
// This file is generated by buildTargetDts.ts - do not edit manually

declare global {
  const shopify: ${shopifyObjectType};
  
  namespace ShopifyComponents {
    namespace ${capitalizeFirst(surface)} {
      type AllComponents = ${surfaceComponentsType};
    }
  }
}

export {};
`;

  writeFileSync(globalsPath, globalDeclaration);
  // eslint-disable-next-line no-console
  console.log(
    `Created global declarations for ${surface} surface with APIs: ${apis.join(
      ', ',
    )} and Components: ${components.join(', ')}`,
  );
}

function capitalizeFirst(str: string): string {
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  );
}

export function generateGlobalDeclarations(directory: string, surface: string) {
  const project = new Project();
  const buildPath = resolve(directory, 'build');
  const srcPath = resolve(directory, `src/surfaces/${surface}`);

  // Add the surface's source files to the project for analysis
  if (existsSync(srcPath)) {
    try {
      // Add all TypeScript files in the surface directory recursively
      project.addSourceFilesAtPaths(`${srcPath}/**/*.ts`);
      createSurfaceGlobalDeclarations({buildPath, surface, project, directory});
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        `Failed to generate global declarations for ${surface}:`,
        error,
      );
    }
  }
}

export function buildTargetsDefinitions(
  directory: string,
  surface: string,
  additionalComponentPaths: string[] = [],
) {
  const project = new Project();
  const buildPath = resolve(directory, 'build');
  const srcPath = resolve(directory, `src/surfaces/${surface}`);

  const componentSrcPaths = [
    srcPath,
    ...additionalComponentPaths.map((path) => resolve(directory, path)),
  ];
  const success = copyComponentDefinitions({
    srcPaths: componentSrcPaths,
    buildPath,
    surface,
  });

  if (!success) {
    // eslint-disable-next-line no-console
    console.log('Failed to copy components');
    return;
  }

  const sourceFile = project.addSourceFileAtPath(
    join(srcPath, 'extension-targets.ts'),
  );

  const targets = extractTargetComponents(sourceFile);
  targets.forEach((target) => {
    // Filter out legacy checkout targets that begin with 'Checkout::'.
    //
    // eslint-disable-next-line no-warning-comments
    // TODO: remove these targets from the ui-extensions package instead
    // which requires a checkout-web abstraction for backwards compatibility.
    if (surface === 'checkout' && target.name.startsWith("'Checkout::")) {
      // eslint-disable-next-line no-console
      console.log(`Skipping legacy target: ${target.name}`);
      return;
    }

    createTargetDefinition({
      srcPaths: componentSrcPaths,
      buildPath,
      project,
      surface,
      target,
    });
    // eslint-disable-next-line no-console
    console.log(`Created target definition for ${target.name}`);
  });
}
