import {Banner, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.unfulfilled-items.render-after',
  (root) => {
    root.appendChild(
      root.createComponent(
        Banner,
        undefined,
        'Fulfillment details not yet available.'
      ),
    );
  },
);
