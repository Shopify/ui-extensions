import { List, Identifier, Literal, traverse, NodeType } from '..';

describe(traverse, () => {
  it('performs a depth first search', () => {
    const ast = new List([
      new Identifier("+"),
      new Literal(1),
      new Literal(1),
    ]);

    let nodeOrder: Array<NodeType> = [];
    traverse(ast, (type, _) => {
      nodeOrder.push(type);
    });

    expect(nodeOrder).toEqual(["identifier", "literal", "literal", "list"])
  })

  it('supports traversing an expression', () => {
    const ast = new List([
      new Identifier("+"),
      new Literal(1),
      new Literal(1),
    ]);

    const context = {
      '+': (a, b) => a + b
    }

    const result = traverse(ast, (type, value) => {
      switch (type) {
        case "identifier": return context[value];
        case "literal": return value;
        case "list": 
          const [first, ...rest] = value;
          if (typeof first === 'function') return first.call(undefined, ...rest);
          return [first, ...rest];
      }
    })

    expect(result).toEqual(2);
  });

  it('supports traversing an expression', () => {
    const ast = new List([
      new Identifier("+"),
      new Literal(1),
      new Literal(1),
    ]);

    const result = traverse(ast, (type, value) => {
      switch (type) {
        case "identifier": return value;
        case "literal": 
          if (typeof value === "string") return `"${value}"`
          return value.toString();
        case "list": 
          return `(${value.join(" ")})`
      }
    })

    expect(result).toEqual("(+ 1 1)");
  });
});
