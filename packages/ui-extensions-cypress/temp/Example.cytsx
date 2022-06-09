import * as React from 'react';

// in WorkerRenderer.tsx

import {createWorkerFactory} from '@shopify/web-worker';

interface IFoobar {}

const createWorker = createWorkerFactory(() => import('../worker'));

export function WorkerRenderer() {
  return null;
}

describe('Example.cy.ts', () => {
  it('playground', () => {
    WorkerRenderer();
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
    // cy.window().then((win) => {
    //   win.eval(`
    //   run()
    //   `);
    // });
  });
});
