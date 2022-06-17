import {render, Text, BlockStack} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  return (
    <BlockStack inlineAlignment="center">
      <Text size="extraSmall">Total</Text>
      <Text size="small">Total</Text>
      <Text size="base">Total</Text>
      <Text size="medium">Total</Text>
      <Text size="large">Total</Text>
      <Text size="extraLarge">Total</Text>
    </BlockStack>
  );
}
