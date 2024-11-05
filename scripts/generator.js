/* eslint-disable no-undef */
/* eslint-disable no-console */
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

/**
 * Generate definition objects to be used with `createRemoteComponent` from remote-dom
 * @param inputPath - path to your components definition
 * @param outputPath - path to save the generated definitions
 * @param templatePath - path to your definition template
 * @param components - space delimited component names
 * @example: yarn generate-definition packages/ui-extensions/src/surfaces/admin/components ../web/app/shared/domains/extensibility/ui-extensions/components ../web/app/shared/domains/extensibility/ui-extensions/definitionTemplate.txt
 * NOTE: You will need to run prettier on the generated definitions.
 */

function generate({file, outputRootFolder, templatePath, components}) {
  const componentName = file.match(/\/([^/.]+)\.ts/)?.[1];

  if (
    !componentName ||
    (components.length && !components.includes(componentName))
  ) {
    return;
  }

  const rootFolder = file.replace(/\/([^/.]+)\.ts/, '');

  const program = ts.createProgram([file], {allowJs: true});
  const sourceFile = program.getSourceFile(file);
  const checker = program.getTypeChecker();

  if (!sourceFile) {
    return;
  }

  const fileSymbol = checker.getSymbolAtLocation(sourceFile);
  if (!fileSymbol || !fileSymbol.exports) {
    return;
  }

  const componentPropsSymbol = fileSymbol.exports.get(`${componentName}Props`);

  if (!componentPropsSymbol) {
    return;
  }

  // console.log(`${componentName} ->>>`);

  const localSymbols = fileSymbol.valueDeclaration.locals;

  const nodeType = checker.getDeclaredTypeOfSymbol(componentPropsSymbol);
  let all = getChildDefinition({
    symbol: componentPropsSymbol,
    nodeType,
    checker,
  });

  const declarations = componentPropsSymbol.getDeclarations();

  if (declarations) {
    const types = declarations
      .flatMap((node) => node.heritageClauses)
      .flatMap((clause) => clause?.types)
      .filter(Boolean);

    all = {
      ...all,
      ...types.reduce((acc, type) => {
        if (!type) {
          return acc;
        }

        const localSymbol = localSymbols.get(type.expression.escapedText);

        if (!localSymbol) {
          return acc;
        }

        const localNodeType = checker.getDeclaredTypeOfSymbol(localSymbol);
        const inheritedDefinition = getChildDefinition({
          symbol: localNodeType.symbol,
          nodeType: localNodeType,
          checker,
          fileSymbol,
          skipGeneric: true,
        });

        // Skip generic definitions for inherited types as we only need to worry about the root
        if (inheritedDefinition.generic) {
          return acc;
        }

        return {
          ...acc,
          ...inheritedDefinition,
        };
      }, {}),
    };
  }

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

    // If this is an event, push to the events array and skip adding it to prop
    if (typeof all[key].event === 'string') {
      if (!Object.prototype.hasOwnProperty.call(acc, 'events')) {
        acc.events = [];
      }
      acc.events.push(`'${all[key].event}'`);
      return acc;
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
    construct(
      {
        componentName,
        definition,
        propType: definition.generic
          ? `${componentName}Props<any>`
          : `${componentName}Props`,
      },
      templatePath,
    ),
    function (err) {
      if (err) {
        return console.log('Failed to write definition: ', err);
      }
      console.log(`Definition generated for ${componentName}`);
    },
  );
}

function getChildDefinition({symbol, nodeType, checker, skipGeneric = false}) {
  if (symbol.members) {
    return Array.from(symbol.members.entries()).reduce(
      (acc, [name, subSymbols]) => {
        // console.log('name --->', name);
        const definition = getDefinition({
          symbol: subSymbols,
          checker,
          skipGeneric,
          name,
        });

        if (!definition || name === 'children') {
          return acc;
        }

        return {
          ...acc,
          [name]: definition,
        };
      },
      {},
    );
  } else if (nodeType.types) {
    return nodeType.types.reduce((acc, type) => {
      const symbols = checker.getPropertiesOfType(type);
      return {
        ...acc,
        ...symbols.reduce((subTypes, subSymbol) => {
          const name = checker.symbolToString(subSymbol);
          // console.log('name --->', name);
          const definition = getDefinition({
            symbol: subSymbol,
            checker,
            skipGeneric,
            name,
          });

          if (!definition || name === 'children') {
            return subTypes;
          }

          return {
            ...subTypes,
            [name]: definition,
          };
        }, {}),
      };
    }, {});
  }
}

function getDefinition({symbol, checker, skipGeneric, name}) {
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

  // Skip never we can't parse those
  if (propType === 'never') {
    return;
  }

  if (kind === ts.SyntaxKind.AnyKeyword) {
    return skipGeneric ? undefined : {generic: true};
  }

  const isSlot =
    kind === ts.SyntaxKind.TypeReference &&
    propType.startsWith('RemoteFragment');

  const isFunction = kind === ts.SyntaxKind.FunctionType;

  if (isSlot) {
    return {slot: true};
  }

  if (isFunction) {
    const matchHandler = name.match(/^on([A-Z][a-zA-Z]+$)/);
    if (matchHandler && typeof matchHandler[1] === 'string') {
      const updateProperties = [];
      const handlerArguments = [];
      // @todo: Do something better, this is just a quick workaround
      if (name === 'onChange' || name === 'onInput') {
        if (componentName === 'Checkbox') {
          updateProperties.push(`'checked'`);
          updateProperties.push(`'indeterminate'`);
          handlerArguments.push(`'checked'`);
        } else {
          updateProperties.push(`'value'`);
          handlerArguments.push(`'value'`);
        }
      }

      return {event: {name, updateProperties, handlerArguments}};
    }
  }

  if (kind === ts.SyntaxKind.ArrayType) {
    return {type: "'array'"};
  }

  if (kind === ts.SyntaxKind.TypeLiteral) {
    return {type: "'object'"};
  }

  if (
    kind === ts.SyntaxKind.TypeReference ||
    kind === ts.SyntaxKind.Identifier ||
    kind === ts.SyntaxKind.LiteralType
  ) {
    return {type: `'${baseLiteralType}'`};
  }

  if (kind === ts.SyntaxKind.UnionType) {
    const types = symbol.declarations
      .flatMap((declarations) => declarations.type.types)
      .filter(Boolean);

    // This is a simple union type, likely a union string
    if (!types.length) {
      return {type: `'${baseLiteralType}'`};
    }

    let unionTypes = [];
    types.forEach((type) => {
      const declarationType = checker.getTypeAtLocation(type);
      const typeKind = type.kind;

      if (typeKind === ts.SyntaxKind.TypeReference) {
        const symbolTypes = getUnionTypesFromTypeReference({
          type,
          checker,
        });
        // console.log(checker.typeToString(type));

        if (symbolTypes) {
          unionTypes = unionTypes.concat(symbolTypes);
          return;
        }
      }

      if (typeKind === ts.SyntaxKind.TypeLiteral) {
        unionTypes.push('object');
        return;
      }

      if (typeKind === ts.SyntaxKind.ArrayType) {
        unionTypes.push('array');
        return;
      }

      // Simple types or fallback
      unionTypes.push(
        checker.typeToString(checker.getBaseTypeOfLiteralType(declarationType)),
      );
    });

    const uniqueTypes = [...new Set(unionTypes)];

    if (uniqueTypes.length > 1) {
      return {
        type: "'union'",
        options: uniqueTypes.map((type) => ({type: `'${type}'`})),
      };
    }

    return {type: `'${uniqueTypes[0]}'`};
  }

  return {type: `'${propType}'`};
}

function construct(parts, templatePath) {
  const template = fs.readFileSync(templatePath, 'utf8');

  // If this is a generic type, replace the expect type with `any` to bypass the constraints
  parts.propType = parts.definition.generic
    ? `${parts.componentName}Props<any>`
    : `${parts.componentName}Props`;

  delete parts.definition.generic;

  return template.replace(/{{ ([a-zA-Z]+) }}/g, (_, token) => {
    const value = parts[token];
    return typeof value === 'object'
      ? JSON.stringify(value, null, 2).replace(/"/g, '').replace(/\n/g, '')
      : value;
  });
}

function getUnionTypesFromTypeReference({type, checker}) {
  if (
    !type ||
    !type.typeName ||
    type.typeName.kind !== ts.SyntaxKind.Identifier ||
    !type.typeName.escapedText
  ) {
    return;
  }

  const symbol = checker.getSymbolAtLocation(type.typeName);

  if (!symbol) {
    return;
  }

  // Attempt to get the constraints of a generic type
  const constrainTypes = symbol
    .getDeclarations()
    .flatMap(
      (declaration) =>
        declaration.constraint &&
        getUnionTypesFromTypeReference({
          type: declaration.constraint,
          checker,
        }),
    )
    .filter(Boolean);

  if (constrainTypes.length) {
    return constrainTypes;
  }

  const symbolType = checker.getDeclaredTypeOfSymbol(symbol);
  if (!symbolType || !symbolType.types) {
    return;
  }

  return symbolType.types.map((literalType) => {
    if (literalType.symbol) {
      return 'object';
    }
    return checker.typeToString(checker.getBaseTypeOfLiteralType(literalType));
  });
}

const rootFolder = process.argv[2];
const outputRootFolder = process.argv[3];
const templatePath = process.argv[4];
const components = process.argv.slice(5);

fs.readdir(rootFolder, (_error, files) => {
  files
    .filter((file) => file !== 'shared')
    .forEach((file) =>
      generate({
        file: path.join(rootFolder, file, `${file}.ts`),
        outputRootFolder,
        templatePath,
        components,
      }),
    );
});
