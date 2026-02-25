import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
  ProgressIndicator,
} from '@shopify/ui-extensions-react/admin';

const ProductInfo = () => {
  const {data, query} = useApi<'admin.product-details.block.render'>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productId = data.selected[0]?.id;

      const {data: productData} = await query(
        `query GetProduct($id: ID!) {
          product(id: $id) {
            title
            totalInventory
            status
          }
        }`,
        {variables: {id: productId}},
      );

      setProduct(productData.product);
    };

    fetchProduct();
  }, [data, query]);

  return (
    <>
      {product ? (
        <>
          <Text>Title: {product.title}</Text>
          <Text>Inventory: {product.totalInventory}</Text>
          <Text>Status: {product.status}</Text>
        </>
      ) : (
        <ProgressIndicator />
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-details.block.render',
  () => <ProductInfo />,
);
