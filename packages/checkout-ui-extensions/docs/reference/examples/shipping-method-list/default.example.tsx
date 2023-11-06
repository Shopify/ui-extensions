import React, {useState} from 'react';
import {
  render,
  Text,
  useExtensionApi,
  useDeliveryGroups,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::ShippingMethods::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const {deliveryGroupId} =
    useExtensionApi<'Checkout::ShippingMethods::RenderBefore'>();
  const deliveryGroups = useDeliveryGroups();
  const deliveryGroupAttached = deliveryGroups.find(({id}) => deliveryGroupId === id);

  return (
    <Text>
      Delivery group type: {deliveryGroupAttached.groupType}
    </Text>
  );
}
