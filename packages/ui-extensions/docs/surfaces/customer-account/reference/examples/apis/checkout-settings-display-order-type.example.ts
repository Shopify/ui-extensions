import {extension, Banner, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const settings = api.checkoutSettings.current;
    if (settings.orderSubmission !== 'DRAFT_ORDER') return;
    const banner = root.createComponent(Banner, {status: 'warning', title: 'Draft order'});
    banner.appendChild(root.createComponent(Text, {}, 'This order requires merchant approval before processing.'));
    root.appendChild(banner);
  },
);
