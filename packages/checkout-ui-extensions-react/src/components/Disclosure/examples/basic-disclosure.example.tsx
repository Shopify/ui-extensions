import {
  render,
  Disclosure,
  Button,
  View,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <Disclosure>
      <Button toggles="one">Toggle</Button>
      <View id="one">Content</View>
    </Disclosure>
  );
}
