import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.discounts
      .canUpdateDiscountCodes
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyDiscountCodeChange({
            type: 'addDiscountCode',
            code: 'FREE_SHIPPING',
          })
        }
      >
        Apply your loyalty discount
      </s-button>
    );
  } else {
    return (
      <s-banner tone="warning">
        Loyalty discounts are unavailable
      </s-banner>
    );
  }
}
