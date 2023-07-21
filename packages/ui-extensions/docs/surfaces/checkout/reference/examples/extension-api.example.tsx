import React from 'react';
import {
  reactExtension,
  Text,
  useExtensionApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const {shop} = useExtensionApi();
  return <Text>Shop name: {shop.name}</Text>;
}
