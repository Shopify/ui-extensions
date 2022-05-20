import {render, View} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <View background="color2" padding="base" border="base">
      View
    </View>
  );
}
