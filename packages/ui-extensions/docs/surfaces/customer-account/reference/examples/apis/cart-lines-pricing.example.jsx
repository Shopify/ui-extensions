import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const lines = shopify.lines.value;

  if (!lines || lines.length === 0) {
    return null;
  }

  return (
    <s-stack>
      {lines.map((line) => (
        <s-box key={line.id}>
          <s-text type="strong">
            {line.merchandise.title}
          </s-text>
          <s-text>
            Total: {line.cost.totalAmount.amount}{' '}
            {line.cost.totalAmount.currencyCode}
          </s-text>
          {line.discountAllocations.length > 0 && (
            <s-stack>
              {line.discountAllocations.map(
                (discount, i) => (
                  <s-text
                    color="subdued"
                    key={i}
                  >
                    Discount:{' '}
                    {discount.discountedAmount.amount}{' '}
                    {
                      discount.discountedAmount
                        .currencyCode
                    }
                  </s-text>
                ),
              )}
            </s-stack>
          )}
          <s-divider />
        </s-box>
      ))}
    </s-stack>
  );
}
