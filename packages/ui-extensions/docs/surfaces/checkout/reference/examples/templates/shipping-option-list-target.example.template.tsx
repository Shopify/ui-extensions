import {
  reactExtension,
  Text,
  useDeliveryGroupTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  '##TARGET##',
  () => <Extension />,
);

function Extension() {
  const targetedDeliveryGroup =
    useDeliveryGroupTarget();

  if (!targetedDeliveryGroup) {
    return (
      <Text>Delivery group not available</Text>
    );
  }

  if (
    targetedDeliveryGroup.groupType ===
    'oneTimePurchase'
  ) {
    return (
      <Text>
        One time purchase shipping group
      </Text>
    );
  }
  return <Text>Subscription shipping group</Text>;
}
