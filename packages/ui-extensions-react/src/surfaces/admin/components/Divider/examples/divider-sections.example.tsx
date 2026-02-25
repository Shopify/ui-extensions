import {reactExtension, Divider, TextField, Heading, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Shipping details</Heading>
      <TextField label="Weight (kg)" name="weight" />
      <TextField label="Dimensions (L×W×H cm)" name="dimensions" />
      <Divider />
      <Heading>Customs information</Heading>
      <TextField label="HS tariff code" name="hsCode" />
      <TextField label="Country of origin" name="countryOfOrigin" />
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
