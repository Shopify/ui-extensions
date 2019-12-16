import {AST, NodeTypes, isList, isLiteral, isIdentifier} from '.';

export default function traverse(node: AST, transform: (type: NodeTypes, value: any) => any): any {
  if (isIdentifier(node) || isLiteral(node)) {
    return transform(node[0], node[1]);
  } else {
    return transform(
      node[0],
      node[1].map(childNode => traverse(childNode, transform)),
    );
  }
}
