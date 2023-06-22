import {
  reactExtension,
  InlineStack,
  View,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <InlineStack spacing="base">
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
    </InlineStack>
  );
}
