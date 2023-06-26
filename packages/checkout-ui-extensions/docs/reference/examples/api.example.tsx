import React from 'react';
import {
  render,
  Text,
  useApi,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {shop} = useApi();
  return <Text>Shop name: {shop.name}</Text>;
}
