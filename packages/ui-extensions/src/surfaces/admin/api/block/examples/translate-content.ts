import {extension, Text, BlockStack} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.block.render',
  (root, api) => {
    const {i18n, data} = api;

    const productId = data.selected[0]?.id;

    const container = root.createComponent(BlockStack);

    const heading = root.createComponent(
      Text,
      {},
      i18n.translate('blockTitle'),
    );

    const detail = root.createComponent(
      Text,
      {},
      i18n.translate('productLabel', {id: productId}),
    );

    container.appendChild(heading);
    container.appendChild(detail);
    root.appendChild(container);
  },
);
