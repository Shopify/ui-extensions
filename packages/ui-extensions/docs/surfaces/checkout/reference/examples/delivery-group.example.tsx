import {
  reactExtension,
  Banner,
  useDeliveryGroups,
  useDeliveryGroup,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const deliveryGroups = useDeliveryGroups();
  const firstDeliveryGroup = useDeliveryGroup(
    deliveryGroups[0],
  );

  if (!firstDeliveryGroup) {
    return null;
  }

  const selectedDeliveryOption =
    firstDeliveryGroup?.selectedDeliveryOption;

  return (
    <Banner>
      Selected delivery option:{' '}
      {selectedDeliveryOption?.title}
    </Banner>
  );
}
