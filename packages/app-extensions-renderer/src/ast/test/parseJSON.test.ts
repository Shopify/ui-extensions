import {Identifier, Literal, List, parseJSON} from '..';

describe('parseJSON', () => {
  it('supports an empty tree', () => {
    const json = '[]';
    expect(parseJSON(json)).toEqual(List([]));
  });

  it('supports literals', () => {
    const json = '{"type": "literal", "value": 1}';
    expect(parseJSON(json)).toEqual(Literal(1));
  });

  it('supports literals in a list', () => {
    const json = '[{"type": "literal", "value": 1}]';
    expect(parseJSON(json)).toEqual(List([Literal(1)]));
  });

  it('supports identifiers', () => {
    const json = '{"type": "identifier", "value": "+"}';
    expect(parseJSON(json)).toEqual(Identifier('+'));
  });

  it('supports lists', () => {
    const json = `
      [
        {"type": "identifier", "value": "+"},
        {"type": "literal", "value": 1},
        {"type": "literal", "value": 1}
      ]
    `;

    expect(parseJSON(json)).toEqual(List([Identifier('+'), Literal(1), Literal(1)]));
  });

  it('supports nested lists', () => {
    const json = `
      [
        {"type": "identifier", "value": "+"},
        {"type": "literal", "value": 1},
        {"type": "literal", "value": 1},
        [
          {"type": "identifier", "value": "+"},
          {"type": "literal", "value": 1},
          {"type": "literal", "value": 1}
        ]
      ]
    `;

    expect(parseJSON(json)).toEqual(
      List([
        Identifier('+'),
        Literal(1),
        Literal(1),
        List([Identifier('+'), Literal(1), Literal(1)]),
      ]),
    );
  });
});
