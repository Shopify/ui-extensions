import {reactExtension, ProgressIndicator, Text, Button, BlockStack, InlineStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');

  return (
    <BlockStack>
      <Text>Syncing product data to your warehouse system...</Text>
      <InlineStack>
        <ProgressIndicator
          size="base"
          accessibilityLabel="Syncing in progress"
        />
      </InlineStack>
      <Button variant="tertiary" onPress={() => close()}>
        Cancel
      </Button>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
