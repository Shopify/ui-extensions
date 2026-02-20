import React from 'react';
import {reactExtension, useApi, AdminPrintAction, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <AdminPrintAction
      src={`https://your-app.com/print/packing-slip?product=${productId}`}
    >
      <BlockStack gap>
        <Text>Generating packing slip for this product...</Text>
      </BlockStack>
    </AdminPrintAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
