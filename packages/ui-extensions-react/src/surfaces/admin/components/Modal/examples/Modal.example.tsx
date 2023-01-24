import React from 'react';
import {reactExtension, Modal} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <Modal open title="The best modal" onClose={() => console.log('modal closed!')}>
      This is the content of the modal.
    </Modal>
  );
}

export default reactExtension('Playground', () => <App />);
