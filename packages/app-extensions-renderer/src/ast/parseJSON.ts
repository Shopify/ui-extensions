import {AST, Identifier, Literal, List} from '.';

export default function parseJSON(json: string): AST {
  function instantiateNode(_, node) {
    function isIdentifier(node) {
      return typeof node === 'object' && node.type === 'identifier';
    }

    function isLiteral(node) {
      return typeof node === 'object' && node.type === 'literal';
    }

    function isList(node) {
      return Array.isArray(node);
    }

    if (isIdentifier(node)) return new Identifier(node.value);
    if (isLiteral(node)) return new Literal(node.value);
    if (isList(node)) return new List(node);
    return node;
  }

  return JSON.parse(json, instantiateNode);
}
