import React from 'react';
import {
  reactExtension,
  Text,
  useApi,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const {shop} = useApi();
  return <Text>Shop name: {shop.name}</Text>;
}
