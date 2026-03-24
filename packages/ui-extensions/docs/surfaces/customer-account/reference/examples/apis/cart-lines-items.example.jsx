import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const lines = shopify.lines.value;

  if (!lines || lines.length === 0) {
    return <s-text>No items in this order.</s-text>;
  }

  return (
    <s-stack>
      {lines.map((line) => (
        <s-box key={line.id}>
          <s-stack direction="inline">
            {line.merchandise.image?.url && (
              <s-image
                src={line.merchandise.image.url}
                alt={line.merchandise.title}
              />
            )}
            <s-stack>
              <s-text type="strong">
                {line.merchandise.title}
              </s-text>
              <s-text>Qty: {line.quantity}</s-text>
              <s-text>
                {line.cost.totalAmount.amount}{' '}
                {line.cost.totalAmount.currencyCode}
              </s-text>
            </s-stack>
          </s-stack>
        </s-box>
      ))}
    </s-stack>
  );
}
