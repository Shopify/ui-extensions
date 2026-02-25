import React, {useState, useEffect} from 'react';
import {
  reactExtension,
  useApi,
  Text,
} from '@shopify/ui-extensions-react/admin';

const LoadVariantBundleConfig = () => {
  const {data, query} = useApi<'admin.product-variant-details.configuration.render'>();
  const [variant, setVariant] = useState<any>(null);
  const [components, setComponents] = useState<any[]>([]);

  useEffect(() => {
    const loadConfig = async () => {
      const variantId = data.selected[0]?.id;

      const {data: variantData} = await query(
        `query GetVariantBundleConfig($id: ID!) {
          productVariant(id: $id) {
            id
            sku
            displayName
            metafield(namespace: "bundle", key: "variant_components") {
              value
            }
          }
        }`,
        {variables: {id: variantId}},
      );

      const variantInfo = variantData.productVariant;
      const comps = variantInfo.metafield
        ? JSON.parse(variantInfo.metafield.value)
        : [];

      setVariant(variantInfo);
      setComponents(comps);
    };

    loadConfig();
  }, [data, query]);

  return (
    <>
      {variant && (
        <>
          <Text>SKU: {variant.sku}</Text>
          <Text>Display: {variant.displayName}</Text>
          <Text>{components.length} variant components configured</Text>
          {components.map((comp, i) => (
            <Text key={i}>
              Component {i + 1}: {comp.variantId}
            </Text>
          ))}
        </>
      )}
    </>
  );
};

export default reactExtension(
  'admin.product-variant-details.configuration.render',
  () => <LoadVariantBundleConfig />,
);
