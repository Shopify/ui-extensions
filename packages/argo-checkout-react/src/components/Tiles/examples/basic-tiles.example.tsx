import {render, Tiles, View} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <Tiles>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
      <View border="base" padding="base">
        View
      </View>
    </Tiles>
  );
}
