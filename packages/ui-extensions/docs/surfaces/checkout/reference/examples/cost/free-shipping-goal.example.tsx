import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useSubtotalAmount} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

const FREE_SHIPPING_THRESHOLD = 100;

function Extension() {
  const subtotal = useSubtotalAmount();
  const remaining =
    FREE_SHIPPING_THRESHOLD - subtotal.amount;

  if (remaining <= 0) {
    return (
      <s-banner tone="success">
        You qualify for free shipping!
      </s-banner>
    );
  }

  return (
    <s-banner>
      Add {remaining.toFixed(2)}{' '}
      {subtotal.currencyCode} more to get free
      shipping
    </s-banner>
  );
}
