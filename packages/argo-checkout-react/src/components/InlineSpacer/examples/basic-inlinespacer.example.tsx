import {
  render,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

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
