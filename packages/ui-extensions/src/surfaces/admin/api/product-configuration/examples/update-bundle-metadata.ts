import {extension, TextField, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {data, query} = api;

    let bundleName = '';
    let saveText;

    const productId = data.selected[0]?.id;

    const stack = root.createComponent(BlockStack);

    const productText = root.createComponent(Text, {}, `Product ID: ${productId}`);

    const nameField = root.createComponent(TextField, {
      label: 'Bundle display name',
      value: bundleName,
      onChange: (value) => {
        bundleName = value;
      },
    });

    const saveButton = root.createComponent(Button, {
      title: 'Save Bundle Metadata',
      onPress: async () => {
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

        if (saveText) {
          stack.removeChild(saveText);
        }

        saveText = root.createComponent(Text, {}, 'Bundle metadata saved');
        stack.appendChild(saveText);
      },
    });

    stack.appendChild(productText);
    stack.appendChild(nameField);
    stack.appendChild(saveButton);

    root.appendChild(stack);
  },
);
