import {reactExtension, HeadingGroup, Heading, TextField, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Custom shipping rules</Heading>
      <HeadingGroup>
        <Heading>Domestic shipping</Heading>
        <TextField label="Max package weight (kg)" name="maxWeight" />
        <TextField label="Handling instructions" name="handling" />
      </HeadingGroup>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
