import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const attributes = shopify.attributes.value;
  const deliveryDate = attributes?.find(
    (attr) => attr.key === 'preferredDeliveryDate',
  );

  if (!deliveryDate) {
    return null;
  }

  const formatted = new Date(
    deliveryDate.value,
  ).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <s-banner tone="info">
      <s-text>
        Preferred delivery date: {formatted}
      </s-text>
    </s-banner>
  );
}
