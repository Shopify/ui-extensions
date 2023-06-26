import React from 'react';
import {
  render,
  Banner,
  useDeliveryGroups,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

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
