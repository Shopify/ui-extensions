import {Identifier, Literal, List, parseLisp, parseJSON, generateJSON} from '..';

describe(Identifier, () => {
  it('evaluates to a value in the runtime context', () => {
    const runtimeContext = {test: 1};
    expect(new Identifier('test').evaluate(runtimeContext)).toEqual(1);
  });

  it('can be represented as a Lisp expression', () => {
    expect(new Identifier('test').toString()).toEqual('test');
  });
});

describe(Literal, () => {
  it('can evaluate to a string', () => {
    expect(new Literal('something').evaluate({})).toEqual('something');
  });

  it('can evaluate to a boolean', () => {
    expect(new Literal(true).evaluate({})).toEqual(true);
  });

  it('can evaluate to a number', () => {
    expect(new Literal(1).evaluate({})).toEqual(1);
  });

  it('can be represented as a Lisp expression', () => {
    expect(new Literal(1).toString()).toEqual('1');
  });
});

describe(List, () => {
  it('can describe a sequence of literals', () => {
    const staticList = new List([new Literal(1), new Literal(2)]);
    expect(staticList.evaluate({})).toEqual([1, 2]);
  });

  it('can reference elements in the runtime context', () => {
    const runtimeContext = {test: 1};
    const dynamicList = new List([new Identifier('test'), new Literal(2)]);
    expect(dynamicList.evaluate(runtimeContext)).toEqual([1, 2]);
  });

  it('can be used for function invocation', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = new List([new Identifier('+'), new Literal(1), new Literal(1)]);
    expect(expression.evaluate(runtimeContext)).toEqual(2);
  });

  it('supports nested expressions', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = new List([
      new Identifier('+'),
      new Literal(1),
      new Literal(1),
      new List([new Identifier('+'), new Literal(1), new Literal(1)]),
    ]);
    expect(expression.evaluate(runtimeContext)).toEqual(4);
  });

  it('can be represented as a Lisp expression', () => {
    const expression = new List([
      new Identifier('+'),
      new Literal(1),
      new Literal(1),
      new List([new Identifier('+'), new Literal(1), new Literal(1)]),
    ]);
    expect(expression.toString()).toEqual('(+ 1 1 (+ 1 1))');
  });

  it('supports transformations between multiple formats: Lisp -> AST -> JSON -> AST -> Lisp', () => {
    const lisp = '(* (+ 1 1) (+ 1 1))';
    expect(parseJSON(generateJSON(parseLisp(lisp))).toString()).toEqual(lisp);
  });
});
