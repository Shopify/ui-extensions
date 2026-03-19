import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {order, isFirstOrder} =
    shopify.orderConfirmation.value;

  if (isFirstOrder) {
    return (
      <s-banner tone="success" heading="Welcome!">
        Thanks for your first order! Use code
        WELCOME10 for 10% off your next purchase.
      </s-banner>
    );
  }

  return (
    <s-text>
      Order {order.id} confirmed. Thank you for
      shopping with us!
    </s-text>
  );
}
