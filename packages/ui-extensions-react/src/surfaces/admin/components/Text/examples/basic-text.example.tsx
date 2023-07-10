import {render, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <BlockStack inlineAlignment="center">
      <Text size="extraSmall">Extra Small</Text>
      <Text size="small">Small</Text>
      <Text size="base">Base</Text>
      <Text size="medium">Medium</Text>
      <Text size="large">Large</Text>
      <Text size="extraLarge">Extra Large</Text>
    </BlockStack>
  );
}
