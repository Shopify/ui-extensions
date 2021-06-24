import React from 'react';
import {extend, render, Modal} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Modal open title="The best modal" onClose={() => console.log('modal closed!')}>
      This is the content of the modal.
    </Modal>
  );
}

extend(
  'Playground',
  render(() => <App />),
);
