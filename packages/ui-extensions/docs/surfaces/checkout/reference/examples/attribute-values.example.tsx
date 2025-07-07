import {render} from 'preact';
import {useAttributeValues} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [buyerSelectedFreeTShirt, tshirtSize] =
    useAttributeValues([
      'buyerSelectedFreeTShirt',
      'tshirtSize',
    ]);

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
