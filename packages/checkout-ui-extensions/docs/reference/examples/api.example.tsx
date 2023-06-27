import React from 'react';
import {
  render,
  Text,
  useExtensionApi,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {shop} = useExtensionApi();
  return <Text>Shop name: {shop.name}</Text>;
}
