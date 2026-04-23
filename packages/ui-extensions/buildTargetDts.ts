import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  copyFileSync,
} from 'fs';
import {join, resolve} from 'path';
import type {SourceFile} from 'ts-morph';
import {Project} from 'ts-morph';

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
  }${
    surface === 'point-of-sale'
      ? `export {POS_EVENT_NAMES} from '../events';
export type {ShopifyEventMap, TransactionCompleteEvent, CashTrackingSessionStartEvent, CashTrackingSessionCompleteEvent} from '../events';
${parts.join('.') === 'pos.app.ready.data' ? `export type {BackgroundShopifyGlobal as ShopifyGlobal} from '../globals';\n` : ''}`
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
