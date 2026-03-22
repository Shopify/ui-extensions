import {
  extension,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const order = api.order.current;

    if (!order?.confirmationNumber) return;

    root.appendChild(
      root.createComponent(
        Text,
        {},
        `Confirmation number: ${order.confirmationNumber}`,
      ),
    );
  },
);
