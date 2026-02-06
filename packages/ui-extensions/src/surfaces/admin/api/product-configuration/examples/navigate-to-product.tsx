import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const NavigateToProduct = () => {
  const {data, query, navigation} =
    useApi<'admin.product-details.configuration.render'>();
  const [productTitle, setProductTitle] = useState<string | null>(null);

  const productId = data.selected[0]?.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const {data: result} = await query(
        `query GetProduct($id: ID!) {
          product(id: $id) {
            title
          }
        }`,
        {variables: {id: productId}},
      );

      setProductTitle(result.product.title);
    };

    fetchProduct();
  }, [productId, query]);

  return (
    <>
      {productTitle ? (
        <>
          <Text>Current product: {productTitle}</Text>
          <Button
            title="View in admin"
            onPress={() => {
              navigation.navigate(
                `shopify:admin/products/${productId.split('/').pop()}`,
              );
            }}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-details.configuration.render',
  () => <NavigateToProduct />,
);
