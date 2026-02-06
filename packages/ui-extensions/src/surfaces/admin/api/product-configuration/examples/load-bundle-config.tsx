import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/admin';

const LoadBundleConfig = () => {
  const {data, query} = useApi<'admin.product-details.configuration.render'>();
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const loadConfig = async () => {
      const productId = data.selected[0]?.id;

      const {data: bundleData} = await query(
        `query GetBundleComponents($id: ID!) {
          product(id: $id) {
            id
            title
            metafield(namespace: "bundle", key: "components") {
              value
            }
          }
        }`,
        {variables: {id: productId}},
      );

      const comps = bundleData.product.metafield
        ? JSON.parse(bundleData.product.metafield.value)
        : [];

      setComponents(comps);
    };

    loadConfig();
  }, [data, query]);

  return (
    <>
      <Text>{components.length} components configured</Text>
      {components.map((comp, i) => (
        <Text key={i}>Component {i + 1}</Text>
      ))}
    </>
  );
};

export default reactExtension(
  'admin.product-details.configuration.render',
  () => <LoadBundleConfig />,
);
