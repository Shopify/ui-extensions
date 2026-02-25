import React from 'react';
import {reactExtension, useApi, AdminPrintAction, Text, ProgressIndicator, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.action.render');
  const productId = data.selected[0]?.id;

  return (
    <AdminPrintAction
      src={`https://your-app.com/print/invoice?product=${productId}&type=wholesale`}
    >
      <BlockStack gap>
        <ProgressIndicator size="small-200" accessibilityLabel="Generating invoice" />
        <Text>
          Generating wholesale invoice with pricing and tax details...
        </Text>
      </BlockStack>
    </AdminPrintAction>
  );
}

export default reactExtension(
  'admin.product-details.action.render',
  () => <App />,
);
