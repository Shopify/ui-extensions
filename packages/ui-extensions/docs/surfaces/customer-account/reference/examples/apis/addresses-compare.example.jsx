import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const shipping = shopify.shippingAddress?.value;
  const billing = shopify.billingAddress?.value;

  if (!shipping || !billing) {
    return null;
  }

  const isSameAddress =
    shipping.address1 === billing.address1 &&
    shipping.city === billing.city &&
    shipping.zip === billing.zip &&
    shipping.territoryCode === billing.territoryCode;

  return (
    <s-banner
      tone={isSameAddress ? 'info' : 'warning'}
    >
      {isSameAddress
        ? 'Shipping and billing addresses match.'
        : 'Shipping and billing addresses are different. Please verify your billing details.'}
    </s-banner>
  );
}
