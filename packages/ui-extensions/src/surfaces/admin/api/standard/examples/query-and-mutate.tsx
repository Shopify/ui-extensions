import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const QueryAndMutate = () => {
  const {query} = useApi<'admin.product-details.block.render'>();
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);

  const handleQuery = async () => {
    const {data: productsData} = await query(
      `query GetProducts {
        products(first: 10) {
          edges {
            node {
              id
              title
            }
          }
        }
      }`,
    );

    setProducts(productsData.products.edges);
  };

  const handleUpdate = async () => {
    const firstProduct = products[0]?.node;

    if (firstProduct) {
      await query(
        `mutation UpdateProduct($id: ID!, $input: ProductInput!) {
          productUpdate(id: $id, product: $input) {
            product {
              id
              tags
            }
          }
        }`,
        {
          variables: {
            id: firstProduct.id,
            input: {tags: ['processed', 'reviewed']},
          },
        },
      );

      setUpdated(true);
    }
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <QueryAndMutate />);
