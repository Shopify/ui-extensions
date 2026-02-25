import React from 'react';
import {reactExtension, AdminBlock, Text, Badge, InlineStack, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {

  return (
    <AdminBlock title="Warehouse integration">
      <BlockStack gap>
        <InlineStack gap>
          <Text>Sync status:</Text>
          <Badge tone="success">Connected</Badge>
        </InlineStack>
        <Text>Last synced 5 minutes ago</Text>
        <Text>Warehouse inventory: 247 units across 3 locations</Text>
      </BlockStack>
    </AdminBlock>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
