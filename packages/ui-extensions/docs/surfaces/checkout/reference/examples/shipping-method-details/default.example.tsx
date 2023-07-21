import React from 'react';
import {
  reactExtension,
  Text,
  useApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::ShippingMethodDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const {target, targetSelected} =
    useApi<'Checkout::ShippingMethodDetails::RenderAfter'>();
  const shippingOption = useSubscription(target);
  const title = shippingOption?.title;

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
