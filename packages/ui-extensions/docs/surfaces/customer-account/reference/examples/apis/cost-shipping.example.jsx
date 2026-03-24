import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const shipping =
    shopify.cost.totalShippingAmount.value;

  if (!shipping) {
    return (
      <s-text color="subdued">
        Shipping costs not available.
      </s-text>
    );
  }

  const isFreeShipping = shipping.amount === 0;

  return (
    <s-banner
      tone={isFreeShipping ? 'success' : 'info'}
    >
      {isFreeShipping ? (
        <s-text type="strong">
          Free shipping applied!
        </s-text>
      ) : (
        <s-text>
          Shipping: {shipping.amount}{' '}
          {shipping.currencyCode}
        </s-text>
      )}
    </s-banner>
  );
}
