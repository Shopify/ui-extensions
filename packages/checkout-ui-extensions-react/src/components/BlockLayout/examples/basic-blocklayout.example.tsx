import {render, BlockLayout, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <BlockLayout rows={['auto', 200]}>
      <View border="base" padding="base">
        auto
      </View>
      <View border="base" padding="base">
        200
      </View>
    </BlockLayout>
  );
}
