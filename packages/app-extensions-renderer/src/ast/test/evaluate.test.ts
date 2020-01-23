import {Identifier, Literal, List, evaluate} from '..';

describe('evaluate', () => {
  it('supports constants', () => {
    const runtimeContext = {test: 1};
    expect(evaluate(Identifier('test'), runtimeContext)).toEqual(1);
  });

  it('supports string literals', () => {
    expect(evaluate(Literal('something'))).toEqual('something');
  });

  it('supports boolean literals', () => {
    expect(evaluate(Literal(true))).toEqual(true);
  });

  it('supports integer literals', () => {
    expect(evaluate(Literal(1))).toEqual(1);
  });

  it('supports static lists', () => {
    const staticList = List([Literal(1), Literal(2)]);
    expect(evaluate(staticList)).toEqual([1, 2]);
  });

  it('supports dynamic lists', () => {
    const runtimeContext = {test: 1};
    const dynamicList = List([Identifier('test'), Literal(2)]);
    expect(evaluate(dynamicList, runtimeContext)).toEqual([1, 2]);
  });

  it('supports simple expressions', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = List([Identifier('+'), Literal(1), Literal(1)]);
    expect(evaluate(expression, runtimeContext)).toEqual(2);
  });

  it('supports nested expressions', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = List([
      Identifier('+'),
      Literal(1),
      Literal(1),
      List([Identifier('+'), Literal(1), Literal(1)]),
    ]);
    expect(evaluate(expression, runtimeContext)).toEqual(4);
  });

  it('throws an error if it encounters an unknown identifier', () => {
    const expression = List([Identifier('Invalid')]);

    expect(() => evaluate(expression, {})).toThrow(`AST contains an unknown identifier: Invalid`);
  });

  it('supports constructing lambda expressions that do not take any arguments', () => {
    const lambda = List([Identifier('lambda'), List([]), Literal(1)]);

    expect(evaluate(lambda)()).toEqual(1);
  });

  it('supports constructing lambda expressions that take arguments', () => {
    const ast = List([
      Identifier('lambda'),
      List([Identifier('n')]),
      List([Identifier('*'), Identifier('n'), Literal(2)]),
    ]);

    const runtimeContext = {
      '*': (a: number, b: number) => a * b,
    };

    const double = evaluate(ast, runtimeContext) as Function;
    expect(double(2)).toEqual(4);
  });
});
