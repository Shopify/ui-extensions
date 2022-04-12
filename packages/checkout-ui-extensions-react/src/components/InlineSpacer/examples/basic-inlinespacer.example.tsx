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
      <InlineSpacer size="small" />
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer size="large" />
      <View border="base" padding="base">
        View
      </View>
    </InlineStack>
  );
}
