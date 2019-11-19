export {default as parseLisp} from './parseLisp';
export {default as parseJSON} from './parseJSON';
export {default as generateJSON} from './generateJSON';
export {default as traverse} from './traverse';

interface RuntimeContext {
  [key: string]: any;
}

export type NodeType = "literal" | "identifier" | "list";

export type AST = Identifier | Literal | List;

abstract class Node<T> {
  constructor(public value: T) {}
  abstract evaluate(context: RuntimeContext): any;
  abstract readonly type: NodeType;
}

export class Identifier extends Node<string> {
  type = "identifier" as const;

  evaluate(context: RuntimeContext) {
    return context[this.value];
  }

  toString() {
    return this.value;
  }
}

export class Literal extends Node<string | number | boolean> {
  type = "literal" as const;

  evaluate(_context: RuntimeContext) {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }
}

export class List extends Node<Array<Identifier | Literal | List>> {
  type = "list" as const;

  evaluate(context: RuntimeContext) {
    const [first, ...rest] = this.value.map(v => v.evaluate(context));
    if (typeof first === 'function') {
      return first.call(null, ...rest);
    } else {
      return [first, ...rest];
    }
  }

  toString() {
    return `(${this.value.map(v => v.toString()).join(' ')})`;
  }
}
