export {default as evaluate} from './evaluate';
export {default as generateJSON} from './generateJSON';
export {default as parseJSON} from './parseJSON';
export {default as parseLisp} from './parseLisp';
export {default as traverse} from './traverse';

export interface RuntimeContext<T> {
  [key: string]: T | ((...args: any[]) => T);
}

export type NodeType = "literal" | "identifier" | "list";

export type AST = Identifier | Literal | List;

abstract class Node<T> {
  constructor(public value: T) {}
  abstract readonly type: NodeType;
}

export class Identifier extends Node<string> {
  type = "identifier" as const;

  toString() {
    return this.value;
  }
}

export class Literal extends Node<string | number | boolean> {
  type = "literal" as const;

  toString() {
    return this.value.toString();
  }
}

export class List extends Node<Array<Identifier | Literal | List>> {
  type = "list" as const;

  toString() {
    return `(${this.value.map(v => v.toString()).join(' ')})`;
  }
}
