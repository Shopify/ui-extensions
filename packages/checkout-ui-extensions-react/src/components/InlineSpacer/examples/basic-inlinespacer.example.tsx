import {
  render,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <InlineStack spacing="none">
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="loose" />
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="tight" />
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="base" />
      <View border="base" padding="base">
        View
      </View>
    </InlineStack>
  );
}
