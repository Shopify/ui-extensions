import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const allocations =
    shopify.discountAllocations.value;

  if (allocations.length === 0) {
    return null;
  }

  const totalSavings = allocations.reduce(
    (sum, allocation) =>
      sum +
      Number(allocation.discountedAmount.amount),
    0,
  );

  const currencyCode =
    allocations[0].discountedAmount.currencyCode;

  return (
    <s-box>
      <s-text type="strong">
        You saved {totalSavings.toFixed(2)}{' '}
        {currencyCode}
      </s-text>
      <s-divider />
      {allocations.map((allocation, index) => (
        <s-text key={index}>
          -{allocation.discountedAmount.amount}{' '}
          {
            allocation.discountedAmount
              .currencyCode
          }
        </s-text>
      ))}
    </s-box>
  );
}
