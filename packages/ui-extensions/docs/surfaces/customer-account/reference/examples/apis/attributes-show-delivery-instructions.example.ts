import {
  extension,
  Banner,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.block.render',
  (root, api) => {
    const attributes = api.attributes.current;
    const instructions = attributes?.find(
      (attr) => attr.key === 'Delivery Instructions',
    );

    if (!instructions) return;

    root.appendChild(
      root.createComponent(
        Banner,
        {status: 'info', title: 'Delivery instructions'},
        instructions.value,
      ),
    );
  },
);
