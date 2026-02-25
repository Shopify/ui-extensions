import {reactExtension, Section, TextField, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Section
        heading="Shipping configuration"
        accessibilityLabel="Configure shipping dimensions and weight for this product"
      >
        <TextField label="Weight (kg)" name="weight" />
        <TextField label="Length (cm)" name="length" />
        <TextField label="Width (cm)" name="width" />
      </Section>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
