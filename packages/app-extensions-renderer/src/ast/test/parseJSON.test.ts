import {Identifier, Literal, List, parseJSON} from '..';

describe('parseJSON', () => {
  it('supports an empty tree', () => {
    const json = '["list", []]';
    expect(parseJSON(json)).toEqual(List([]));
  });

  it('supports literals', () => {
    const json = '["literal", 1]';
    expect(parseJSON(json)).toEqual(Literal(1));
  });

  it('supports literals in a list', () => {
    const json = '["list", [["literal", 1]]]';
    expect(parseJSON(json)).toEqual(List([Literal(1)]));
  });

  it('supports identifiers', () => {
    const json = '["identifier", "+"]';
    expect(parseJSON(json)).toEqual(Identifier('+'));
  });

  it('supports lists', () => {
    const json = `
      [
        "list",
        [
          ["identifier", "+"],
          ["literal", 1],
          ["literal", 1]
        ]
      ]
    `;

    expect(parseJSON(json)).toEqual(List([Identifier('+'), Literal(1), Literal(1)]));
  });

  it('supports nested lists', () => {
    const json = `
      [
        "list",
        [
          ["identifier", "+"],
          ["literal", 1],
          ["literal", 1],
          [
            "list",
            [
              ["identifier", "+"],
              ["literal", 1],
              ["literal", 1]
            ]
          ]
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
