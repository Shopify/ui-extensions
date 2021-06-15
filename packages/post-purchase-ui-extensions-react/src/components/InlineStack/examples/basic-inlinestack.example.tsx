import {render, InlineStack, View} from '@shopify/post-purchase-ui-extensions-react';

render('Checkout::PostPurchase::Render', () => <App />);

function App() {
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
    </InlineStack>
  );
}
