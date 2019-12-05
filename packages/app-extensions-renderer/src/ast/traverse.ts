import {AST, NodeType} from '.';

export default function traverse(node: AST, transform: (type: NodeType, value: any) => any): any {
  switch (node.type) {
    case 'list':
      return transform(
        node.type,
        node.value.map(childNode => traverse(childNode, transform)),
      );
    default:
      return transform(node.type, node.value);
  }
}
