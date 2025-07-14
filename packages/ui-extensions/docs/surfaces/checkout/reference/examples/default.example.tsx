import {render} from 'preact';
import {useTotalAmount} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  // 1. Use the extension API to gather context from the checkout and shop
  const totalAmount = useTotalAmount();

  // 2. Render a UI
  return (
    <s-stack gap="base">
      <s-paragraph>
        Shop name: {shopify.shop.name}
      </s-paragraph>
      <s-paragraph>
        cost: {totalAmount}
      </s-paragraph>
    </s-stack>
  );
}
