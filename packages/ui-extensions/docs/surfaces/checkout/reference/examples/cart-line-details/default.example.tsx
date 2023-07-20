import React from 'react';
import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

reactExtension(
  'Checkout::CartLineDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const {title} = useTarget();
  return <Text>Line item title: {title}</Text>;
}
