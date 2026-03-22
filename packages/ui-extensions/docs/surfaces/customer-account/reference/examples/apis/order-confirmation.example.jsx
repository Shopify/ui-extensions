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

  return (
    <s-box padding="base" border="base" borderRadius="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">Support Reference</s-text>
        <s-text color="subdued">
          If you need to contact support, provide this confirmation number:
        </s-text>
        <s-box
          padding="small-200"
          background="subdued"
          borderRadius="small-100"
        >
          <s-text type="strong">
            {order.confirmationNumber}
          </s-text>
        </s-box>
      </s-stack>
    </s-box>
  );
}
