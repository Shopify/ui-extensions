import {AST, traverse} from '.';

type ReturnValueOrConstant<T> = T extends (...args: any[]) => infer U ? U : T;
type EvaluationResult<T> = ReturnValueOrConstant<T[keyof T]>;

export default function<T extends {[name: string]: any}>(
  ast: AST,
  context?: T,
): EvaluationResult<T> {
  return environment({}, context || {}, ({resolve}) =>
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
    }),
  );
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
    const ctx = env[0];
    if (ctx === undefined) throw `Cannot evaluate identifier due to missing runtime context`;
    if (ctx[identifier] === undefined) throw `AST contains an unknown identifier: ${identifier}`;
    return ctx[identifier];
  }

  function withinEnvironment<T>(env: Array<Scope>, program: (environment: Environment) => T): T {
    return program({
      resolve: identifier => resolve(env, identifier),
      withinNewScope: program => withinEnvironment([{}, ...env], program),
    });
  }

  return withinEnvironment([globals], program);
}
