import {render} from 'preact';
import {
  useAppMetafields,
  useCartLineTarget,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const {
    merchandise: {id: productVariantId},
  } = useCartLineTarget();

  const [energyRating] = useAppMetafields({
    namespace: '$app',
    key: 'energy-rating',
    type: 'product',
  }).filter(
    (entry) =>
      entry.target.id === productVariantId,
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
