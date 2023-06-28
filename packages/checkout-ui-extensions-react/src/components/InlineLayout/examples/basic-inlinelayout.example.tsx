import {
  render,
  InlineLayout,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <InlineLayout columns={['20%', 'fill']}>
      <View border="base" padding="base">
        20%
      </View>
      <View border="base" padding="base">
        fill
      </View>
    </InlineLayout>
  );
}
