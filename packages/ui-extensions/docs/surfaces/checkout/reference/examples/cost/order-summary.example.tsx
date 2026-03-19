import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {
  useSubtotalAmount,
  useTotalAmount,
  useTotalShippingAmount,
  useTotalTaxAmount,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const subtotal = useSubtotalAmount();
  const totalShipping = useTotalShippingAmount();
  const totalTax = useTotalTaxAmount();
  const total = useTotalAmount();

  return (
    <s-stack>
      <s-text>
        Subtotal: {subtotal.amount}{' '}
        {subtotal.currencyCode}
      </s-text>
      {totalShipping && (
        <s-text>
          Shipping: {totalShipping.amount}{' '}
          {totalShipping.currencyCode}
        </s-text>
      )}
      {totalTax && (
        <s-text>
          Tax: {totalTax.amount}{' '}
          {totalTax.currencyCode}
        </s-text>
      )}
      <s-text type="strong">
        Total: {total.amount} {total.currencyCode}
      </s-text>
    </s-stack>
  );
}
