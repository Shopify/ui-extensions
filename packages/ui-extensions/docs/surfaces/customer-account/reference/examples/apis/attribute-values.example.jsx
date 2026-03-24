import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const attributes = shopify.attributes.value ?? [];
  const buyerSelectedFreeTShirt =
    attributes.find((a) => a.key === 'buyerSelectedFreeTShirt')?.value || false;
  const tshirtSize =
    attributes.find((a) => a.key === 'tshirtSize')?.value || '';

  if (Boolean(buyerSelectedFreeTShirt) === true) {
    return (
      <s-text>
        You selected a free t-shirt, size:{' '}
        {tshirtSize}
      </s-text>
    );
  }

  return null;
}
