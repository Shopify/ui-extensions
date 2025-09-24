import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-stack gap="base">
      <s-paragraph>
        Shop name: {shopify.shop.name}
      </s-paragraph>
      <s-paragraph>
        cost:{' '}
        {shopify.cost.totalAmount.value.amount}
      </s-paragraph>
    </s-stack>
  );
}
