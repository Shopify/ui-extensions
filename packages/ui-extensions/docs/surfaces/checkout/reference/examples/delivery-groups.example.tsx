import React from 'react';
import {
  reactExtension,
  Banner,
  useDeliveryGroups,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const deliveryGroups = useDeliveryGroups();
  const deliveryOptions =
    deliveryGroups[0].deliveryOptions;

  return (
    <Banner>
      First delivery option:{' '}
      {deliveryOptions[0].title}
    </Banner>
  );
}
