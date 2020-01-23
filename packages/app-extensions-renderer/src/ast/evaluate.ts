import {AST, traverse} from '.';

export default function(ast, globals?) {
  return environment({}, globals || {}, evaluate(ast));
}

function evaluate(ast: AST): (environment: Environment) => any {
  return ({resolve}) =>
    traverse(ast, (type, value) => {
      switch (type) {
        case 'identifier':
          return resolve(value);
        case 'literal':
          return value;
        case 'list':
          const [first, ...rest] = value;
          if (typeof first === 'function') return first.call(undefined, ...rest);
          return [first, ...rest];
      }
    });
}

interface Scope {
  [identifier: string]: any;
}

interface Environment {
  resolve(identifier: string): any;
  withinNewScope<T>(program: (environment: Environment) => T): T;
}

function environment<T>(
  keywords: Scope,
  globals: Scope,
  program: (environment: Environment) => T,
): T {
  function resolve(env: Array<Scope>, identifier: string): any {
    const result = env.find(scope => identifier in scope)?.[identifier];
    if (result === undefined) throw `AST contains an unknown identifier: ${identifier}`;
    return result;
  }

  function withinEnvironment<T>(env: Array<Scope>, program: (environment: Environment) => T): T {
    return program({
      resolve: identifier => resolve(env, identifier),
      withinNewScope: program => withinEnvironment([{}, ...env], program),
    });
  }

  return withinEnvironment([globals], program);
}
