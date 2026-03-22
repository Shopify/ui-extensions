// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const order = shopify.order.value;

  if (!order) {
    return <s-text>Loading order details…</s-text>;
  }

  const formattedDate = new Date(order.processedAt ?? '').toLocaleDateString(
    undefined,
    {year: 'numeric', month: 'long', day: 'numeric'},
  );

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Order {order.name}
        </s-text>
        <s-text color="subdued">Placed on {formattedDate}</s-text>
      </s-stack>
    </s-box>
  );
}
