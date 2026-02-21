import React from 'react';
import {reactExtension, AdminBlock, Heading, Text, Divider, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <AdminBlock title="Product specifications">
      <BlockStack gap>
        <BlockStack gap>
          <Heading>Compliance</Heading>
          <Text>CE Marking — Approved</Text>
          <Text>EU distribution cleared</Text>
        </BlockStack>
        <Divider />
        <BlockStack gap>
          <Heading>Shipping</Heading>
          <Text>Weight: 2.5 kg</Text>
          <Text>Dimensions: 30 × 20 × 15 cm</Text>
        </BlockStack>
      </BlockStack>
    </AdminBlock>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
