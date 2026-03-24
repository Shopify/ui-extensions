import {extension, Banner, Text} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const privacy = api.customerPrivacy.current;
    if (!privacy.shouldShowBanner) return;
    const banner = root.createComponent(Banner, {status: 'info', title: 'Cookie preferences'});
    banner.appendChild(root.createComponent(Text, {}, 'Please review your cookie preferences to personalize your experience.'));
    root.appendChild(banner);
  },
);
