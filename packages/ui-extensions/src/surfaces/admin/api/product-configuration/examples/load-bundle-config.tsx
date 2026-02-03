import React, {useEffect, useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const LoadBundleConfig = () => {
  const {data, query} = useApi<'admin.product-details.configuration.render'>();
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const productId = data.selected[0]?.id;

    query(
      `query GetProductBundle($id: ID!) {
        product(id: $id) {
          metafield(namespace: "bundle", key: "components") {
            value
          }
        }
      }`,
      {variables: {id: productId}},
    ).then(({data: productData}) => {
      const parsed = JSON.parse(productData.product.metafield?.value || '[]');
      setComponents(parsed);
    });
  }, [data, query]);

  return null;
};

export default reactExtension('admin.product-details.configuration.render', () => <LoadBundleConfig />);
