import {Identifier, Literal, List, generateJSON} from '..';

describe('generateJSON', () => {
  it('supports identifiers', () => {
    expect(JSON.parse(generateJSON(Identifier('test')))).toEqual({
      type: 'identifier',
      value: 'test',
    });
  });

  it('supports integer literals', () => {
    expect(JSON.parse(generateJSON(Literal(1)))).toEqual({type: 'literal', value: 1});
  });

  it('supports boolean literals', () => {
    expect(JSON.parse(generateJSON(Literal(true)))).toEqual({type: 'literal', value: true});
  });

  it('supports string literals', () => {
    expect(JSON.parse(generateJSON(Literal('Hello World!')))).toEqual({
      type: 'literal',
      value: 'Hello World!',
    });
  });

  it('supports empty lists', () => {
    expect(JSON.parse(generateJSON(List([])))).toEqual({
      type: 'list',
      value: [],
    });
  });

  it('supports expressions', () => {
    const expression = List([Identifier('+'), Literal(1), Literal(1)]);
    expect(JSON.parse(generateJSON(expression))).toEqual({
      type: 'list',
      value: [
        {type: 'identifier', value: '+'},
        {type: 'literal', value: 1},
        {type: 'literal', value: 1},
      ],
    });
  });
});
