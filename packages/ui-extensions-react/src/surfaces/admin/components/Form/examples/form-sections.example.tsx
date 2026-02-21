import {reactExtension, useApi, Form, TextField, EmailField, Section, Button, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data, close} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <Form
      onSubmit={async () => {
        await fetch('/api/fulfillment/setup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({productId}),
        });
        close();
      }}
      onReset={() => close()}
    >
      <BlockStack gap>
        <Section heading="Provider details">
          <TextField label="Provider name" name="providerName" required />
          <TextField label="API endpoint" name="endpoint" />
        </Section>
        <Section heading="Contact information">
          <TextField label="Contact name" name="contactName" />
          <EmailField label="Contact email" name="contactEmail" />
        </Section>
        <Button variant="primary">Set up provider</Button>
      </BlockStack>
    </Form>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
