import {Identifier, Literal, List, generateLisp} from '..';

describe('generateLisp', () => {
  it('supports identifiers', () => {
    expect(generateLisp(Identifier('test'))).toEqual('test');
  });

  it('supports integer literals', () => {
    expect(generateLisp(Literal(1))).toEqual('1');
  });

  it('supports boolean literals', () => {
    expect(generateLisp(Literal(true))).toEqual('true');
  });

  it('supports string literals', () => {
    expect(generateLisp(Literal('Hello World!'))).toEqual('"Hello World!"');
  });

  it('supports expressions', () => {
    const expression = List([
      Identifier('+'),
      Literal(1),
      Literal(1),
      List([Identifier('+'), Literal(1), Literal(1)]),
    ]);
    expect(generateLisp(expression)).toEqual('(+ 1 1 (+ 1 1))');
  });
});
