import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const attributes = shopify.attributes.value;
  const instructions = attributes?.find(
    (attr) => attr.key === 'deliveryInstructions',
  );

  if (!instructions) {
    return null;
  }

  return (
    <s-banner tone="info">
      <s-text type="strong">
        Delivery instructions
      </s-text>
      <s-text>{instructions.value}</s-text>
    </s-banner>
  );
}
