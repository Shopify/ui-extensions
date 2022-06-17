import {render, BlockLayout, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <BlockLayout rows={[60, 'fill']}>
      <View border="base" padding="base">
        60
      </View>
      <View border="base" padding="base">
        fill
      </View>
    </BlockLayout>
  );
}
