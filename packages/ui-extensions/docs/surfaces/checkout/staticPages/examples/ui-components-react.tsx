import {
  reactExtension,
  BlockStack,
  InlineStack,
  Button,
  Image,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'Checkout::Dynamic::Render',
  () => <Extension />,
);

function Extension() {
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
