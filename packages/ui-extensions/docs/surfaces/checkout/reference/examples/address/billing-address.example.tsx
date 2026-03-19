import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useBillingAddress} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const billingAddress = useBillingAddress();

  if (!billingAddress) {
    return null;
  }

  const formattedAddress = [
    billingAddress.address1,
    billingAddress.city,
    billingAddress.provinceCode,
    billingAddress.countryCode,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <s-banner heading="Billing address">
      {formattedAddress}
    </s-banner>
  );
}
