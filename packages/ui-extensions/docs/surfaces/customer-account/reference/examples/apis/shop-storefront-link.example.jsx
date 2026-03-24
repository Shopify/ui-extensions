// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const shop = shopify.shop.value;

  return (
    <s-box padding="base" border="base" borderRadius="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">Continue Shopping</s-text>
        <s-text color="subdued">
          Browse more products from {shop.name}.
        </s-text>
        <s-button href={shop.storefrontUrl}>Visit {shop.name}</s-button>
      </s-stack>
    </s-box>
  );
}
