import {
  extension,
  Banner,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const attributes = api.attributes.current;
    const giftMessage = attributes?.find(
      (attr) => attr.key === 'Gift Message',
    );

    if (!giftMessage) return;

    const banner = root.createComponent(
      Banner,
      {status: 'info', title: 'Gift message'},
    );
    banner.appendChild(
      root.createComponent(Text, {}, giftMessage.value),
    );
    root.appendChild(banner);
  },
);
