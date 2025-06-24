import {render} from 'preact';
import {useTotalAmount} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  // 1. Use the extension API to gather context from the checkout and shop
  const totalAmount = useTotalAmount();

  // 2. Render a UI
  return (
    <s-stack>
      <s-text>
        Shop name: {shopify.shop.name}
      </s-text>
      <s-text>cost: {totalAmount}</s-text>
    </s-stack>
  );
}
