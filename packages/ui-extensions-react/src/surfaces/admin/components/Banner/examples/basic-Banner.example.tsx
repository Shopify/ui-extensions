import React from 'react';
import {
  render,
  Banner,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Banner title="Shipping rates changed" dismissible onDismiss={() => console.log('dismissed banner')}>
      <p>Your store may be affected</p>
    </Banner>
  );
}
