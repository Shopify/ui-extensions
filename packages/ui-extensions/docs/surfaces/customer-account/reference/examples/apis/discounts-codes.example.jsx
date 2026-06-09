import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const discountCodes =
    shopify.discountCodes.value;

  if (discountCodes.length === 0) {
    return null;
  }

  return (
    <s-box>
      <s-text color="subdued">
        Applied discount codes
      </s-text>
      {discountCodes.map((discount) => (
        <s-text key={discount.code}>
          {discount.code}
        </s-text>
      ))}
    </s-box>
  );
}
