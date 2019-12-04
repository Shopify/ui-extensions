import {Identifier, Literal, List, evaluate} from '..';

describe('evaluate', () => {
  it('supports constants', () => {
    const runtimeContext = {test: 1};
    expect(evaluate(new Identifier('test'), runtimeContext)).toEqual(1);
  });

  it('supports string literals', () => {
    expect(evaluate(new Literal('something'))).toEqual('something');
  });

  it('supports boolean literals', () => {
    expect(evaluate(new Literal(true))).toEqual(true);
  });

  it('supports integer literals', () => {
    expect(evaluate(new Literal(1))).toEqual(1);
  });

  it('supports static lists', () => {
    const staticList = new List([new Literal(1), new Literal(2)]);
    expect(evaluate(staticList)).toEqual([1, 2]);
  });

  it('supports dynamic lists', () => {
    const runtimeContext = {test: 1};
    const dynamicList = new List([new Identifier('test'), new Literal(2)]);
    expect(evaluate(dynamicList, runtimeContext)).toEqual([1, 2]);
  });

  it('supports simple expressions', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = new List([new Identifier('+'), new Literal(1), new Literal(1)]);
    expect(evaluate(expression, runtimeContext)).toEqual(2);
  });

  it('supports nested expressions', () => {
    const runtimeContext = {'+': (...args: number[]) => args.reduce((a, b) => a + b)};
    const expression = new List([
      new Identifier('+'),
      new Literal(1),
      new Literal(1),
      new List([new Identifier('+'), new Literal(1), new Literal(1)]),
    ]);
    expect(evaluate(expression, runtimeContext)).toEqual(4);
  });
});
