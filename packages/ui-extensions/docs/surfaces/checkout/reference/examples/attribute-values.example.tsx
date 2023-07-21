import React from 'react';
import {
  Text,
  reactExtension,
  useAttributeValues,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

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
