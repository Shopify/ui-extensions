import { Literal, Identifier, List, parseLisp } from '..';

describe(parseLisp, () => {
  it('supports string literals', () => {
    const lisp = `"Hello"`;
    expect(parseLisp(lisp)).toEqual(new Literal("Hello"));
  });

  it('supports string literals with spaces', () => {
    const lisp = `"Hello World"`;
    expect(parseLisp(lisp)).toEqual(new Literal("Hello World"));
  });

  it('supports string literals with special characters', () => {
    const lisp = `"Hello World?!"`;
    expect(parseLisp(lisp)).toEqual(new Literal('Hello World?!'));
  });

  it('supports string literals with escaped double quotes', () => {
    const lisp = `"Hello \"World\""`;
    expect(parseLisp(lisp)).toEqual(new Literal('Hello "World"'));
  });

  it('supports string literals with brakets', () => {
    const lisp = `"Hello ((World))"`;
    expect(parseLisp(lisp)).toEqual(new Literal('Hello ((World))'));
  });

  it('supports number literals', () => {
    const lisp = `1`;
    expect(parseLisp(lisp)).toEqual(new Literal(1));
  });

  it('supports identifiers', () => {
    const lisp = `alert`;
    expect(parseLisp(lisp)).toEqual(new Identifier('alert'));
  });

  it('supports identifiers with special characters', () => {
    const lisp = `+`;
    expect(parseLisp(lisp)).toEqual(new Identifier('+'));
  });

  it('supports identifiers with numbers', () => {
    const lisp = `22s2`;
    expect(parseLisp(lisp)).toEqual(new Identifier('22s2'));
  });

  it('supports empty lists', () => {
    const lisp = '()';
    expect(parseLisp(lisp)).toEqual(new List([]));
  });

  it('supports lists with elements', () => {
    const lisp = '(1 2 3)';
    expect(parseLisp(lisp)).toEqual(new List([
      new Literal(1),
      new Literal(2),
      new Literal(3),
    ]));
  });

  it('supports expressions without arguments', () => {
    const lisp = '(alert)';
    expect(parseLisp(lisp)).toEqual(new List([
      new Identifier("alert")
    ]));
  });

  it('supports expressions with arguments', () => {
    const lisp = `(+ 1 1)`;
    expect(parseLisp(lisp)).toEqual(new List([
      new Identifier("+"),
      new Literal(1),
      new Literal(1),
    ]));
  });

  it('supports expressions with sub-expressions', () => {
    const lisp = '(sum (mul 1 2) (mul 3 4))';
    expect(parseLisp(lisp)).toEqual(
      new List([
        new Identifier("sum"),
        new List([
          new Identifier("mul"),
          new Literal(1),
          new Literal(2),
        ]),
        new List([
          new Identifier("mul"),
          new Literal(3),
          new Literal(4),
        ]),
    ]));
  });
});
