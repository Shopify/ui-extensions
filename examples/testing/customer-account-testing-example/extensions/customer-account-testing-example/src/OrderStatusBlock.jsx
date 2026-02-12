import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const order = shopify.order.value;
  const totalAmount = shopify.cost.totalAmount.value;

  return (
    <s-banner>
      <s-heading>{order ? `Order ${order.name}` : 'Order Summary'}</s-heading>
      <s-text>
        Total: {totalAmount.amount} {totalAmount.currencyCode}
      </s-text>
    </s-banner>
  );
}
