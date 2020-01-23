import {AST} from '.';

export default function(ast, globals?) {
  return withinNewRuntimeEnvironment(evaluate(ast), {keywords, globals: globals || {}});
}

function evaluate(ast: AST): EvaluateWithinEnvironment<any> {
  return ({resolve, withinCurrentScope}) => {
    switch (ast[0]) {
      case 'identifier':
        return resolve(ast[1]);
      case 'literal':
        return ast[1];
      case 'list':
        if (ast[1].length == 0) return [];
        const [first, ...rest] = ast[1];
        const functionOrConstant = withinCurrentScope(evaluate(first));
        if (typeof functionOrConstant === 'function') {
          return functionOrConstant(evaluate, ...rest);
        } else {
          return [functionOrConstant, ...rest.map(item => withinCurrentScope(evaluate(item)))];
        }
    }
  };
}

interface SymbolScope {
  [identifier: string]: any;
}

interface RuntimeEnvironment {
  resolve(identifier: string): any;
  withinCurrentScope<T>(evaluate: EvaluateWithinEnvironment<T>): T;
  withinNewScope<T>(scope: SymbolScope, evaluate: EvaluateWithinEnvironment<T>): T;
}

interface RuntimeEnvironmentConfiguration {
  keywords: SymbolScope;
  globals: SymbolScope;
}

interface EvaluateWithinEnvironment<T> {
  (environment: RuntimeEnvironment): T;
}

function withinNewRuntimeEnvironment<T>(
  evaluate: EvaluateWithinEnvironment<T>,
  {keywords, globals}: RuntimeEnvironmentConfiguration,
): T {
  function resolve(symbolStack: Array<SymbolScope>, identifier: string): any {
    const keyword = keywords[identifier];
    if (keyword !== undefined) {
      return (evaluate, ...args) =>
        withinRuntimeEnvironment(symbolStack, environment =>
          keyword(environment, evaluate, ...args),
        );
    }

    const result = symbolStack.find(scope => identifier in scope)?.[identifier];
    switch (typeof result) {
      case 'undefined':
        throw `AST contains an unknown identifier: ${identifier}`;
      case 'function':
        return (evaluate, ...args) =>
          result(...args.map(arg => withinRuntimeEnvironment(symbolStack, evaluate(arg))));
      default:
        return result;
    }
  }

  function withinRuntimeEnvironment<T>(
    env: Array<SymbolScope>,
    evaluate: EvaluateWithinEnvironment<T>,
  ): T {
    const environment: RuntimeEnvironment = {
      resolve: identifier => resolve(env, identifier),
      withinCurrentScope: evaluate => evaluate(environment),
      withinNewScope: (scope, evaluate) => withinRuntimeEnvironment([scope, ...env], evaluate),
    };
    return evaluate(environment);
  }

  return withinRuntimeEnvironment([globals], evaluate);
}

const keywords = {
  lambda({withinNewScope}: RuntimeEnvironment, evaluate, parameterNames, expression) {
    parameterNames = parameterNames[1].map(p => p[1]);

    return function(...parameterValues: any[]) {
      const scope = parameterNames.reduce((scope, name, index) => {
        scope[name] = parameterValues[index];
        return scope;
      }, {});

      return withinNewScope(scope, evaluate(expression));
    };
  },
};
