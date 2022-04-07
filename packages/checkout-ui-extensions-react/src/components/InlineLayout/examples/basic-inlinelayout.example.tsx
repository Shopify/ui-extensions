import {
  render,
  InlineLayout,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <InlineLayout columns={['200px', 'fill']}>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
    </InlineLayout>
  );
}
