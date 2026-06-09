// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const currency =
    shopify.localization.currency.value;
  const formatter = new Intl.NumberFormat(
    undefined,
    {
      style: 'currency',
      currency: currency.isoCode,
    },
  );

  const sampleAmount = 49.99;

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">Order Summary</s-text>
        <s-divider />
        <s-stack
          direction="inline"
          gap="base"
          justifyContent="space-between"
        >
          <s-text>Subtotal</s-text>
          <s-text>
            {formatter.format(sampleAmount)}
          </s-text>
        </s-stack>
        <s-text color="subdued" size="small">
          Prices shown in {currency.isoCode}
        </s-text>
      </s-stack>
    </s-box>
  );
}
