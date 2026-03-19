import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useCartLines} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const cartLines = useCartLines();

  const totalQuantity = cartLines.reduce(
    (sum, line) => sum + line.quantity,
    0,
  );

  return (
    <s-stack>
      <s-text type="strong">
        {totalQuantity}{' '}
        {totalQuantity === 1 ? 'item' : 'items'}{' '}
        in your cart
      </s-text>
      {cartLines.map((line) => (
        <s-stack
          key={line.id}
          direction="inline"
          gap="small-200"
        >
          <s-text>
            {line.merchandise.title} × {line.quantity}
          </s-text>
          <s-text>
            {line.cost.totalAmount.amount}{' '}
            {line.cost.totalAmount.currencyCode}
          </s-text>
        </s-stack>
      ))}
    </s-stack>
  );
}
