import * as React from 'react';

interface IFoobar {}

describe('Example.cy.ts', () => {
  it('playground', () => {
    cy.mount(<div>FOOBAR</div>);
    cy.window('shopify');
    cy.window().then((win) => {
      win.eval(`
      console.warn('HELLO', window.shopify)
      shopify.extend('Checkout::Dynamic::Render', (root) => {
        console.warn('ROOT', root);
        root.appendChild(root.createText('Hello world!'));
        root.mount();
      });
      `);
    });
    cy.window().then((win) => {
      win.eval(`
      window.run()
      `);
    });
  });
});
