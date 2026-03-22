// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const order = shopify.order.value;

  if (!order) {
    return <s-text>Loading…</s-text>;
  }

  if (order.cancelledAt) {
    const cancelledDate = new Date(order.cancelledAt).toLocaleDateString(
      undefined,
      {year: 'numeric', month: 'long', day: 'numeric'},
    );

    return (
      <s-banner tone="warning">
        This order was cancelled on {cancelledDate}. If you have questions about
        your refund, please contact support with order {order.name}.
      </s-banner>
    );
  }

  return (
    <s-banner tone="info">
      Order {order.name} is active and being processed.
    </s-banner>
  );
}
