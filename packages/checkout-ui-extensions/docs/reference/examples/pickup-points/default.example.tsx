import React, {useState} from 'react';
import {
  render,
  useExtensionApi,
  useSubscription,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::PickupPoints::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const {locationFormVisible} = useExtensionApi();

  const locationFormShown = useSubscription(
    locationFormVisible,
  );

  if (locationFormShown) {
    return (
      <Text>
        The customer is being asked to provide
        their location.
      </Text>
    );
  } else {
    return (
      <Text>Pickup points are being shown.</Text>
    );
  }
}
