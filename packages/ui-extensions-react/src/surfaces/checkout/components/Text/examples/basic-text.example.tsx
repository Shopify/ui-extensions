import {render, Text, BlockStack} from '@shopify/ui-extensions-react/checkout';

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
