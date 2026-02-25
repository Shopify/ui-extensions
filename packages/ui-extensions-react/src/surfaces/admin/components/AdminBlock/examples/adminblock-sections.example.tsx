import React from 'react';
import {reactExtension, AdminBlock, Section, Text, Divider, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <AdminBlock title="Product specifications">
      <BlockStack gap>
        <Section heading="Compliance">
          <Text>CE Marking — Approved</Text>
          <Text>EU distribution cleared</Text>
        </Section>
        <Divider />
        <Section heading="Shipping">
          <Text>Weight: 2.5 kg</Text>
          <Text>Dimensions: 30 × 20 × 15 cm</Text>
        </Section>
      </BlockStack>
    </AdminBlock>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
