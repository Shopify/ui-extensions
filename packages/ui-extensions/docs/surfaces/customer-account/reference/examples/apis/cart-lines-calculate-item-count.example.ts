import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const lines = api.lines.current;

    const totalItems = lines.reduce(
      (sum, line) => sum + line.quantity,
      0,
    );

    const banner = root.createComponent(Banner, {status: 'info'});
    banner.appendChild(
      root.createComponent(
        Text,
        {},
        `This order contains ${totalItems} item${totalItems !== 1 ? 's' : ''} across ${lines.length} line item${lines.length !== 1 ? 's' : ''}.`,
      ),
    );
    root.appendChild(banner);
  },
);
