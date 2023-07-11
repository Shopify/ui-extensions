import React from 'react';
import {
  reactExtension,
  Text,
  useNote,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const note = useNote();
  return <Text>Note: {note}</Text>;
}
