type ISpecial = {
  [key: string]: any;
};

class Context {
  scope: any;
  parent: any;

  constructor(scope: any, parent?: any) {
    this.scope = scope;
    this.parent = parent;
  }

  get(identifier: any): any {
    if (identifier in this.scope) {
      return this.scope[identifier];
    } else if (this.parent !== undefined) {
      return this.parent.get(identifier);
    }
  }
}

var special: ISpecial = {
  let: function(input: any, context: any): any {
    var letContext = input[1].reduce(function(acc: any, x: any) {
      acc.scope[x[0].value] = interpret(x[1], context);
      return acc;
    }, new Context({}, context));

    return interpret(input[2], letContext);
  },

  lambda: function(input: any, context: any): any {
    return function() {
      var lambdaArguments = arguments;
      var lambdaScope = input[1].reduce(function(acc: any, x: any, i: any) {
        acc[x.value] = lambdaArguments[i];
        return acc;
      }, {});

      return interpret(input[2], new Context(lambdaScope, context));
    };
  },

  if: function(input: any, context: any) {
    return interpret(input[1], context)
      ? interpret(input[2], context)
      : interpret(input[3], context);
  },
};

var interpretList = function(input: any, context: any): any {
  if (input.length > 0 && input[0].value in special) {
    return special[input[0].value](input, context);
  } else {
    var list = input.map(function(x: any) {
      return interpret(x, context);
    });
    if (list[0] instanceof Function) {
      return list[0].apply(undefined, list.slice(1));
    } else {
      return list;
    }
  }
};

var interpret = function(input: any, context: any): any {
  if (context === undefined) {
    return interpret(input, new Context({}));
  } else if (input instanceof Array) {
    return interpretList(input, context);
  } else if (input.type === 'identifier') {
    return context.get(input.value);
  } else if (input.type === 'number' || input.type === 'string') {
    return input.value;
  }
};

var categorize = function(input: any) {
  if (!isNaN(parseFloat(input))) {
    return {type: 'number', value: parseFloat(input)};
  } else if (input[0] === '"' && input.slice(-1) === '"') {
    return {type: 'string', value: input.slice(1, -1)};
  } else {
    return {type: 'identifier', value: input};
  }
};

var parenthesize = function(input: any, list?: any): any {
  if (list === undefined) {
    return parenthesize(input, []);
  } else {
    var token = input.shift();
    if (token === undefined) {
      return list.pop();
    } else if (token === '(') {
      list.push(parenthesize(input, []));
      return parenthesize(input, list);
    } else if (token === ')') {
      return list;
    } else {
      return parenthesize(input, list.concat(categorize(token)));
    }
  }
};

var tokenize = function(input: any) {
  return input
    .split('"')
    .map(function(x: any, i: any) {
      if (i % 2 === 0) {
        // not in string
        return x.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ');
      } else {
        // in string
        return x.replace(/ /g, '!whitespace!');
      }
    })
    .join('"')
    .trim()
    .split(/\s+/)
    .map(function(x: any) {
      return x.replace(/!whitespace!/g, ' ');
    });
};

var parse = function(input: any): any {
  return parenthesize(tokenize(input));
};

export {parse, interpret, Context};
