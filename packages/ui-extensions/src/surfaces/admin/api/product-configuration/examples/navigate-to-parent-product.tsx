import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Button,
  Text,
} from '@shopify/ui-extensions-react/admin';

const NavigateToParentProduct = () => {
  const {data, query, navigation} = useApi<'admin.product-variant-details.configuration.render'>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const loadParent = async () => {
      const variantId = data.selected[0]?.id;

      const {data: parentData} = await query(
        `query GetParentProduct($id: ID!) {
          productVariant(id: $id) {
            product {
              id
              title
            }
          }
        }`,
        {variables: {id: variantId}},
      );

      setProduct(parentData.productVariant.product);
    };

    loadParent();
  }, [data, query]);

  const handleNavigate = () => {
    if (product) {
      navigation.navigate(`shopify:admin/products/${product.id.split('/').pop()}`);
    }
  };

  return (
    <>
      {product && (
        <>
          <Text>Parent: {product.title}</Text>
          <Button title="View Parent Product" onPress={handleNavigate} />
        </>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-variant-details.configuration.render',
  () => <NavigateToParentProduct />,
);
