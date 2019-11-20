import {parseLisp, parseJSON, generateJSON, generateLisp} from '..';

it('supports transformations between multiple formats: Lisp -> AST -> JSON -> AST -> Lisp', () => {
  const lisp = '(* (+ 1 1) (+ 1 1))';
  expect(generateLisp(parseJSON(generateJSON(parseLisp(lisp))))).toEqual(lisp);
});
