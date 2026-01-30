const {data, query} = useApi(TARGET);

const variantId = data.selected[0]?.id;

const {data: variantData} = await query(
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

const components = variantData.productVariant.metafield
  ? JSON.parse(variantData.productVariant.metafield.value)
  : [];

console.log('Variant bundle components:', components);
