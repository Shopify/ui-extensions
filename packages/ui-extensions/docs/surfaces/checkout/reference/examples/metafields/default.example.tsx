import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useAppMetafields} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [energyRating] = useAppMetafields({
    namespace: '$app',
    key: 'energy-rating',
    type: 'product',
  }).filter(
    (entry) =>
      entry.target.id ===
      shopify.target.value.merchandise.id,
  );

  return (
    energyRating && (
      <s-text>
        Energy rating:{' '}
        {energyRating.metafield.value}
      </s-text>
    )
  );
}
