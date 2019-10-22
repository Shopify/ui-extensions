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
}

export class Literal extends Node<string | number | boolean> {
  evaluate(_context: RuntimeContext) {
    return this.value;
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
}
