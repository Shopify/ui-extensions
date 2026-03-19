import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useShippingAddress} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const shippingAddress = useShippingAddress();

  if (!shippingAddress) {
    return (
      <s-banner>
        No shipping address has been entered yet.
      </s-banner>
    );
  }

  return (
    <s-stack>
      <s-text>
        Shipping to: {shippingAddress.city},{' '}
        {shippingAddress.provinceCode},{' '}
        {shippingAddress.countryCode}
      </s-text>
    </s-stack>
  );
}
