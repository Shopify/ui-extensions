import {extension, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-variant-details.configuration.render',
  (root, api) => {
    const {data, query} = api;

    const variantId = data.selected[0]?.id;
    const loading = root.createComponent(Text, {}, 'Loading...');
    root.appendChild(loading);

    query(
      `query GetVariant($id: ID!) {
        productVariant(id: $id) {
          title
          sku
          price
          inventoryQuantity
        }
      }`,
      {variables: {id: variantId}},
    ).then(({data: result}) => {
      const variant = result.productVariant;

      root.removeChild(loading);

      const container = root.createComponent(BlockStack);

      const titleText = root.createComponent(Text, {}, `Variant: ${variant.title}`);
      const skuText = root.createComponent(Text, {}, `SKU: ${variant.sku || 'None'}`);
      const priceText = root.createComponent(Text, {}, `Price: $${variant.price}`);
      const inventoryText = root.createComponent(
        Text,
        {},
        `Inventory: ${variant.inventoryQuantity} units`,
      );

      container.appendChild(titleText);
      container.appendChild(skuText);
      container.appendChild(priceText);
      container.appendChild(inventoryText);
      root.appendChild(container);
    });
  },
);
