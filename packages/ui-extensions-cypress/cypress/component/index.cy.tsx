import * as React from 'react';
import App from '../example-app';

// This utility creates a "plain" worker. It’s just a shortcut to creating
// a JavaScript file that supports being run in a worker, without needing
// a separate asset server or other configuration.
// const createExampleWorker = createPlainWorkerFactory(() =>
//   import(/* webpackChunkName: 'example' */ '../example'),
// );

describe('Third Try', () => {
  it('playground', () => {
    cy.mount(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
    cy.log('xxx');
    cy.wait(1000);
  });
});
