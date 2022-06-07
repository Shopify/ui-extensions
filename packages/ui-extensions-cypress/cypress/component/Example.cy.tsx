import * as React from 'react';

describe('Example.cy.ts', () => {
  it('playground', () => {
    (cy as any).mount(<div>FOOBAR</div>);
  });
});
