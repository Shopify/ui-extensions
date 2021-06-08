import {render, View} from '@shopify/argo-checkout-react';

render('Checkout::Feature::Render', () => <App />);

function App() {
  return (
    <View background="surfaceSecondary" padding="base" border="base">
      View
    </View>
  );
}
