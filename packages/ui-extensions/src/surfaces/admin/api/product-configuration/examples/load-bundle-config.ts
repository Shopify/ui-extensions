import {extension, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {data, query} = api;

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

      const components = bundleData.product.metafield
        ? JSON.parse(bundleData.product.metafield.value)
        : [];

      const summaryText = root.createComponent(
        Text,
        {},
        `${components.length} components configured`,
      );
      root.appendChild(summaryText);

      components.forEach((comp, i) => {
        const compText = root.createComponent(Text, {}, `Component ${i + 1}`);
        root.appendChild(compText);
      });
    };

    loadConfig();
  },
);
