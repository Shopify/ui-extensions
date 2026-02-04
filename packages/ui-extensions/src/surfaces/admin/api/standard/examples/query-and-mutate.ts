import {extension, Button, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {query} = api;

    let products = [];
    let productsText;
    let updateButton;
    let updatedText;

    const stack = root.createComponent(BlockStack);

    const queryButton = root.createComponent(Button, {
      title: 'Query Products',
      onPress: async () => {
        const {data: productsData} = await query(
          `query GetProducts {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  totalInventory
                }
              }
            }
          }`,
        );

        products = productsData.products.edges;

        if (productsText) {
          stack.removeChild(productsText);
        }
        
        productsText = root.createComponent(
          Text,
          {},
          `${products.length} products found`,
        );
        stack.appendChild(productsText);

        if (!updateButton && products.length > 0) {
          updateButton = root.createComponent(Button, {
            title: 'Update First Product',
            onPress: handleUpdate,
          });
          stack.appendChild(updateButton);
        }
      },
    });

    const handleUpdate = async () => {
      const productId = products[0]?.node.id;
      if (!productId) return;

      const {data: updateData} = await query(
        `mutation UpdateProduct($id: ID!, $input: ProductInput!) {
          productUpdate(id: $id, product: $input) {
            product {
              id
              tags
            }
            userErrors {
              field
              message
            }
          }
        }`,
        {
          variables: {
            id: productId,
            input: {tags: ['processed', 'reviewed']},
          },
        },
      );

      if (updateData.productUpdate.product) {
        if (updatedText) {
          stack.removeChild(updatedText);
        }
        updatedText = root.createComponent(Text, {}, 'Product tags updated!');
        stack.appendChild(updatedText);
      }
    };

    stack.appendChild(queryButton);
    root.appendChild(stack);
  },
);
