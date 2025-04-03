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
  const componentsSrcPath = resolve(srcPath, `${surface}/components`);
  const componentsBuildPath = resolve(
    buildPath,
    `ts/surfaces/${surface}/components`,
  );

  if (!existsSync(componentsSrcPath) || !existsSync(componentsBuildPath))
    return;

  const components = readdirSync(srcPath);
  components
    .filter((file) => file.endsWith('d.ts'))
    .forEach((file) => {
      copyFileSync(
        join(componentsSrcPath, file),
        join(componentsBuildPath, file),
      );
    });
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
  const directory = resolve(buildPath, `ts/surfaces/${surface}/targets`);
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
  surface,
  componentName,
  names,
  targetFile,
}: {
  srcPath: string;
  project: Project;
  surface: string;
  componentName: string;
  names: Set<string>;
  targetFile: SourceFile;
}) {
  const componentSourcePath = resolve(
    srcPath,
    `surfaces/${surface}/components/${componentName}.d.ts`,
  );
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

// Target definitions
function extractTargetComponents(sourceFile: SourceFile) {
  const extensionTargets = sourceFile.getInterface('ExtensionTargets')!;
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
      surface,
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
  const buildPath = resolve(directory, 'build');
  const srcPath = resolve(directory, 'src');
  const project = new Project();

  copyComponentDefinitions({srcPath, buildPath, surface});

  const sourceFile = project.addSourceFileAtPath(
    resolve(srcPath, `surfaces/${surface}/extension-targets.ts`),
  );

  const targets = extractTargetComponents(sourceFile);
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
