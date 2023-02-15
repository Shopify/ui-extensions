import React from 'react';
import {
  render,
  Text,
  useShippingAddress,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  // Access and subscribe to the shipping address.
  // Your <App /> will automatically re-render
  // when the address changes.
  const address = useShippingAddress();
  const firstName = address?.firstName ?? 'guest';

  // Render the UI
  return <Text>Hi {firstName} !</Text>;
}
