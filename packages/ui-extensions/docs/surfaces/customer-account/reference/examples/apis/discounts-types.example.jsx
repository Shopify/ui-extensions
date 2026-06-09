import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

const DISCOUNT_LABELS = {
  code: 'Discount code',
  automatic: 'Automatic discount',
  custom: 'Custom discount',
};

function Extension() {
  const allocations =
    shopify.discountAllocations.value;

  if (allocations.length === 0) {
    return null;
  }

  return (
    <s-box>
      <s-text type="strong">
        Applied discounts
      </s-text>
      {allocations.map((allocation, index) => (
        <s-stack key={index} direction="inline">
          <s-text color="subdued">
            {DISCOUNT_LABELS[allocation.type]}
          </s-text>
          <s-text>
            -{allocation.discountedAmount.amount}{' '}
            {
              allocation.discountedAmount
                .currencyCode
            }
          </s-text>
        </s-stack>
      ))}
    </s-box>
  );
}
