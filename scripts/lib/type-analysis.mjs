/* eslint-env node */
/* eslint no-console: "off" */
import ts from 'typescript';

/**
 * Build a map of type definitions for reference resolution
 */
function buildTypeDefinitionsMap(sourceFile) {
  const typeDefinitions = new Map();

  function visitTypeDefinitions(node) {
    // Type aliases: export type SizeKeyword = 'small' | 'base' | ...
    if (ts.isTypeAliasDeclaration(node)) {
      const typeName = node.name.text;
      typeDefinitions.set(typeName, {
        kind: 'alias',
        node,
        type: node.type,
      });
    }

    // Interface definitions: export interface MyInterface { ... }
    if (ts.isInterfaceDeclaration(node)) {
      const interfaceName = node.name.text;
      typeDefinitions.set(interfaceName, {
        kind: 'interface',
        node,
        members: node.members,
      });
    }

    ts.forEachChild(node, visitTypeDefinitions);
  }

  visitTypeDefinitions(sourceFile);
  return typeDefinitions;
}

/**
 * Extract detailed component props using TypeScript AST parsing
 */
export function extractDetailedComponentProps(content, componentName) {
  try {
    const sourceFile = ts.createSourceFile(
      'temp.ts',
      content,
      ts.ScriptTarget.Latest,
      true,
    );

    // First pass: build type definitions map
    const typeDefinitions = buildTypeDefinitionsMap(sourceFile);

    const propsDetails = {};
    visitNodeForDetailedProps(
      sourceFile,
      componentName,
      propsDetails,
      typeDefinitions,
    );
    return propsDetails;
  } catch (error) {
    console.warn(
      `⚠️  Error parsing TypeScript for ${componentName}:`,
      error.message,
    );
    return {};
  }
}

/**
 * Extract detailed prop information including types, descriptions, and defaults
 */
function visitNodeForDetailedProps(
  node,
  componentName,
  propsDetails,
  typeDefinitions,
) {
  if (ts.isInterfaceDeclaration(node)) {
    const interfaceName = node.name.text;

    if (
      interfaceName === `${componentName}Props` ||
      interfaceName.match(new RegExp(`^${componentName}Props\\$\\d+$`))
    ) {
      // Extract detailed props from direct members
      for (const member of node.members) {
        if (
          ts.isPropertySignature(member) &&
          member.name &&
          ts.isIdentifier(member.name)
        ) {
          const propName = member.name.text;
          const propInfo = {
            name: propName,
            type: getTypeString(member.type),
            expandedType: getExpandedTypeString(member.type, typeDefinitions),
            optional: Boolean(member.questionToken),
            description: extractJSDocComment(member),
            defaultValue: extractDefaultValue(member),
            tags: extractJSDocTags(member),
            isSlot: isSlotProperty(propName, member.type),
          };
          propsDetails[propName] = propInfo;
        }
      }

      // Handle extends clauses - resolve inherited properties
      if (node.heritageClauses) {
        for (const heritage of node.heritageClauses) {
          for (const type of heritage.types) {
            if (
              ts.isExpressionWithTypeArguments(type) &&
              ts.isIdentifier(type.expression)
            ) {
              const extendedType = type.expression.text;
              if (!propsDetails._extends) {
                propsDetails._extends = [];
              }
              propsDetails._extends.push(extendedType);

              // Recursively resolve inherited properties
              const inheritedProps = resolveInheritedProperties(
                extendedType,
                typeDefinitions,
                node.getSourceFile(),
              );
              for (const [propName, propInfo] of Object.entries(
                inheritedProps,
              )) {
                // Only add if not already defined directly in this interface
                if (!propsDetails[propName]) {
                  propsDetails[propName] = propInfo;
                }
              }
            }
          }
        }
      }
    }
  }

  ts.forEachChild(node, (child) =>
    visitNodeForDetailedProps(
      child,
      componentName,
      propsDetails,
      typeDefinitions,
    ),
  );
}

/**
 * Recursively resolve inherited properties from extended interfaces
 */
function resolveInheritedProperties(
  interfaceName,
  typeDefinitions,
  sourceFile,
) {
  const inheritedProps = {};

  // First check if the interface is defined in the same source file
  const localDefinition = typeDefinitions.get(interfaceName);
  if (localDefinition && localDefinition.kind === 'interface') {
    return extractPropsFromInterface(localDefinition.node, typeDefinitions);
  }

  // If not found locally, search through the entire source file
  // This handles cases where interfaces are defined in merged shared types
  function findInterface(node) {
    if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
      const props = extractPropsFromInterface(node, typeDefinitions);
      Object.assign(inheritedProps, props);
    }
    ts.forEachChild(node, findInterface);
  }

  findInterface(sourceFile);
  return inheritedProps;
}

/**
 * Extract properties from an interface node
 */
function extractPropsFromInterface(interfaceNode, typeDefinitions) {
  const props = {};

  // Extract direct members
  for (const member of interfaceNode.members) {
    if (
      ts.isPropertySignature(member) &&
      member.name &&
      ts.isIdentifier(member.name)
    ) {
      const propName = member.name.text;
      const propInfo = {
        name: propName,
        type: getTypeString(member.type),
        expandedType: getExpandedTypeString(member.type, typeDefinitions),
        optional: Boolean(member.questionToken),
        description: extractJSDocComment(member),
        defaultValue: extractDefaultValue(member),
        tags: extractJSDocTags(member),
        isSlot: isSlotProperty(propName, member.type),
      };
      props[propName] = propInfo;
    }
  }

  // Handle inheritance in the extended interface
  if (interfaceNode.heritageClauses) {
    for (const heritage of interfaceNode.heritageClauses) {
      for (const type of heritage.types) {
        if (
          ts.isExpressionWithTypeArguments(type) &&
          ts.isIdentifier(type.expression)
        ) {
          const extendedType = type.expression.text;
          const inheritedProps = resolveInheritedProperties(
            extendedType,
            typeDefinitions,
            interfaceNode.getSourceFile(),
          );
          // Add inherited props, but don't override direct props
          for (const [propName, propInfo] of Object.entries(inheritedProps)) {
            if (!props[propName]) {
              props[propName] = propInfo;
            }
          }
        }
      }
    }
  }

  return props;
}

/**
 * Determine if a property is a slot based on its type
 */
function isSlotProperty(propName, typeNode) {
  // Check if type is ComponentChildren or similar
  const typeString = getTypeString(typeNode);
  const isChildrenType =
    typeString === 'ComponentChildren' ||
    typeString.includes('ComponentChildren') ||
    typeString === 'ReactNode' ||
    typeString.includes('ReactNode');

  // A property is a slot if it's typed as ComponentChildren/ReactNode
  return isChildrenType;
}

/**
 * Extract JSDoc comments from nodes
 */
function extractJSDocComment(node) {
  if (node.jsDoc && node.jsDoc.length > 0) {
    const jsDoc = node.jsDoc[0];
    if (jsDoc.comment) {
      return typeof jsDoc.comment === 'string'
        ? jsDoc.comment
        : jsDoc.comment.map((part) => part.text || part).join('');
    }
  }
  return '';
}

/**
 * Extract JSDoc tags for enhanced metadata
 */
function extractJSDocTags(node) {
  const tags = {};
  if (node.jsDoc && node.jsDoc.length > 0) {
    const jsDoc = node.jsDoc[0];
    if (jsDoc.tags) {
      for (const tag of jsDoc.tags) {
        if (ts.isJSDocTag(tag)) {
          const tagName = tag.tagName.text;
          const comment = tag.comment?.toString() || '';

          if (tags[tagName]) {
            // Handle multiple tags of the same type
            if (Array.isArray(tags[tagName])) {
              tags[tagName].push(comment);
            } else {
              tags[tagName] = [tags[tagName], comment];
            }
          } else {
            tags[tagName] = comment;
          }
        }
      }
    }
  }
  return tags;
}

/**
 * Extract default values from JSDoc @default tags
 */
function extractDefaultValue(node) {
  const tags = extractJSDocTags(node);
  return tags.default || '';
}

/**
 * Get basic type string representation
 */
function getTypeString(typeNode) {
  if (!typeNode) return 'any';

  if (ts.isTypeReferenceNode(typeNode)) {
    return ts.isIdentifier(typeNode.typeName)
      ? typeNode.typeName.text
      : 'unknown';
  }

  if (ts.isUnionTypeNode(typeNode)) {
    return typeNode.types.map((type) => getTypeString(type)).join(' | ');
  }

  if (ts.isLiteralTypeNode(typeNode)) {
    if (ts.isStringLiteral(typeNode.literal)) {
      return `'${typeNode.literal.text}'`;
    }
    if (ts.isNumericLiteral(typeNode.literal)) {
      return typeNode.literal.text;
    }
    if (typeNode.literal.kind === ts.SyntaxKind.TrueKeyword) {
      return 'true';
    }
    if (typeNode.literal.kind === ts.SyntaxKind.FalseKeyword) {
      return 'false';
    }
  }

  if (typeNode.kind === ts.SyntaxKind.StringKeyword) return 'string';
  if (typeNode.kind === ts.SyntaxKind.NumberKeyword) return 'number';
  if (typeNode.kind === ts.SyntaxKind.BooleanKeyword) return 'boolean';
  if (typeNode.kind === ts.SyntaxKind.AnyKeyword) return 'any';

  return 'unknown';
}

/**
 * Resolve a type reference to its actual definition
 */
function resolveTypeReference(typeNode, typeDefinitions) {
  if (!ts.isTypeReferenceNode(typeNode)) return null;

  const typeName = ts.isIdentifier(typeNode.typeName)
    ? typeNode.typeName.text
    : null;
  if (!typeName) return null;

  // Handle Extract<T, U> utility type
  if (
    typeName === 'Extract' &&
    typeNode.typeArguments &&
    typeNode.typeArguments.length === 2
  ) {
    const [, extractedType] = typeNode.typeArguments;
    const extractedString = getTypeString(extractedType);

    // For Extract<SizeKeyword, 'small' | 'base'>, show the extracted values
    return extractedString;
  }

  // Handle regular type aliases like SizeKeyword
  const definition = typeDefinitions.get(typeName);
  if (definition && definition.kind === 'alias') {
    return getTypeString(definition.type);
  }

  return null;
}

/**
 * Get expanded type string with more detailed information
 * This is where we can enhance type expansion for better analysis
 */
function getExpandedTypeString(typeNode, typeDefinitions = new Map()) {
  if (!typeNode) return {type: 'any', details: {}};

  const result = {
    type: getTypeString(typeNode),
    details: {},
  };

  if (ts.isTypeReferenceNode(typeNode)) {
    result.details.isReference = true;
    result.details.referenceName = ts.isIdentifier(typeNode.typeName)
      ? typeNode.typeName.text
      : 'unknown';

    // Try to resolve the type reference
    const resolvedType = resolveTypeReference(typeNode, typeDefinitions);
    if (resolvedType) {
      result.resolvedType = resolvedType;
      result.type = resolvedType; // Update the display type
    }

    // Handle type arguments (generics)
    if (typeNode.typeArguments && typeNode.typeArguments.length > 0) {
      result.details.typeArguments = typeNode.typeArguments.map((arg) =>
        getExpandedTypeString(arg, typeDefinitions),
      );
    }
  }

  if (ts.isUnionTypeNode(typeNode)) {
    result.details.isUnion = true;
    result.details.unionTypes = typeNode.types.map((type) =>
      getExpandedTypeString(type, typeDefinitions),
    );
    result.details.unionCount = typeNode.types.length;
  }

  if (ts.isIntersectionTypeNode(typeNode)) {
    result.details.isIntersection = true;
    result.details.intersectionTypes = typeNode.types.map((type) =>
      getExpandedTypeString(type, typeDefinitions),
    );
  }

  if (ts.isArrayTypeNode(typeNode)) {
    result.details.isArray = true;
    result.details.elementType = getExpandedTypeString(
      typeNode.elementType,
      typeDefinitions,
    );
  }

  if (ts.isTupleTypeNode(typeNode)) {
    result.details.isTuple = true;
    result.details.tupleElements = typeNode.elements.map((element) =>
      getExpandedTypeString(element, typeDefinitions),
    );
  }

  if (ts.isTypeLiteralNode(typeNode)) {
    result.details.isObjectLiteral = true;
    result.details.properties = {};

    for (const member of typeNode.members) {
      if (
        ts.isPropertySignature(member) &&
        member.name &&
        ts.isIdentifier(member.name)
      ) {
        const propName = member.name.text;
        result.details.properties[propName] = {
          type: getExpandedTypeString(member.type, typeDefinitions),
          optional: Boolean(member.questionToken),
        };
      }
    }
  }

  if (ts.isLiteralTypeNode(typeNode)) {
    result.details.isLiteral = true;
    if (ts.isStringLiteral(typeNode.literal)) {
      result.details.literalValue = typeNode.literal.text;
      result.details.literalType = 'string';
    } else if (ts.isNumericLiteral(typeNode.literal)) {
      result.details.literalValue = typeNode.literal.text;
      result.details.literalType = 'number';
    } else if (
      typeNode.literal.kind === ts.SyntaxKind.TrueKeyword ||
      typeNode.literal.kind === ts.SyntaxKind.FalseKeyword
    ) {
      result.details.literalValue =
        typeNode.literal.kind === ts.SyntaxKind.TrueKeyword;
      result.details.literalType = 'boolean';
    }
  }

  if (ts.isMappedTypeNode(typeNode)) {
    result.details.isMapped = true;
    // Could extract more details about mapped types here
  }

  if (ts.isConditionalTypeNode(typeNode)) {
    result.details.isConditional = true;
    result.details.checkType = getExpandedTypeString(
      typeNode.checkType,
      typeDefinitions,
    );
    result.details.extendsType = getExpandedTypeString(
      typeNode.extendsType,
      typeDefinitions,
    );
    result.details.trueType = getExpandedTypeString(
      typeNode.trueType,
      typeDefinitions,
    );
    result.details.falseType = getExpandedTypeString(
      typeNode.falseType,
      typeDefinitions,
    );
  }

  // Add complexity score for analysis
  result.details.complexity = calculateTypeComplexity(typeNode);

  return result;
}

/**
 * Calculate a complexity score for types to help identify complex props
 */
function calculateTypeComplexity(typeNode) {
  if (!typeNode) return 0;

  let complexity = 1;

  if (ts.isUnionTypeNode(typeNode)) {
    complexity += typeNode.types.length;
    complexity += typeNode.types.reduce(
      (sum, type) => sum + calculateTypeComplexity(type),
      0,
    );
  }

  if (ts.isIntersectionTypeNode(typeNode)) {
    complexity += typeNode.types.length;
    complexity += typeNode.types.reduce(
      (sum, type) => sum + calculateTypeComplexity(type),
      0,
    );
  }

  if (ts.isArrayTypeNode(typeNode)) {
    complexity += 1 + calculateTypeComplexity(typeNode.elementType);
  }

  if (ts.isTupleTypeNode(typeNode)) {
    complexity += typeNode.elements.length;
    complexity += typeNode.elements.reduce(
      (sum, element) => sum + calculateTypeComplexity(element),
      0,
    );
  }

  if (ts.isTypeLiteralNode(typeNode)) {
    complexity += typeNode.members.length * 2;
    for (const member of typeNode.members) {
      if (ts.isPropertySignature(member)) {
        complexity += calculateTypeComplexity(member.type);
      }
    }
  }

  if (ts.isTypeReferenceNode(typeNode) && typeNode.typeArguments) {
    complexity += typeNode.typeArguments.reduce(
      (sum, arg) => sum + calculateTypeComplexity(arg),
      0,
    );
  }

  if (ts.isConditionalTypeNode(typeNode)) {
    complexity += 5; // Conditional types are inherently complex
    complexity += calculateTypeComplexity(typeNode.checkType);
    complexity += calculateTypeComplexity(typeNode.extendsType);
    complexity += calculateTypeComplexity(typeNode.trueType);
    complexity += calculateTypeComplexity(typeNode.falseType);
  }

  return complexity;
}

/**
 * Extract all detailed component props for multiple components
 */
export function extractAllDetailedComponentProps(content, componentNames) {
  const componentProps = {};

  for (const componentName of componentNames) {
    const propsDetails = extractDetailedComponentProps(content, componentName);
    if (Object.keys(propsDetails).length > 0) {
      componentProps[componentName] = propsDetails;
    }
  }

  return componentProps;
}
