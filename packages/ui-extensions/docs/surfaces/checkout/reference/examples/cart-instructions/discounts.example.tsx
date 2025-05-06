import {render} from 'preact';
import {
  useApplyDiscountCodeChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const applyDiscountCodeChange =
    useApplyDiscountCodeChange();
  const instructions = useInstructions();

  if (
    instructions.discounts.canUpdateDiscountCodes
  ) {
    return (
      <s-button
        onClick={() =>
          applyDiscountCodeChange({
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
