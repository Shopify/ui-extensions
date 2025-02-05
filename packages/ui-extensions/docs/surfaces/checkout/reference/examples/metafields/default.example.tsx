import {
  reactExtension,
  Text,
  useAppMetafields,
  useCartLineTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
  () => <Extension />,
);

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
      <Text>
        Energy rating:{' '}
        {energyRating.metafield.value}
      </Text>
    )
  );
}
