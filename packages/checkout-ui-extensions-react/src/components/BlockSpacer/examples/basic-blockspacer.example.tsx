import {render, BlockSpacer, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <>
      <View border="base" padding="base">
        View
      </View>
      <BlockSpacer />
      <View border="base" padding="base">
        View
      </View>
    </>
  );
}
