export {default as evaluate} from './evaluate';
export {default as generateJSON} from './generateJSON';
export {default as generateLisp} from './generateLisp';
export {default as parseJSON} from './parseJSON';
export {default as parseLisp} from './parseLisp';
export {default as traverse} from './traverse';

export type NodeType = 'literal' | 'identifier' | 'list';

export type AST = Identifier | Literal | List;

export interface Node<T> {
  readonly type: NodeType;
  readonly value: T;
}

export interface Identifier extends Node<string> {
  type: 'identifier';
}

export interface Literal extends Node<string | number | boolean> {
  type: 'literal';
}

export interface List extends Node<Array<Identifier | Literal | List>> {
  type: 'list';
}

export function List(value: List['value'] = []): List {
  return {value, type: 'list'};
}

export function Identifier(value: Identifier['value']): Identifier {
  return {value, type: 'identifier'};
}

export function Literal(value: Literal['value']): Literal {
  return {value, type: 'literal'};
}

export function isAST(ast: any): ast is AST {
  return isLiteral(ast) || isIdentifier(ast) || isList(ast);
}

export function isList(list: any): list is List {
  return (
    typeof list === 'object' &&
    list.type === 'list' &&
    list.value instanceof Array &&
    (list.value as Array<any>).reduce((isValidAST, node) => isValidAST && isAST(node), true)
  );
}

export function isLiteral(literal: any): literal is List {
  return (
    typeof literal === 'object' &&
    literal.type === 'literal' &&
    ['number', 'boolean', 'string'].includes(typeof literal)
  );
}

export function isIdentifier(identifier: any): identifier is List {
  return (
    typeof identifier === 'object' &&
    identifier.type === 'identifier' &&
    typeof identifier.value === 'string'
  );
}
