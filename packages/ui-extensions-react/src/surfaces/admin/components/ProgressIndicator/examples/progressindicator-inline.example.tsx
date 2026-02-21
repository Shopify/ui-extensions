import {reactExtension, ProgressIndicator, Text, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Text fontWeight="bold">Checking eligibility...</Text>
      <InlineStack>
        <ProgressIndicator
          size="small-300"
          tone="inherit"
          accessibilityLabel="Checking product eligibility"
        />
        <Text>Verifying product meets marketplace requirements</Text>
      </InlineStack>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
