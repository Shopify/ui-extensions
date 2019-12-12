import {List, Identifier, Literal, traverse, NodeType} from '..';

describe('traverse', () => {
  it('performs a depth first search', () => {
    const ast = List([Identifier('+'), Literal(1), Literal(1)]);

    let nodeOrder: Array<NodeType> = [];
    traverse(ast, (type, _) => {
      nodeOrder.push(type);
    });

    expect(nodeOrder).toEqual(['identifier', 'literal', 'literal', 'list']);
  });

  it('can be used to implement AST evaluation', () => {
    const ast = List([Identifier('+'), Literal(1), Literal(1)]);

    const context = {
      '+': (a, b) => a + b,
    };

    const result = traverse(ast, (type, value) => {
      switch (type) {
        case 'identifier':
          return context[value];
        case 'literal':
          return value;
        case 'list':
          const [first, ...rest] = value;
          if (typeof first === 'function') return first.call(undefined, ...rest);
          return [first, ...rest];
      }
    });

    expect(result).toEqual(2);
  });

  it('can be used to implement AST serialization', () => {
    const ast = List([Identifier('+'), Literal(1), Literal(1)]);

    const result = traverse(ast, (type, value) => {
      switch (type) {
        case 'identifier':
          return value;
        case 'literal':
          if (typeof value === 'string') return `"${value}"`;
          return value.toString();
        case 'list':
          return `(${value.join(' ')})`;
      }
    });

    expect(result).toEqual('(+ 1 1)');
  });
});
