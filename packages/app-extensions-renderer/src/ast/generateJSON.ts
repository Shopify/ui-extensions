import { AST, Identifier, List, Literal } from '.';

export default function generateJSON(ast: AST): string {
  return JSON.stringify(ast, (_, node) => {
    if (node instanceof Identifier) return {type: "identifier", value: node.value};
    if (node instanceof Literal) return {type: "literal", value: node.value};
    if (node instanceof List) return node.value;
    return node;
  });
}
