import {Identifier, Literal, List, generateLisp} from '..';

describe('generateLisp', () => {
  it('supports identifiers', () => {
    expect(generateLisp(new Identifier('test'))).toEqual('test');
  });

  it('supports integer literals', () => {
    expect(generateLisp(new Literal(1))).toEqual('1');
  });

  it('supports boolean literals', () => {
    expect(generateLisp(new Literal(true))).toEqual('true');
  });

  it('supports string literals', () => {
    expect(generateLisp(new Literal('Hello World!'))).toEqual('"Hello World!"');
  });

  it('supports expressions', () => {
    const expression = new List([
      new Identifier('+'),
      new Literal(1),
      new Literal(1),
      new List([new Identifier('+'), new Literal(1), new Literal(1)]),
    ]);
    expect(generateLisp(expression)).toEqual('(+ 1 1 (+ 1 1))');
  });
});
