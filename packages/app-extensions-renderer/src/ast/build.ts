import {AST, Identifier, List, Literal, isAST} from '.';

interface Builder {
  component(name: string, props: object, children?: AST[]): AST;
  get(name: string): AST;
  set(name: string): AST;
}

interface Params {
  [key: string]: boolean | string | number | AST;
}

export default function build(configure: (builder: Builder) => AST): AST {
  const builder: Builder = {
    component(name, props: Params, children) {
      if (children && children.length) {
        return List([Identifier(name), buildParameters(props), List(children)]);
      } else {
        return List([Identifier(name), buildParameters(props)]);
      }
    },
    get(name) {
      return List([Identifier('get'), Literal(name)]);
    },
    set(name) {
      return List([Identifier('set'), Literal(name)]);
    },
  };
  return configure(builder);
}

function buildParameters(params: Params): List {
  return List([
    Identifier('#'),
    ...Object.entries(params).reduce((nodes, [name, value]) => {
      nodes.push(Literal(name), isAST(value) ? value : Literal(value));
      return nodes;
    }, [] as AST[]),
  ]);
}
