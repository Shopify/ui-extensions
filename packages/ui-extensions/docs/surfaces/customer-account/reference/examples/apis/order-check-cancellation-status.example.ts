import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const order = api.order.current;

    if (!order?.cancelledAt) return;

    const banner = root.createComponent(
      Banner,
      {status: 'critical', title: 'Order cancelled'},
    );
    banner.appendChild(
      root.createComponent(
        Text,
        {},
        `This order was cancelled on ${new Date(order.cancelledAt).toLocaleDateString()}.`,
      ),
    );
    root.appendChild(banner);
  },
);
