import {extension, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-variant-details.configuration.render',
  (root, api) => {
    const {data, query} = api;

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

      const variant = variantData.productVariant;
      const components = variant.metafield
        ? JSON.parse(variant.metafield.value)
        : [];

      const skuText = root.createComponent(Text, {}, `SKU: ${variant.sku}`);
      const nameText = root.createComponent(Text, {}, `Display: ${variant.displayName}`);
      const countText = root.createComponent(
        Text,
        {},
        `${components.length} variant components configured`,
      );

      root.appendChild(skuText);
      root.appendChild(nameText);
      root.appendChild(countText);

      components.forEach((comp, i) => {
        const compText = root.createComponent(Text, {}, `Component ${i + 1}: ${comp.variantId}`);
        root.appendChild(compText);
      });
    };

    loadConfig();
  },
);
