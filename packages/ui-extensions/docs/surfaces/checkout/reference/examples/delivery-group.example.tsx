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
  const {
    selectedDeliveryOption,
    targetedCartLines,
  } = useDeliveryGroup(deliveryGroups[0]);

  return (
    <Banner>
      Selected delivery option:{' '}
      {selectedDeliveryOption?.title}
    </Banner>
  );
}
