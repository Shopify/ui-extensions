const {data, query} = useApi(TARGET);

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

const components = bundleData.product.metafield
  ? JSON.parse(bundleData.product.metafield.value)
  : [];

console.log('Bundle components:', components);
