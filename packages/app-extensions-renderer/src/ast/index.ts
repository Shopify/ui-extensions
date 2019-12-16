export {default as build} from './build';
export {default as evaluate} from './evaluate';
export {default as generateJSON} from './generateJSON';
export {default as generateLisp} from './generateLisp';
export {default as parseJSON} from './parseJSON';
export {default as parseLisp} from './parseLisp';
export {default as traverse} from './traverse';

export const NodeTypes = ['literal', 'identifier', 'list'] as const;
export type NodeTypes = 'literal' | 'identifier' | 'list';

export type Node<T extends NodeTypes, V> = [T, V];
export type NodeType<N extends Node<any, any>> = N[0];
export type NodeValue<N extends Node<any, any>> = N[1];

export type Identifier = Node<'identifier', string>;
export type Literal = Node<'literal', string | number | boolean>;
export type List = Node<'list', Array<Identifier | Literal | List>>;
export type AST = Identifier | Literal | List;

export function List(value: NodeValue<List> = []): List {
  return ['list', value];
}

export function Identifier(value: NodeValue<Identifier>): Identifier {
  return ['identifier', value];
}

export function Literal(value: NodeValue<Literal>): Literal {
  return ['literal', value];
}

export function isAST(ast: any): ast is AST {
  return isLiteral(ast) || isIdentifier(ast) || isList(ast);
}

export function isList(list: any): list is List {
  if (!isNode(list)) return false;
  const [type, value] = list;

  return (
    type === 'list' &&
    Array.isArray(value) &&
    (value as Array<any>).reduce((isValidAST, node) => isValidAST && isAST(node), true)
  );
}

export function isLiteral(literal: any): literal is Literal {
  if (!isNode(literal)) return false;
  const [type, value] = literal;
  return type === 'literal' && ['number', 'boolean', 'string'].includes(typeof value);
}

export function isIdentifier(identifier: any): identifier is Identifier {
  if (!isNode(identifier)) return false;
  const [type, value] = identifier;
  return type === 'identifier' && typeof value === 'string';
}

function isNode(node: any): node is Node<NodeTypes, any> {
  return Array.isArray(node) && node.length === 2 && NodeTypes.includes(node[0]);
}
