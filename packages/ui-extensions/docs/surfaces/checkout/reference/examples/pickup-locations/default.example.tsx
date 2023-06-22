import React from 'react';
import {
  reactExtension,
  useExtensionApi,
  useSubscription,
  Text,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::PickupLocations::RenderBefore',
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
      <Text>
        Pickup locations are being shown.
      </Text>
    );
  }
}
