import {
  reactExtension,
  Badge,
  BlockStack,
  View,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <BlockStack
      border="base"
      padding="large200"
      spacing="base"
    >
      <View>
        <Text size="large" emphasis="bold">
          Subscription
        </Text>
        <Text>Mini garden seeds</Text>
      </View>
      <View>
        <Text emphasis="bold">
          $35.00 monthly
        </Text>
        <Badge tone="subdued">Paused</Badge>
      </View>
    </BlockStack>
  );
}
