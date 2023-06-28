import {render, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <View padding="base" border="base">
      View
    </View>
  );
}
