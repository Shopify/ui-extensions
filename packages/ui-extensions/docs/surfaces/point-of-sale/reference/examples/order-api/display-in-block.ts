import {
  extension,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.order-details.block.render', (root, api) => {
  const order = api.order;

  const posBlock = root.createComponent(POSBlock, {});

  posBlock.createComponent(POSBlockRow, {
    label: 'Order',
    value: order.name,
  });

  posBlock.createComponent(POSBlockRow, {
    label: 'Order ID',
    value: order.id.toString(),
  });

  if (order.customerId) {
    posBlock.createComponent(POSBlockRow, {
      label: 'Customer ID',
      value: order.customerId.toString(),
    });
  }

  root.mount();
});
