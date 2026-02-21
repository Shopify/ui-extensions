import {reactExtension, useApi, Banner, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {close} = useApi('admin.product-details.action.render');

  return (
    <BlockStack>
      <Banner
        title="Missing required fields"
        tone="warning"
        secondaryAction={
          <Button onPress={() => close()}>Dismiss</Button>
        }
      >
        The product is missing a weight and shipping dimensions. These fields
        are required by your fulfillment provider before orders can be
        processed.
      </Banner>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
