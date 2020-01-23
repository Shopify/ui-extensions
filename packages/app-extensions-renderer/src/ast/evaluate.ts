import {AST, traverse} from '.';

export default function(ast, globals?) {
  return runtime({}, globals || {}, evaluate(ast));
}

function evaluate(ast: AST): (environment: Environment) => any {
  return ({resolve, withinSameScope}) => {
    switch (ast[0]) {
      case 'identifier':
        return resolve(ast[1]);
      case 'literal':
        return ast[1];
      case 'list':
        if (ast[1].length == 0) return [];
        const [first, ...rest] = ast[1];
        const functionOrConstant = withinSameScope(evaluate(first));
        if (typeof functionOrConstant === 'function') {
          return functionOrConstant(evaluate, ...rest);
        } else {
          return [functionOrConstant, ...rest.map(item => withinSameScope(evaluate(item)))];
        }
    }
  };
}

interface Scope {
  [identifier: string]: any;
}

interface Environment {
  resolve(identifier: string): any;
  withinSameScope<T>(program: (environment: Environment) => T): T;
}

function runtime<T>(keywords: Scope, globals: Scope, program: (environment: Environment) => T): T {
  function resolve(env: Array<Scope>, identifier: string): any {
    const result = env.find(scope => identifier in scope)?.[identifier];

    switch (typeof result) {
      case 'undefined':
        throw `AST contains an unknown identifier: ${identifier}`;
      case 'function':
        return (evaluate, ...args) =>
          result(...args.map(arg => withinEnvironment(env, evaluate(arg))));
      default:
        return result;
    }
  }

  function withinEnvironment<T>(env: Array<Scope>, program: (environment: Environment) => T): T {
    const environment: Environment = {
      resolve: identifier => resolve(env, identifier),
      withinSameScope: program => program(environment),
    };
    return program(environment);
  }

  return withinEnvironment([globals], program);
}
