import {
  reactExtension,
  Banner,
  useOrder,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::OrderStatus::CustomerInformation::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const order = useOrder();

  if (order) {
    return (
      <Banner>
        Please include your order ID ({order.id})
        in support requests
      </Banner>
    );
  }

  return null;
}
