// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const shop = shopify.shop.value;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Welcome to {shop.name}
        </s-text>
        <s-text color="subdued">
          Thank you for shopping with us. We appreciate your business!
        </s-text>
      </s-stack>
    </s-box>
  );
}
