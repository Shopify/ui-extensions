import React from 'react';
import {
  reactExtension,
  Text,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::CartLineDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text>Line item title: {title}</Text>;
}
