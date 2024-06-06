import {Banner, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.fulfillment-details.render-after',
  (root) => {
    root.appendChild(
      root.createComponent(
        Banner,
        undefined,
        'Note that tracking info update is subject to the courier who delivers your order'
      ),
    );
  },
);
