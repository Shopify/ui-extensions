import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {data} = shopify;
  const [components, setComponents] = useState([]);
  const [variantInfo, setVariantInfo] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      const variantId = data.selected[0]?.id;

      const {data: variantData} = await shopify.query(
        `query GetVariantBundleComponents($id: ID!) {
          productVariant(id: $id) {
            id
            displayName
            sku
            metafield(namespace: "bundle", key: "variant_components") {
              value
            }
          }
        }`,
        {variables: {id: variantId}},
      );

      setVariantInfo(variantData.productVariant);
      
      const comps = variantData.productVariant.metafield
        ? JSON.parse(variantData.productVariant.metafield.value)
        : [];

      setComponents(comps);
    };

    loadConfig();
  }, [data]);

  return (
    <s-admin-block heading="Variant Bundle">
      {variantInfo && (
        <>
          <s-text>{variantInfo.displayName}</s-text>
          <s-text>SKU: {variantInfo.sku}</s-text>
          <s-text>{components.length} variant components configured</s-text>
        </>
      )}
    </s-admin-block>
  );
}
