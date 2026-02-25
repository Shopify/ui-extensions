import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
  Button,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const UpdateBundleMetadata = () => {
  const {data, query} = useApi<'admin.product-details.configuration.render'>();
  const [bundleName, setBundleName] = useState('');
  const [saved, setSaved] = useState(false);

  const productId = data.selected[0]?.id;

  const handleSave = async () => {
    await query(
      `mutation UpdateBundleName($id: ID!, $metafields: [MetafieldsSetInput!]!) {
        productUpdate(input: {id: $id, metafields: $metafields}) {
          product {
            id
          }
        }
      }`,
      {
        variables: {
          id: productId,
          metafields: [
            {
              namespace: 'bundle',
              key: 'display_name',
              value: bundleName,
              type: 'single_line_text_field',
            },
          ],
        },
      },
    );

    setSaved(true);
  };

  return (
    <BlockStack>
      <Text>Product ID: {productId}</Text>
      <TextField
        label="Bundle display name"
        value={bundleName}
        onChange={setBundleName}
      />
      <Button title="Save Bundle Metadata" onPress={handleSave} />
      {saved && <Text>Bundle metadata saved</Text>}
    </BlockStack>
  );
};

export default reactExtension(
  'admin.product-details.configuration.render',
  () => <UpdateBundleMetadata />,
);
