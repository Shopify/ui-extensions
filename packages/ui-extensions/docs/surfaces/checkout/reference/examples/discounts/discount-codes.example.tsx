import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useDiscountCodes} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const discountCodes = useDiscountCodes();

  if (discountCodes.length === 0) {
    return null;
  }

  return (
    <s-stack>
      <s-text type="strong">
        Applied discount codes:
      </s-text>
      {discountCodes.map((discount) => (
        <s-text key={discount.code}>
          {discount.code}
        </s-text>
      ))}
    </s-stack>
  );
}
