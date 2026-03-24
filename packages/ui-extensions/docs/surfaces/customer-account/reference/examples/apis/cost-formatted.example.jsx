import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const currency =
    shopify.localization.currency.value;
  const total = shopify.cost.totalAmount.value;
  const subtotal =
    shopify.cost.subtotalAmount.value;

  const formatMoney = (money) =>
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency.isoCode,
    }).format(money.amount);

  return (
    <s-box>
      <s-stack>
        <s-stack direction="inline">
          <s-text>Subtotal</s-text>
          <s-text>{formatMoney(subtotal)}</s-text>
        </s-stack>
        <s-divider />
        <s-stack direction="inline">
          <s-text type="strong">Total</s-text>
          <s-text type="strong">
            {formatMoney(total)}
          </s-text>
        </s-stack>
      </s-stack>
    </s-box>
  );
}
