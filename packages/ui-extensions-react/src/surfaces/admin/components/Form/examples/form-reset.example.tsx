import {reactExtension, useApi, Form, TextField, Button, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <Form
      onSubmit={async () => {
        await fetch('/api/products/shipping', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      }}
      onReset={() => close()}
    >
      <BlockStack gap>
        <TextField label="Package weight (kg)" name="weight" />
        <TextField label="Dimensions (L×W×H cm)" name="dimensions" />
        <InlineStack gap inlineAlignment="end">
          <Button variant="tertiary" accessibilityRole="reset">Cancel</Button>
          <Button variant="primary" accessibilityRole="submit">Save shipping info</Button>
        </InlineStack>
      </BlockStack>
    </Form>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
