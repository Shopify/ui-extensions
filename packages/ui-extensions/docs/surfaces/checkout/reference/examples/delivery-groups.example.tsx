import {
  reactExtension,
  Banner,
  useDeliveryGroups,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const deliveryGroups = useDeliveryGroups();
  const deliveryOptions =
    deliveryGroups[0].deliveryOptions;

  return (
    <Banner>
      First delivery option:{' '}
      {deliveryOptions[0].title}
    </Banner>
  );
}
