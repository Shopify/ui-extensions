import {Literal, Identifier, List, parseLisp} from '..';

describe('parseLisp', () => {
  it('supports string literals', () => {
    const lisp = `"Hello"`;
    expect(parseLisp(lisp)).toEqual(Literal('Hello'));
  });

  it('supports string literals with spaces', () => {
    const lisp = `"Hello World"`;
    expect(parseLisp(lisp)).toEqual(Literal('Hello World'));
  });

  it('supports string literals with special characters', () => {
    const lisp = `"Hello World?!"`;
    expect(parseLisp(lisp)).toEqual(Literal('Hello World?!'));
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('supports string literals with escaped double quotes', () => {
    // const lisp = `"Hello \"World\""`;
    const lisp = JSON.parse(`"Hello \\"World\\""`);
    expect(parseLisp(lisp)).toEqual(Literal('Hello "World"'));
  });

  it('supports string literals with brackets', () => {
    const lisp = `"Hello ((World))"`;
    expect(parseLisp(lisp)).toEqual(Literal('Hello ((World))'));
  });

  it('supports number literals', () => {
    const lisp = `1`;
    expect(parseLisp(lisp)).toEqual(Literal(1));
  });

  it('supports identifiers', () => {
    const lisp = `alert`;
    expect(parseLisp(lisp)).toEqual(Identifier('alert'));
  });

  it('supports identifiers with special characters', () => {
    const lisp = `+`;
    expect(parseLisp(lisp)).toEqual(Identifier('+'));
  });

  it('supports identifiers with numbers', () => {
    const lisp = `22s2`;
    expect(parseLisp(lisp)).toEqual(Identifier('22s2'));
  });

  it('supports empty lists', () => {
    const lisp = '()';
    expect(parseLisp(lisp)).toEqual(List([]));
  });

  it('supports lists with elements', () => {
    const lisp = '(1 2 3)';
    expect(parseLisp(lisp)).toEqual(List([Literal(1), Literal(2), Literal(3)]));
  });

  it('supports expressions without arguments', () => {
    const lisp = '(alert)';
    expect(parseLisp(lisp)).toEqual(List([Identifier('alert')]));
  });

  it('supports expressions with arguments', () => {
    const lisp = `(+ 1 1)`;
    expect(parseLisp(lisp)).toEqual(List([Identifier('+'), Literal(1), Literal(1)]));
  });

  it('supports expressions with sub-expressions', () => {
    const lisp = '(sum (mul 1 2) (mul 3 4))';
    expect(parseLisp(lisp)).toEqual(
      List([
        Identifier('sum'),
        List([Identifier('mul'), Literal(1), Literal(2)]),
        List([Identifier('mul'), Literal(3), Literal(4)]),
      ]),
    );
  });

  it('supports a tree with nested lists', () => {
    const lisp = `
      ((Textfield
        (#
          "value"    (get "message")
          "onChange" (set "message")
        )
      ))`;
    expect(parseLisp(lisp)).toEqual(
      List([
        List([
          Identifier('Textfield'),
          List([
            Identifier('#'),
            Literal('value'),
            List([Identifier('get'), Literal('message')]),
            Literal('onChange'),
            List([Identifier('set'), Literal('message')]),
          ]),
        ]),
      ]),
    );
  });
});
