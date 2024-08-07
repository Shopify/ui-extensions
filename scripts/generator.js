/* eslint-disable no-undef */
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

/**
 * Prints out particular nodes from a source file
 *
 * @param file a path to a file
 */
function generate(file, outputRootFolder) {
  const componentName = file.match(/\/([^/.]+)\.ts/)?.[1];
  const rootFolder = file.replace(/\/([^/.]+)\.ts/, '');

  const program = ts.createProgram([file], { allowJs: true });
  const sourceFile = program.getSourceFile(file);
  const checker = program.getTypeChecker();

  let all = {};

  ts.forEachChild(sourceFile, (node) => {
    if (!sourceFile) {
      return;
    }

    node.forEachChild((child) => {
      if (child.escapedText !== `${componentName}Props`) {
        return;
      }

      const nodeType = checker.getTypeAtLocation(child);
      const symbol = checker.getSymbolAtLocation(child);

      console.log(`${componentName} ->>>`);

      if (symbol.members) {
        all = Array.from(symbol.members.entries()).reduce(
          (acc, [name, sym]) => {
            return {
              ...acc,
              [name]: getDefinition(sym, checker),
            };
          },
          {},
        );
      } else if (nodeType.types) {
        all = nodeType.types.reduce((acc, type) => {
          const props = checker.getPropertiesOfType(type);
          return {
            ...acc,
            ...props.reduce((acc2, prop) => {
              const propName = checker.symbolToString(prop);
              return { ...acc2, [propName]: getDefinition(prop, checker) };
            }, {}),
          };
        }, {});
      }
    });
  });

  const definition = Object.keys(all).reduce((acc, key) => {
    if (!all[key]) {
      return acc;
    }

    if (all[key].slot) {
      if (!Object.prototype.hasOwnProperty.call(acc, 'slots')) {
        acc.slots = [];
      }
      acc.slots.push(`'${key}'`);
      return acc;
    }

    if (all[key].event) {
      if (!Object.prototype.hasOwnProperty.call(acc, 'methods')) {
        acc.methods = [];
      }
      acc.methods.push(`'${key}'`);
    }

    if (!Object.prototype.hasOwnProperty.call(acc, 'properties')) {
      acc.properties = {};
    }
    acc.properties[key] = all[key];

    return acc;
  }, {});

  const outputFolder = outputRootFolder
    ? path.join(path.resolve(outputRootFolder), componentName, 'definition.ts')
    : path.join(rootFolder, 'definition.ts');

  fs.writeFile(
    outputFolder,
    construct(componentName, definition),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(`Definition generated for ${componentName}`);
    },
  );

  // @todo: run prettier
}

function getDefinition(symbol, checker) {
  const symbolType = checker.getTypeOfSymbolAtLocation(
    symbol,
    symbol.valueDeclaration,
  );

  const kind = checker.typeToTypeNode(symbolType).kind;
  const propType = checker.typeToString(symbolType);
  const baseLiteralType = checker.typeToString(
    checker.getBaseTypeOfLiteralType(symbol),
  );

  // console.log('kind -->', kind);
  // console.log('propType -->', propType);
  // console.log('baseLiteralType -->', baseLiteralType);

  // Skip never types
  if (propType === 'never') {
    return;
  }

  const isSlot =
    kind === ts.SyntaxKind.TypeReference &&
    propType.startsWith('RemoteFragment');

  const isFunction = kind === ts.SyntaxKind.FunctionType;

  if (isSlot) {
    return { slot: true };
  }

  if (isFunction) {
    return { event: true };
  }

  const type =
    kind === ts.SyntaxKind.Identifier || ts.SyntaxKind.UnionType
      ? baseLiteralType
      : propType;

  return { type: `'${type}'` };
}

function construct(componentName, definition) {
  return `import type {${componentName}Props} from '@shopify/ui-extensions/admin';\n\nimport type {PropsToComponentConstructor} from '../types';\n\nexport const ${componentName}: PropsToComponentConstructor<${componentName}Props> = ${JSON.stringify(
    definition,
    null,
    2,
  ).replace(/"/g, '')};
`;
}

const rootFolder = process.argv[2];
const outputRootFolder = process.argv[3];

fs.readdir(rootFolder, (_error, files) => {
  files
    .filter((file) => file !== 'shared')
    .forEach((file) =>
      generate(path.join(rootFolder, file, `${file}.ts`), outputRootFolder),
    );
});
