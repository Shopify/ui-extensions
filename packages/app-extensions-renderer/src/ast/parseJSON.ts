import {AST, List} from '.';

export default function parseJSON(json: string): AST {
  function instantiateNode(_, node) {
    if (node instanceof Array) return List(node);
    return node;
  }

  return JSON.parse(json, instantiateNode);
}
