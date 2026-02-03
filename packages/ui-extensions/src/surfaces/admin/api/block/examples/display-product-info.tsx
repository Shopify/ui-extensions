import React, {useEffect, useState} from 'react';
import {
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/admin';

const ProductInfo = () => {
  const {data, query} = useApi<'admin.product-details.block.render'>();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = data.selected[0]?.id;

    query(
      `query GetProduct($id: ID!) {
        product(id: $id) {
          title
          totalInventory
          status
        }
      }`,
      {variables: {id: productId}},
    ).then(({data: productData}) => {
      setProduct(productData.product);
    });
  }, [data, query]);

  return null;
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <ProductInfo />,
);
