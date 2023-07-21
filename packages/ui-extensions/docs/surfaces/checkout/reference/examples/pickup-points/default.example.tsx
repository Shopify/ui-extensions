import React from 'react';
import {
  reactExtension,
  useApi,
  useSubscription,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::PickupPoints::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const {isLocationFormVisible} =
    useApi<'Checkout::PickupPoints::RenderBefore'>();

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
      <Text>Pickup points are being shown.</Text>
    );
  }
}
