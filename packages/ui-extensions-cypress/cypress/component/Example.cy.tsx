import * as React from 'react';

describe('Example.cy.ts', () => {
  it('playground', () => {
    cy.mount(<div>FOOBAR</div>);
    cy.window('shopify' as any);
    cy.window().then((win) => {
      win.eval(`
      shopify.extend('Checkout::Dynamic::Render', (root) => {
        root.appendChild(root.createText('Hello world!'));
        root.mount();
      });
      `);
    });
  });
});
