import {Identifier, Literal, List, parseLisp, parseJSON, generateJSON} from '..';

describe('Identifier', () => {
  it('can be represented as a Lisp expression', () => {
    expect(new Identifier('test').toString()).toEqual('test');
  });
});

describe('Literal', () => {
  it('can be represented as a Lisp expression', () => {
    expect(new Literal(1).toString()).toEqual('1');
  });
});

describe('List', () => {
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
