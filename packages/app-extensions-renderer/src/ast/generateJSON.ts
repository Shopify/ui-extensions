import {AST, isIdentifier, isList, isLiteral} from '.';

export default function generateJSON(ast: AST): string {
  return JSON.stringify(ast, (_, node) => {
    if (isIdentifier(node)) return {type: 'identifier', value: node.value};
    if (isLiteral(node)) return {type: 'literal', value: node.value};
    if (isList(node)) return node.value;
    return node;
  });
}
