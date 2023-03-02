import {
  render,
  BlockStack,
  InlineStack,
  Button,
  Image,
  Text,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  return (
    <InlineStack>
      <Image source="/url/for/image" />
      <BlockStack>
        <Text size="large">Heading</Text>
        <Text size="small">Description</Text>
      </BlockStack>
      <Button
        onPress={() => {
          console.log('button was pressed');
        }}
      >
        Button
      </Button>
    </InlineStack>
  );
}
