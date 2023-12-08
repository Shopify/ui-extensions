import {
  reactExtension,
  BlockStack,
  InlineStack,
  Button,
  Image,
  Text,
} from '@shopify/ui-extensions-react/customer-account';

reactExtension(
  'customer-account.order-status.block.render',
  () => <App />,
);

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
