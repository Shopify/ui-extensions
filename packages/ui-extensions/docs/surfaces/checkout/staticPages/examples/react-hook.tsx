import React from 'react';
import {
  reactExtension,
  Text,
  useShippingAddress,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  // Access and subscribe to the shipping address.
  // Your <Extension /> will automatically re-render
  // when the address changes.
  const address = useShippingAddress();
  const firstName = address?.firstName ?? 'guest';

  // Render the UI
  return <Text>Hi {firstName} !</Text>;
}
