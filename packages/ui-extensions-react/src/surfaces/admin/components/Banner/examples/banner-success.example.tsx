import {useState} from 'react';
import {reactExtension, useApi, Banner, BlockStack} from '@shopify/ui-extensions-react/admin';

function App() {
  const {data} = useApi('admin.product-details.block.render');
  const productId = data.selected[0]?.id;
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <BlockStack>
      <Banner
        title="Product updated successfully"
        tone="success"
        dismissible
        onDismiss={() => setVisible(false)}
      >
        Tags and metafields for product {productId} have been synced to your
        external catalog.
      </Banner>
    </BlockStack>
  );
}

export default reactExtension(
  'admin.product-details.block.render',
  () => <App />,
);
