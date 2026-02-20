import React from 'react';
import {reactExtension, useApi, AdminPrintAction, Text, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;
  const numericId = productId?.split('/').pop();

  return (
    <AdminPrintAction
      src={`https://your-app.com/print/shipping-label?product=${numericId}&format=4x6`}
    >
      <BlockStack gap>
        <Text>Preparing shipping label with warehouse barcode...</Text>
      </BlockStack>
    </AdminPrintAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
