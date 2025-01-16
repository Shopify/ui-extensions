/* eslint-disable no-undef */
/* eslint-disable no-console */
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

const allSymbolNodes = new Map();

/**
 * Generate definition objects to be used with `createRemoteComponent` from remote-dom
 * @param inputPath - path to your components definition
 * @param outputPath - path to save the generated definitions
 * @param templatePath - path to your definition template
 * @param components - space delimited component names
 * @example: yarn generate-definition packages/ui-extensions/src/surfaces/admin/components.d.ts ../web/areas/clients/admin-web/app/shared/domains/extensibility/ui-extensions/components ../web/areas/clients/admin-web/app/shared/domains/extensibility/ui-extensions/definitionTemplate.txt
 * NOTE: You will need to run prettier on the generated definitions.
 */
const REQUIRED_TYPE = 'Required';
const EXTRACT_TYPE = 'Extract';
const PICK_TYPE = 'Pick';
const FUNCTION_REGEX = /^on([A-Z][a-zA-Z]+$)/;

function generate({ componentName, checker, outputRootFolder, templatePath }) {
  const definition = constructFullDefinitionFromSymbol({
    symbolName: `${componentName}Props`,
    checker,
  });

  const outputPath = outputRootFolder
    ? path.join(path.resolve(outputRootFolder), componentName)
    : path.join(componentName);

  if (!definition) {
    console.warn(
      `Cannot generate definition for ${componentName}. This might not be a real component`,
    );
    return;
  }

  // Manually add `id` property
  definition.properties.id = { type: "'string'" };
  // Strip out empty events
  if (!Object.keys(definition.events).length) {
    delete definition.events;
  }

  fs.mkdir(outputPath, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.writeFile(
    path.join(outputPath, 'definition.ts'),
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

function parseComplexType({ type, requestSymbol, checker }) {
  if (type.kind === ts.SyntaxKind.ExpressionWithTypeArguments) {
    if (type.expression.escapedText === REQUIRED_TYPE) {
      const parsedExpression = getParsedExpression({
        type: type.typeArguments[0],
        requestSymbol,
        checker,
      });

      return parsedExpression;
    } else {
      const referenceDefinition = constructFullDefinitionFromSymbol({
        symbolName: type.expression.escapedText,
        requestSymbol,
        checker,
      });

      if (referenceDefinition === 'pending') {
        return;
      }

      return referenceDefinition;
    }
  } else if (type.kind === ts.SyntaxKind.TypeReference) {
    if (type.typeName.escapedText === REQUIRED_TYPE) {
      const referenceType = type.typeArguments[0];
      // This has type arguments so we need to parse, for example Require<Pick<T, 'a' | 'b' | 'c'>>
      if (referenceType.typeArguments) {
        const parsedExpression = getParsedExpression({
          type: referenceType,
          requestSymbol,
          checker,
        });
        return parsedExpression;
      } else {
        const referenceDefinition = constructFullDefinitionFromSymbol({
          symbolName: referenceType.typeName.escapedText,
          requestSymbol,
          checker,
        });

        if (referenceDefinition === 'pending') {
          return;
        }

        return referenceDefinition;
      }
    } else if (type.typeName.escapedText === EXTRACT_TYPE) {
      const parsedExpression = getParsedExpression({
        type,
        requestSymbol,
        checker,
      });
      return parsedExpression;
    }
  }
}

function parseDeclarations({ requestSymbol, declarations, checker }) {
  return declarations.reduce((acc, declaration) => {
    if (!declaration) {
      return acc;
    }

    let combinedDeclarations = acc;

    if (declaration.heritageClauses) {
      const heritageDeclations = parseDeclarations({
        requestSymbol,
        declarations: declaration.heritageClauses,
        checker,
      });

      combinedDeclarations = deepMergeDefinition(
        combinedDeclarations,
        heritageDeclations,
      );
    }

    const hasComplexExtend =
      declaration.types && declaration.token === ts.SyntaxKind.ExtendsKeyword;

    if (hasComplexExtend) {
      const parsedTypes = declaration.types.reduce((acc2, type) => {
        // Parse expression
        const parsedDefinition = parseComplexType({
          type,
          requestSymbol,
          checker,
        });

        return deepMergeDefinition(acc2, parsedDefinition);
      }, {});
      return deepMergeDefinition(combinedDeclarations, parsedTypes);
    }

    // Handle other complex type
    if (
      declaration.type &&
      declaration.type.kind === ts.SyntaxKind.TypeReference
    ) {
      const parsedExpression = parseComplexType({
        type: declaration.type,
        requestSymbol,
        checker,
      });
      return deepMergeDefinition(combinedDeclarations, parsedExpression);
    }

    return combinedDeclarations;
  }, {});
}

function getSymbolDefinition({ symbol, checker }) {
  const nodeType = checker.getDeclaredTypeOfSymbol(symbol);
  let events = {};
  const symbolProperties =
    getChildDefinition({
      symbol,
      nodeType,
      checker,
    }) || {};

  let all = symbolProperties;
  const declarations = symbol.getDeclarations();

  if (declarations) {
    const declarationsDefinitions = parseDeclarations({
      declarations,
      checker,
      requestSymbol: symbol.name,
    });

    all = {
      ...all,
      ...(declarationsDefinitions.properties || {}),
    };
    events = declarationsDefinitions.events || {};
  }

  return Object.keys(all).reduce(
    (acc, key) => {
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
        // This is just set to an empty placeholder because by defaults most events handlers don't need special logic
        acc.events[key] = {};
        return acc;
      }

      acc.properties[key] = all[key];

      return acc;
    },
    { properties: {}, events },
  );
}

function getIntersectionTypesDefinition({ symbolName, types, checker }) {
  return types.reduce((acc, type) => {
    const parsedDefinition = parseComplexType({
      type,
      checker,
    });

    if (parsedDefinition) {
      return deepMergeDefinition(acc, parsedDefinition);
    }
    const parsedExpression = getParsedExpression({
      type,
      requestSymbol: symbolName,
      checker,
    });
    return deepMergeDefinition(acc, parsedExpression);
    // return acc;
  }, {});
}

function constructFullDefinitionFromSymbol({
  symbolName,
  requestSymbol,
  checker,
}) {
  const cache = allSymbolNodes.get(symbolName);
  if (cache?.definition) {
    return cache.definition;
  }

  if (requestSymbol && requestSymbol !== symbolName) {
    cache.pending.add(requestSymbol);
  }

  if (cache?.pending.size > 1) {
    return 'pending';
  }

  // console.log('START constructFullDefinitionFromSymbol -->', symbolName);

  const node = cache?.node;
  if (!node) {
    return;
  }
  const isIntersectionType =
    node.kind === ts.SyntaxKind.TypeAliasDeclaration &&
    node.type?.kind === ts.SyntaxKind.IntersectionType &&
    node.type.types;

  // This is a special intersection type so we need to resolve the expression
  const definition = isIntersectionType
    ? getIntersectionTypesDefinition({ types: node.type.types, checker })
    : getSymbolDefinition({ symbol: node.symbol, checker });

  // Save definition for reuse
  cache.definition = definition;

  // Resolve pending requests for symbol definitions
  const requestsToResolve = Array.from(cache.pending.keys());
  requestsToResolve.forEach((rSymbol) => {
    const symbolCache = allSymbolNodes.get(rSymbol);
    if (symbolCache) {
      const result = constructFullDefinitionFromSymbol({
        symbolName: rSymbol,
        checker,
      });
      if (result !== 'pending') {
        symbolCache.definition = result;
        cache.pending.delete(rSymbol);
      }
    }
  });

  // console.log('JSON -->', JSON.stringify(definition));
  // console.log('END constructFullDefinitionFromSymbol -->', symbolName);
  return definition;
}

function expandTemplate({ template, symbols, expandedValues }) {
  if (symbols.length === 0) {
    expandedValues.push(template.replace(/`/g, "'"));
    return;
  }

  const symbol = symbols[0];
  const expansionRegex = new RegExp(`\\\${${symbol}}`);
  const cache = allSymbolNodes.get(symbol);
  const available = [...(cache?.literalValues || [])];

  available.forEach((value) => {
    const newTemplate = template.replace(expansionRegex, value);
    expandTemplate({
      template: newTemplate,
      symbols: symbols.slice(1),
      expandedValues,
    });
  });
}

function getChildDefinition({ symbol, checker, skipGeneric = false }) {
  const stringEnumMap = new Map();
  const node = allSymbolNodes.get(symbol.name)?.node;
  if (!node) {
    return;
  }
  const nodeType = checker.getTypeAtLocation(node);

  allSymbolNodes.get(symbol.name)?.node.forEachChild((child) => {
    const defaultTags = ts.getAllJSDocTags(child, (tag) => {
      return tag.tagName.escapedText === 'default';
    });

    if (defaultTags.length && defaultTags[0].comment) {
      const childType = checker.getTypeAtLocation(child);
      const values = [];
      const interpolationRules = [];
      if (childType.isUnion()) {
        for (const type of childType.types) {
          // We can really only interpret symbols that resolve to a string so we ignore others
          if (type.symbol) {
            const constraint = type.symbol.getDeclarations()[0].constraint;
            const constraintName = constraint.typeName.escapedText;
            const cache = allSymbolNodes.get(constraintName);
            const symbolType = cache?.node?.type;
            if (symbolType) {
              const literalValues = [];
              symbolType.types.forEach((st) => {
                if (st.kind !== ts.SyntaxKind.LiteralType) {
                  return;
                }
                values.push(`'${st.literal.text}'`);
                literalValues.push(st.literal.text);
              });
              cache.literalValues = literalValues;
              allSymbolNodes.set(type.symbol.name, cache);
            }
          } else {
            const childValue = checker.typeToString(type, child);
            const templateToken = new RegExp(/\${[a-zA-Z]*}/);

            if (templateToken.test(childValue)) {
              const templateSymbols = type.types
                .filter((t) => t.symbol)
                .map((t) => t.symbol.name);

              const template = childValue;
              const expandedValues = [];

              // Start the expansion process with all symbols
              expandTemplate({
                template,
                symbols: templateSymbols,
                expandedValues,
              });

              expandedValues.forEach((expandedValue) => {
                if (templateToken.test(expandedValue)) {
                  interpolationRules.push(expandedValue);
                } else {
                  values.push(expandedValue);
                }
              });
            } else {
              values.push(childValue.replace(/"/g, "'").trim());
            }
          }
        }
      }
      // NOTE: This only works for string default values for now
      // Trim non-value comments
      const trimmedDefault = defaultTags[0].comment
        .trim()
        .replace(/^(?:'|")([a-zA-Z]*)(?:'|")(?:(?:\n|.)*)$/, "'$1'");
      stringEnumMap.set(child.symbol.escapedName, {
        default: trimmedDefault,
        values,
        interpolationRules,
      });
    }
  });

  if (symbol.members) {
    return Array.from(symbol.members.entries()).reduce(
      (acc, [name, subSymbols]) => {
        const subSymbolDeclaredType = subSymbols.valueDeclaration?.type;
        const isIndexedAccessType =
          subSymbolDeclaredType?.kind === ts.SyntaxKind.IndexedAccessType;

        if (isIndexedAccessType) {
          const referenceSymbolName =
            subSymbolDeclaredType.objectType.typeName.escapedText;
          const propName = subSymbolDeclaredType.indexType.literal.text;

          const referenceDefinition = constructFullDefinitionFromSymbol({
            symbolName: referenceSymbolName,
            requestSymbol: symbol.name,
            checker,
          });

          if (referenceDefinition === 'pending') {
            return acc;
          }

          if (propName && referenceDefinition.properties?.[propName]) {
            return {
              ...acc,
              [name]: referenceDefinition.properties[propName],
            };
          }
        }

        const definition = getDefinition({
          symbol: subSymbols,
          checker,
          skipGeneric,
          name,
          stringEnumDefinition: stringEnumMap.get(name),
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
          const definition = getDefinition({
            symbol: subSymbol,
            checker,
            skipGeneric,
            name,
            stringEnumDefinition: stringEnumMap.get(name),
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

function getDefinition({
  symbol,
  checker,
  skipGeneric,
  name,
  stringEnumDefinition,
}) {
  const symbolType = checker.getTypeOfSymbolAtLocation(
    symbol,
    symbol.valueDeclaration,
  );
  const node = checker.typeToTypeNode(symbolType);
  const kind = node.kind;
  const propType = checker.typeToString(symbolType);
  const baseLiteralType = checker.typeToString(
    checker.getBaseTypeOfLiteralType(symbol),
  );

  if (symbol.valueDeclaration?.type) {
    const parsedExpression = getParsedExpression({
      type: symbol.valueDeclaration.type,
      checker,
    });
    if (parsedExpression) {
      return parsedExpression.properties[name] || parsedExpression.events[name];
    }
  }

  // console.log('kind -->', kind);
  // console.log('propType -->', propType);
  // console.log('baseLiteralType -->', baseLiteralType);

  // Skip never we can't parse those
  if (propType === 'never') {
    return;
  }

  if (kind === ts.SyntaxKind.AnyKeyword) {
    return skipGeneric ? undefined : { generic: true };
  }

  const isSlot =
    kind === ts.SyntaxKind.TypeReference &&
    propType.startsWith('RemoteFragment');

  const isFunction = kind === ts.SyntaxKind.FunctionType;

  if (isSlot) {
    return { slot: true };
  }

  if (isFunction) {
    const matchHandler = name.match(FUNCTION_REGEX);
    if (matchHandler && typeof matchHandler[1] === 'string') {
      return { event: name };
    }
  }

  if (kind === ts.SyntaxKind.ArrayType) {
    return { type: "'array'" };
  }

  if (kind === ts.SyntaxKind.TypeLiteral) {
    return { type: "'object'" };
  }

  if (kind === ts.SyntaxKind.TypeReference) {
    if (stringEnumDefinition && baseLiteralType === 'string') {
      return { type: "'stringEnum'", ...stringEnumDefinition };
    }
    return { type: `'${baseLiteralType}'` };
  }

  if (kind === ts.SyntaxKind.Identifier || kind === ts.SyntaxKind.LiteralType) {
    return { type: `'${baseLiteralType}'` };
  }

  if (kind === ts.SyntaxKind.UnionType) {
    const types = symbol.declarations
      .flatMap((declarations) => declarations.type.types)
      .filter(Boolean);

    // This is a simple union type, likely a union string
    if (!types.length) {
      return { type: `'${baseLiteralType}'` };
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
        options: uniqueTypes.map((type) => ({ type: `'${type}'` })),
      };
    }

    if (unionTypes[0] === 'string' && stringEnumDefinition) {
      return { type: "'stringEnum'", ...stringEnumDefinition };
    }

    return { type: `'${uniqueTypes[0]}'` };
  }

  return { type: `'${propType}'` };
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

function getUnionTypesFromTypeReference({ type, checker }) {
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

function getParsedExpression({ type, requestSymbol, checker }) {
  const typeReference = type.typeArguments?.[0];
  const expressionType = type.typeArguments?.[1];
  if (!typeReference || !expressionType) {
    return;
  }

  switch (type.typeName.escapedText) {
    case PICK_TYPE: {
      const properties = {};
      const events = {};
      const referenceDefinition = constructFullDefinitionFromSymbol({
        symbolName: typeReference.typeName.escapedText,
        requestSymbol,
        checker,
      });

      if (referenceDefinition === 'pending') {
        return;
      }

      if (
        !referenceDefinition.properties ||
        expressionType.kind !== ts.SyntaxKind.UnionType
      ) {
        return;
      }

      expressionType.types.forEach((t) => {
        if (referenceDefinition.properties[t.literal.text]) {
          properties[t.literal.text] =
            referenceDefinition.properties[t.literal.text];
        } else if (referenceDefinition.events[t.literal.text]) {
          events[t.literal.text] = referenceDefinition.events[t.literal.text];
        }
      });

      return { properties, events };
    }
    case EXTRACT_TYPE: {
      if (
        typeReference.indexType &&
        typeReference.objectType &&
        expressionType.kind === ts.SyntaxKind.UnionType
      ) {
        // Handles union strings like `Extract < T, 'a' | 'b' | 'c' > `
        const referenceDefinition = constructFullDefinitionFromSymbol({
          symbolName: typeReference.objectType.typeName.escapedText,
          requestSymbol,
          checker,
        });

        if (referenceDefinition === 'pending') {
          return;
        }

        const propIndex = typeReference.indexType.literal.text;
        if (!referenceDefinition.properties) {
          return;
        }

        const properties = {
          [propIndex]: {
            type: referenceDefinition.properties[propIndex].type,
            default: referenceDefinition.properties[propIndex].default,
            values: expressionType.types.map((t) => `'${t.literal.text}'`),
          },
        };
        return { properties, events: {} };
      } else if (expressionType.kind === ts.SyntaxKind.TypeLiteral) {
        // Handles inline declarations like `Extract < T, { type?: string } > `
        // In this case the typeReference we passed in already has the correct interface
        const referenceDefinition = constructFullDefinitionFromSymbol({
          symbolName: typeReference.typeName.escapedText,
          requestSymbol,
          checker,
        });

        if (referenceDefinition === 'pending') {
          return;
        }

        return referenceDefinition;
      }
    }
  }
}

function deepMergeDefinition(org = {}, addition = {}) {
  if (!addition) {
    return org;
  }

  const merged = {};
  // eslint-disable-next-line guard-for-in
  for (const key in org) {
    const value = addition[key];
    if (typeof value === 'object') {
      merged[key] = Array.isArray(org[key])
        ? org[key].concat(value)
        : { ...org[key], ...value };
    } else {
      merged[key] = org[key];
    }
  }

  for (const key in addition) {
    if (!Object.prototype.hasOwnProperty.call(merged, key)) {
      merged[key] = addition[key];
    }
  }

  return merged;
}

const filePath = process.argv[2];
const outputRootFolder = process.argv[3];
const templatePath = process.argv[4];
const components = process.argv.slice(5);

fs.readFile(filePath, () => {
  const program = ts.createProgram([filePath], { allowJs: true });
  const sourceFile = program.getSourceFile(filePath);
  const checker = program.getTypeChecker();

  if (!sourceFile) {
    return;
  }

  const allSymbols = checker.getSymbolAtLocation(sourceFile);
  if (!allSymbols || !allSymbols.exports) {
    return;
  }

  ts.forEachChild(sourceFile, (node) => {
    // const symbol = checker.getSymbolAtLocation(node.name);
    if (node.symbol) {
      // console.log(node.symbol.name);
      allSymbolNodes.set(node.symbol.name, {
        node,
        pending: new Set(),
      });
    }
  });

  const componentClassRegex = new RegExp(
    /declare class ([a-zA-Z]*)(?:(?:\n| )*)extends (?:[a-zA-Z]*)(?:(?:\n| )*)implements/g,
  );
  const fileContent = sourceFile.getText();
  const componentsList = [];
  let match;
  while ((match = componentClassRegex.exec(fileContent)) !== null) {
    componentsList.push(match[1]);
  }
  Array.from(componentsList)
    .filter((componentName) => {
      return !components.length || components.includes(componentName);
    })
    .forEach((componentName) => {
      // console.log(`${ componentName } ->>> `);
      generate({
        checker,
        componentName,
        outputRootFolder,
        templatePath,
      });
    });
});
