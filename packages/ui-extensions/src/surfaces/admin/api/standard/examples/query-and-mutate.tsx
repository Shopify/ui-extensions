import React, {useState} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

const QueryAndMutate = () => {
  const {query} = useApi<'admin.product-details.block.render'>();
  const [products, setProducts] = useState<any[]>([]);
  const [updated, setUpdated] = useState(false);

  const handleQuery = async () => {
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

    setProducts(productsData.products.edges);
  };

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
      setUpdated(true);
    }
  };

  return (
    <BlockStack>
      <Button title="Query Products" onPress={handleQuery} />
      {products.length > 0 && (
        <>
          <Text>{products.length} products found</Text>
          <Button title="Update First Product" onPress={handleUpdate} />
        </>
      )}
      {updated && <Text>Product tags updated!</Text>}
    </BlockStack>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <QueryAndMutate />,
);
