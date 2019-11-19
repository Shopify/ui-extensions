import {AST, traverse, RuntimeContext} from '.';

export default function<T>(ast: AST, context: RuntimeContext<T> = {}): T {
    return traverse(ast, (type, value) => {
      switch (type) {
        case "identifier": return context[value];
        case "literal": return value;
        case "list": 
          const [first, ...rest] = value;
          if (typeof first === 'function') return first.call(undefined, ...rest);
          return [first, ...rest];
      }
    });
}
