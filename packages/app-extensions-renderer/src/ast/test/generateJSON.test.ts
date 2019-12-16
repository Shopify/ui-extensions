import {Identifier, Literal, List, generateJSON} from '..';

describe('generateJSON', () => {
  it('supports identifiers', () => {
    expect(JSON.parse(generateJSON(Identifier('test')))).toEqual(['identifier', 'test']);
  });

  it('supports integer literals', () => {
    expect(JSON.parse(generateJSON(Literal(1)))).toEqual(['literal', 1]);
  });

  it('supports boolean literals', () => {
    expect(JSON.parse(generateJSON(Literal(true)))).toEqual(['literal', true]);
  });

  it('supports string literals', () => {
    expect(JSON.parse(generateJSON(Literal('Hello World!')))).toEqual(['literal', 'Hello World!']);
  });

  it('supports empty lists', () => {
    expect(JSON.parse(generateJSON(List([])))).toEqual(['list', []]);
  });

  it('supports expressions', () => {
    const expression = List([Identifier('+'), Literal(1), Literal(1)]);
    expect(JSON.parse(generateJSON(expression))).toEqual([
      'list',
      [
        ['identifier', '+'],
        ['literal', 1],
        ['literal', 1],
      ],
    ]);
  });
});
