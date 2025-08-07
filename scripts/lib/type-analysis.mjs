/* eslint-env node */
/* eslint no-console: "off" */
import ts from 'typescript';

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

    const propsDetails = {};
    visitNodeForDetailedProps(sourceFile, componentName, propsDetails);
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
function visitNodeForDetailedProps(node, componentName, propsDetails) {
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
            expandedType: getExpandedTypeString(member.type),
            optional: Boolean(member.questionToken),
            description: extractJSDocComment(member),
            defaultValue: extractDefaultValue(member),
            tags: extractJSDocTags(member),
          };
          propsDetails[propName] = propInfo;
        }
      }

      // Handle extends clauses
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
            }
          }
        }
      }
    }
  }

  ts.forEachChild(node, (child) =>
    visitNodeForDetailedProps(child, componentName, propsDetails),
  );
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
 * Get expanded type string with more detailed information
 * This is where we can enhance type expansion for better analysis
 */
function getExpandedTypeString(typeNode) {
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

    // Handle type arguments (generics)
    if (typeNode.typeArguments && typeNode.typeArguments.length > 0) {
      result.details.typeArguments = typeNode.typeArguments.map((arg) =>
        getExpandedTypeString(arg),
      );
    }
  }

  if (ts.isUnionTypeNode(typeNode)) {
    result.details.isUnion = true;
    result.details.unionTypes = typeNode.types.map((type) =>
      getExpandedTypeString(type),
    );
    result.details.unionCount = typeNode.types.length;
  }

  if (ts.isIntersectionTypeNode(typeNode)) {
    result.details.isIntersection = true;
    result.details.intersectionTypes = typeNode.types.map((type) =>
      getExpandedTypeString(type),
    );
  }

  if (ts.isArrayTypeNode(typeNode)) {
    result.details.isArray = true;
    result.details.elementType = getExpandedTypeString(typeNode.elementType);
  }

  if (ts.isTupleTypeNode(typeNode)) {
    result.details.isTuple = true;
    result.details.tupleElements = typeNode.elements.map((element) =>
      getExpandedTypeString(element),
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
          type: getExpandedTypeString(member.type),
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
    result.details.checkType = getExpandedTypeString(typeNode.checkType);
    result.details.extendsType = getExpandedTypeString(typeNode.extendsType);
    result.details.trueType = getExpandedTypeString(typeNode.trueType);
    result.details.falseType = getExpandedTypeString(typeNode.falseType);
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
