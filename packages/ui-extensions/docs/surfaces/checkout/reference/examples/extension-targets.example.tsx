import React from 'react';
import {
  reactExtension,
  Banner,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

// You can support multiple static extension targets
const checkoutActions = reactExtension(
  'Checkout::Actions::RenderBefore',
  () => <Extension />,
);
const deliveryAddress = reactExtension(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);
const shippingMethods = reactExtension(
  'Checkout::ShippingMethods::RenderAfter',
  () => <Extension />,
);

// You can also support a dynamic extension target which can be moved by the merchant
const dynamic = reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

export {
  checkoutActions,
  deliveryAddress,
  shippingMethods,
  dynamic,
};

function Extension() {
  const {
    extension: {target},
  } = useApi();
  return (
    <Banner>
      This extension is rendering in the {target}{' '}
      extension target.
    </Banner>
  );
}
