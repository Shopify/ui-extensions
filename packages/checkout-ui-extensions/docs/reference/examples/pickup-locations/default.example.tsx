import React from 'react';
import {
  render,
  useExtensionApi,
  useSubscription,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::PickupLocations::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const {isLocationFormVisible} =
    useExtensionApi();
  const locationFormShown = useSubscription(
    isLocationFormVisible,
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
      <Text>
        Pickup locations are being shown.
      </Text>
    );
  }
}
