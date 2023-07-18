import React from 'react';
import {
  reactExtension,
  Banner,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

// You can support multiple static extension points
reactExtension(
  'Checkout::Actions::RenderBefore',
  () => <Extension />,
);
reactExtension(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);
reactExtension(
  'Checkout::ShippingMethods::RenderAfter',
  () => <Extension />,
);

// You can also support a dynamic extension point which can be moved by the merchant
reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
  const {extensionPoint} = useApi();
  return (
    <Banner>
      This extension is rendering in the{' '}
      {extensionPoint} extension point.
    </Banner>
  );
}
