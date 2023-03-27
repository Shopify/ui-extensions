import React from 'react';
import {
  render,
  Text,
  useTarget,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::CartLineDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const {title} = useTarget();
  return <Text>Line item title: {title}</Text>;
}
