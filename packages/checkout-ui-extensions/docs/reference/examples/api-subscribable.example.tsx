import React from 'react';
import {
  render,
  Text,
  useNote,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const note = useNote();
  return <Text>Note: {note}</Text>;
}
