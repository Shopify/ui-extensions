import React from 'react';
import {
  reactExtension,
  Text,
  useNote,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const note = useNote();
  return <Text>Note: {note}</Text>;
}
