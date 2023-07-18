import React from 'react';
import {
  Text,
  render,
  useAttributeValues,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const [buyerSelectedFreeTShirt, tshirtSize] =
    useAttributeValues([
      'buyerSelectedFreeTShirt',
      'tshirtSize',
    ]);

  if (Boolean(buyerSelectedFreeTShirt) === true) {
    return (
      <Text>
        You selected a free t-shirt, size:{' '}
        {tshirtSize}
      </Text>
    );
  }

  return null;
}
