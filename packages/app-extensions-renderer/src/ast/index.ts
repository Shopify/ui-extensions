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

export function List(value: List['value']): List {
  return {value, type: 'list'};
}

export function Identifier(value: Identifier['value']): Identifier {
  return {value, type: 'identifier'};
}

export function Literal(value: Literal['value']): Literal {
  return {value, type: 'literal'};
}

export function isList(list: any): list is List {
  return typeof list === 'object' && list.type === 'list' && list.value !== undefined;
}

export function isLiteral(literal: any): literal is List {
  return (
    typeof literal === 'object' &&
    literal &&
    literal.type === 'literal' &&
    literal.value !== undefined
  );
}

export function isIdentifier(identifier: any): identifier is List {
  return (
    typeof identifier === 'object' &&
    identifier.type === 'identifier' &&
    identifier.value !== undefined
  );
}
