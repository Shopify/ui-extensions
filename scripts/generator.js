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

      if (!sourceFile) {
      return;
    }

    const fileSymbol = checker.getSymbolAtLocation(sourceFile);
  const localSymbols = fileSymbol.valueDeclaration.locals;

  const componentPropsSymbol = fileSymbol.exports.get(`${componentName}Props`);

  if (!componentPropsSymbol) {
        return;
      }

      // console.log(`${componentName} ->>>`);

  const nodeType = checker.getDeclaredTypeOfSymbol(componentPropsSymbol);
  let all = getChildDefinition(componentPropsSymbol, nodeType, checker);

  const types = componentPropsSymbol
    .getDeclarations()
    .flatMap((node) => node.heritageClauses)
    .flatMap((clause) => clause?.types)
    .filter(Boolean);

  all = {
    ...all,
    ...types.reduce((acc, type) => {
      const localSymbol = localSymbols.get(type.expression.escapedText);
if (!localSymbol) {
        return acc;
      }

      const localNodeType = checker.getDeclaredTypeOfSymbol(localSymbol);

      return {
        ...acc,
        ...getChildDefinition(localNodeType.symbol, localNodeType, checker),
      };
    }, {}),
  };

  const definition = Object.keys(all).reduce((acc, key) => {
    if (!all[key]) {
      return acc;
    }

    if (all[key].generic) {
      acc.generic = true;
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
}

function getChildDefinition(symbol, nodeType, checker) {
  if (symbol.members) {
    return Array.from(symbol.members.entries()).reduce((acc, [name, sym]) => {
      return {
        ...acc,
        [name]: name === 'children' ? undefined : getDefinition(sym, checker),
      };
    }, {});
  } else if (nodeType.types) {
    return nodeType.types.reduce((acc, type) => {
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

  // Skip never and any types since we can't parse those
  if (propType === 'never' || kind === ts.SyntaxKind.AnyKeyword) {
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

  if (kind === ts.SyntaxKind.ArrayType) {
      return { type: "'array'" };
    }

    if (kind === ts.SyntaxKind.TypeLiteral) {
      return { type: "'object'" };
    }

    if (
      kind === ts.SyntaxKind.TypeReference ||
      kind === ts.SyntaxKind.Identifier ||
      kind === ts.SyntaxKind.LiteralType
    ) {
      return { type: `'${baseLiteralType}'` };
    }

    if (kind === ts.SyntaxKind.UnionType) {
      const unionTypes = symbolType.types.map((type) => {
        const typeKind = checker.typeToTypeNode(type).kind;

        if (
          typeKind === ts.SyntaxKind.TypeReference ||
          typeKind === ts.SyntaxKind.TypeLiteral ||
          typeKind === ts.SyntaxKind.LiteralType
        ) {
          // Objects or Array
          return 'object';
        }

        if (typeKind === ts.SyntaxKind.ArrayType) {
          // Objects or Array
          return 'array';
        }
        // Simple types
        return checker.typeToString(checker.getBaseTypeOfLiteralType(type));
      });

      const uniqueTypes = [...new Set(unionTypes)];

      return { type: `'parsableObject:${uniqueTypes.join('|')}'` };
    }

    return { type: `'${propType}'` };
}
}

function construct(componentName, definition) {
  const PropType = definition.generic
    ? `${componentName}Props<any>`
    : `${componentName}Props`;

  delete definition.generic;

  return `import type {${componentName}Props} from '@shopify/ui-extensions/admin';\n\nimport type {PropsToComponentConstructor} from '../types';\n\nexport const ${componentName}: PropsToComponentConstructor<${PropType}> = ${JSON.stringify(
    definition,
    null,
    2,
  )
    .replace(/"/g, '')
    .replace(/\n/g, '')};`;
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
