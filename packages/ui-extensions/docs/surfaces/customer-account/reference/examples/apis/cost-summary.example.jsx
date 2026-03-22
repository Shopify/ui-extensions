import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const subtotal =
    shopify.cost.subtotalAmount.value;
  const shipping =
    shopify.cost.totalShippingAmount.value;
  const tax = shopify.cost.totalTaxAmount.value;
  const total = shopify.cost.totalAmount.value;

  return (
    <s-box>
      <s-stack>
        <s-stack direction="inline">
          <s-text>Subtotal</s-text>
          <s-text>
            {subtotal.amount}{' '}
            {subtotal.currencyCode}
          </s-text>
        </s-stack>
        {shipping && (
          <s-stack direction="inline">
            <s-text>Shipping</s-text>
            <s-text>
              {shipping.amount}{' '}
              {shipping.currencyCode}
            </s-text>
          </s-stack>
        )}
        {tax && (
          <s-stack direction="inline">
            <s-text>Tax</s-text>
            <s-text>
              {tax.amount} {tax.currencyCode}
            </s-text>
          </s-stack>
        )}
        <s-divider />
        <s-stack direction="inline">
          <s-text type="strong">Total</s-text>
          <s-text type="strong">
            {total.amount} {total.currencyCode}
          </s-text>
        </s-stack>
      </s-stack>
    </s-box>
  );
}
