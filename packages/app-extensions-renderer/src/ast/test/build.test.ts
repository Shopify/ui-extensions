import {Identifier, List, Literal, build} from '..';

describe('AST construction', () => {
  it('can construct a single component', () => {
    expect(
      build(b => b.component('TextField', {value: b.get('test'), onChange: b.set('test')})),
    ).toEqual(
      List([
        Identifier('TextField'),
        List([
          Identifier('#'),
          Literal('value'),
          List([Identifier('get'), Literal('test')]),
          Literal('onChange'),
          List([Identifier('set'), Literal('test')]),
        ]),
      ]),
    );
  });

  it('can construct nested components', () => {
    const ast = build(b =>
      b.component('Card', {}, [
        b.component('TextField', {value: b.get('test'), onChange: b.set('test')}),
      ]),
    );

    expect(ast).toEqual(
      List([
        Identifier('Card'),
        List([Identifier('#')]),
        List([
          List([
            Identifier('TextField'),
            List([
              Identifier('#'),
              Literal('value'),
              List([Identifier('get'), Literal('test')]),
              Literal('onChange'),
              List([Identifier('set'), Literal('test')]),
            ]),
          ]),
        ]),
      ]),
    );
  });
});
