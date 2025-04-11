import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  copyFileSync,
} from 'fs';
import {join, resolve} from 'path';
import type {
  InterfaceDeclaration,
  ModuleDeclaration,
  SourceFile,
} from 'ts-morph';
import {Project} from 'ts-morph';

function copyComponentDefinitions({
  srcPath,
  buildPath,
  surface,
}: {
  srcPath: string;
  buildPath: string;
  surface: string;
}) {
  if (surface === 'checkout') {
    // HACK: Checkout doesn't yet have `<component>.d.ts` files, so we can't process them
    return true;
  }
  const componentsSrcPath = join(srcPath, 'components');
  const componentsBuildPath = join(
    buildPath,
    `ts/surfaces/${surface}/components`,
  );
  if (!existsSync(buildPath)) {
    mkdirSync(buildPath, {recursive: true});
  }

  if (!existsSync(componentsSrcPath)) {
    // eslint-disable-next-line no-console
    console.log('No components to copy');
    return false;
  }

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
type Target = ExtensionTargets[${name}];
export type Api = Target['api'];
export type Output = Target['output'];

declare global {
  const shopify: Api;
  export default function extension(): Output;
}\n`;

  if (!existsSync(directory)) {
    mkdirSync(directory);
  }
  writeFileSync(targetPath, template);
  return targetPath;
}

function processComponentDefinitions({
  srcPath,
  project,
  componentName,
  names,
  targetFile,
}: {
  srcPath: string;
  project: Project;
  componentName: string;
  names: Set<string>;
  targetFile: SourceFile;
}) {
  const componentSourcePath = join(srcPath, `components/${componentName}.d.ts`);
  if (!existsSync(componentSourcePath)) {
    // eslint-disable-next-line no-console
    console.log(
      `Component ${componentName} not found in ${componentSourcePath}`,
    );
    return;
  }

  const componentSource = project.addSourceFileAtPath(componentSourcePath);
  const variablesAliasMap = new Map<string, string>();

  // Process variable statements
  componentSource.getVariableStatements().forEach((variable) => {
    const structure = variable.getStructure();
    structure.declarations.forEach((declaration) => {
      let name = declaration.name;
      if (names.has(name)) {
        name = `${componentName}${name}`;
        variable.replaceWithText(
          variable.getText().replace(declaration.name, name),
        );
        variablesAliasMap.set(declaration.name, name);
      }
      names.add(name);
    });

    targetFile.insertVariableStatement(0, variable.getStructure());
  });

  // Process interfaces
  componentSource.getInterfaces().forEach((componentInterface) => {
    let name = componentInterface.getName();
    if (names.has(name)) {
      name = `${componentName}${name}`;
      componentInterface.rename(name, {
        usePrefixAndSuffixText: true,
        renameInStrings: true,
      });
    }
    names.add(name);

    updateReferences(componentInterface, variablesAliasMap);
    targetFile.insertInterface(0, componentInterface.getStructure());
  });

  // Process modules
  componentSource.getModules().forEach((module) => {
    updateReferences(module, variablesAliasMap);
    targetFile.insertModule(0, module.getStructure());
  });
}

function updateReferences(
  node: ModuleDeclaration | InterfaceDeclaration,
  aliasMap: Map<string, string>,
) {
  let text = node.getText();
  aliasMap.forEach((alias, original) => {
    text = text.replace(original, alias);
  });
  node.replaceWithText(text);
}

function getTargets(sourceFile: SourceFile, surface: string) {
  switch (surface) {
    case 'checkout':
      return [
        sourceFile.getInterface('RenderExtensionTargets')!,
        sourceFile.getInterface('RunnableExtensionTargets')!,
      ];

    case 'customer-account':
      return [
        sourceFile.getInterface('OrderStatusExtensionTargets')!,
        sourceFile.getInterface('CustomerAccountExtensionTargets')!,
      ];
    case 'admin':
      return [sourceFile.getInterface('ExtensionTargets')!];
    default:
      return [sourceFile.getInterface('ExtensionTargets')!];
  }
}

// Alternative way to get the targets which can handle interfaces or types, but is more brittle
// function getTargets(sourceFile: SourceFile, surface: string) {
//   try {
//     const extensionTargetsInterface =
//       sourceFile.getInterface('ExtensionTargets');
//     if (extensionTargetsInterface) {
//       return [extensionTargetsInterface];
//     }

//     // ExtensionTargets could be a type composed of multiple interfaces
//     const extensionTargetsType = sourceFile.getTypeAlias('ExtensionTargets')!;
//     if (extensionTargetsType) {
//       const typeText = extensionTargetsType.getText();
//       if (typeText.includes('&')) {
//         // Extract just the interface names from the type definition
//         const typeDefinition = typeText
//           .replace('export type ExtensionTargets =', '')
//           .trim();
//         const interfaceNames = typeDefinition
//           .split('&')
//           .map((name) => name.trim())
//           .map((name) => name.replace(';', '').trim());

//         console.log('interfaceNames', interfaceNames);
//         return interfaceNames.map((name) => sourceFile.getInterface(name)!);
//       }
//     }
//   } catch (error) {
//     throw new Error(
//       `Error retrieving ExtensionTargets for surface: ${surface}`,
//       {cause: error},
//     );
//   }
// }

// Target definitions
function extractTargetComponents(
  sourceFile: SourceFile,
  surface: string,
): {name: string; components?: string[]}[] {
  const extensionTargetArray = getTargets(sourceFile, surface);
  return extensionTargetArray
    .map((extensionTargets) => {
      return extensionTargets.getProperties().map((property) => {
        const components = property
          .getType()
          .getProperty('components')
          ?.getTypeAtLocation(extensionTargets)
          .getUnionTypes()
          .map((t) => t.getText().replaceAll('"', ''));

        return {
          name: property.getName(),
          components,
        };
      });
    })
    .flat();
}

function createTargetDefinition({
  srcPath,
  buildPath,
  project,
  surface,
  target: {name, components},
}: {
  srcPath: string;
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
      srcPath,
    });
  });

  targetFile.fixMissingImports();
  targetFile.organizeImports();
  targetFile.saveSync();
}

export function buildTargetsDefinitions(directory: string, surface: string) {
  const project = new Project();
  const buildPath = resolve(directory, 'build');
  const srcPath = resolve(directory, `src/surfaces/${surface}`);
  const success = copyComponentDefinitions({srcPath, buildPath, surface});
  if (!success) {
    // eslint-disable-next-line no-console
    console.log('Failed to copy components');
    return;
  }

  const sourceFile = project.addSourceFileAtPath(
    join(srcPath, 'extension-targets.ts'),
  );

  const targets = extractTargetComponents(sourceFile, surface);
  targets.forEach((target) => {
    createTargetDefinition({
      srcPath,
      buildPath,
      project,
      surface,
      target,
    });
    // eslint-disable-next-line no-console
    console.log(`Created target definition for ${target.name}`);
  });
}
