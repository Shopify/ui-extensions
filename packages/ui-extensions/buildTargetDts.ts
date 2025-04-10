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
  ModuleDeclarationStructure,
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

export type GlobalThis = typeof globalThis & {
  shopify: Api;
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
  combinedPreactJSX,
}: {
  srcPath: string;
  project: Project;
  componentName: string;
  names: Set<string>;
  targetFile: SourceFile;
  combinedPreactJSX: Map<
    string,
    {structure: ModuleDeclarationStructure; statements: string[]}
  >;
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

  componentSource.getModules().forEach((module) => {
    const structure = module.getStructure();
    const name = module.getName();

    updateReferences(module, variablesAliasMap);

    // Initialize the map entry for this module once
    if (!combinedPreactJSX.has(name)) {
      combinedPreactJSX.set(name, {structure, statements: []});
    }

    module.getStatements().forEach((statement) => {
      const statementText = statement.getText();
      if (statementText.match(matchPreactJSX)) {
        const replacedText = statementText.replace(
          /namespace createElement\.JSX \{\n?\s*interface IntrinsicElements \{\n?\s*(\[[^\]]+\]:[^;]+;)\n?\s*\}\n?\s*\}/,
          '$1',
        );
        const combined = combinedPreactJSX.get(name);
        combined!.statements = combined!.statements.concat(replacedText);
      }
    });
    // @todo make this work for global
    // if (!combinedPreactJSX.get(name)?.statements.length) {
    //   targetFile.insertModule(0, module.getStructure());
    // }
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
const matchPreactJSX =
  /namespace createElement\.JSX \{\n?\s*interface IntrinsicElements \{\n?\s*(\[[^\]]+\]:[^;]+;)\n?\s*\}\n?\s*\}/;

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

  const combinedPreactJSX = new Map<
    string,
    {structure: ModuleDeclarationStructure; statements: string[]}
  >();

  components?.forEach((componentName) => {
    processComponentDefinitions({
      project,
      componentName,
      names,
      targetFile,
      srcPath,
      combinedPreactJSX,
    });
  });

  combinedPreactJSX.forEach(({statements}) => {
    if (statements.length) {
      const combinedStatements = `\nexport interface IntrinsicElements{\n${statements.join(
        '\n',
      )}\n}\n`;
      targetFile.insertText(0, combinedStatements);
    }
  });

  targetFile.fixMissingImports();
  targetFile.organizeImports();

  // Add DOM and WebWorker references if there are components
  if (components?.length) {
    targetFile.insertText(
      0,
      `// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />\n`,
    );
    targetFile.insertText(
      0,
      `// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="WebWorker" />\n`,
    );
  }

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
