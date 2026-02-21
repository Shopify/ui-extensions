import {reactExtension, HeadingGroup, Heading, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <BlockStack>
      <Heading>Product compliance</Heading>
      <HeadingGroup>
        <Heading>Safety certifications</Heading>
        <Text>
          Certifications required for sale in regulated markets.
        </Text>
        <HeadingGroup>
          <Heading>EU compliance</Heading>
          <Text>
            CE marking and REACH regulation status for European Union
            distribution.
          </Text>
        </HeadingGroup>
      </HeadingGroup>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
