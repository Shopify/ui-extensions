
import {AST, traverse} from '.';

export default function<T>(ast: AST): T {
  return traverse(ast, (type, value) => {
    switch (type) {
      case "identifier":
        return value
      case "literal": 
        if (typeof value === 'string') return `"${value}"`
        else return value.toString();
      case "list": 
        return `(${value.join(" ")})`;
    }
  });
}
