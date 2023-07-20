import React, {useState} from 'react';
import {
  render,
  Text,
  useExtensionApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

render(
  'Checkout::ShippingMethodDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const {target, targetSelected} =
    useExtensionApi();
  const {title} = useSubscription(target);

  const selected = useSubscription(
    targetSelected,
  );

  return (
    <Text>
      Shipping method: {title} is{' '}
      {selected ? '' : 'not'} selected.
    </Text>
  );
}
