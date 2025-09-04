import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const buyerSelectedFreeTShirt =
    shopify.attributes.value
      ?.buyerSelectedFreeTShirt || false;
  const tshirtSize =
    shopify.attributes.value?.tshirtSize || '';

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
