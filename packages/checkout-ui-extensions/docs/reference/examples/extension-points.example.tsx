import React from 'react';
import {
  render,
  Banner,
  useExtensionApi,
} from '@shopify/checkout-ui-extensions-react';

// You can support multiple static extension points
render('Checkout::Actions::RenderBefore', () => (
  <Extension />
));
render(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);
render(
  'Checkout::ShippingMethods::RenderAfter',
  () => <Extension />,
);

// You can also support a dynamic extension point which can be moved by the merchant
render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {extensionPoint} = useExtensionApi();
  return (
    <Banner>
      This extension is rendering in the{' '}
      {extensionPoint} extension point.
    </Banner>
  );
}
