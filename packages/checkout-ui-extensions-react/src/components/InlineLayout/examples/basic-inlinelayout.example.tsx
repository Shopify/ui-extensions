import {
  render,
  InlineLayout,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <InlineLayout columns={[200, 'fill']}>
      <View border="base" padding="base">
        200
      </View>
      <View border="base" padding="base">
        fill
      </View>
    </InlineLayout>
  );
}
