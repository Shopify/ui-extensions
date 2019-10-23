interface RuntimeContext {
  [key: string]: any;
}

abstract class Node<T> {
  constructor(public value: T) {}
  abstract evaluate(context: RuntimeContext): any;
}

export class Identifier extends Node<string> {
  evaluate(context: RuntimeContext) {
    return context[this.value];
  }

  toString() {
    return this.value;
  }
}

export class Literal extends Node<string | number | boolean> {
  evaluate(_context: RuntimeContext) {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }
}

export class List extends Node<Array<Identifier | Literal | List>> {
  evaluate(context: RuntimeContext) {
    const [first, ...rest] = this.value.map((v) => v.evaluate(context));
    if (typeof first === 'function') {
      return first.call(undefined, ...rest);
    } else {
      return [first, ...rest];
    }
  }

  toString() {
    return `(${this.value.map((v) => v.toString()).join(" ")})`
  }
}

export function parse(json) {
  function instantiateNode(_, node) {
    function isIdentifier(node) {
      return typeof node === "object" && node.type === "identifier";
    }

    function isLiteral(node) {
      return typeof node === "object" && node.type === "literal";
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
