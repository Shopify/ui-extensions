import {extension, URLField, BlockStack, Text} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {data} = api;
    const productId = data.selected[0]?.id;
    const numericId = productId?.split('/').pop();

    const stack = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {fontWeight: 'bold'},
      'Product links',
    );

    const storefrontField = root.createComponent(URLField, {
      label: 'Storefront URL',
      name: 'storefrontUrl',
      value: `https://your-store.myshopify.com/products/${numericId}`,
      readOnly: true,
    });

    const externalField = root.createComponent(URLField, {
      label: 'External catalog URL',
      name: 'externalUrl',
    });

    stack.appendChild(heading);
    stack.appendChild(storefrontField);
    stack.appendChild(externalField);
    root.appendChild(stack);
  },
);
