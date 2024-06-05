import {Banner, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.payment-details.render-after',
  (root) => {
    root.append(
      root.createComponent(
        Banner,
        undefined,
        'You will have to contact the merchant to complete your payment.'
      ),
    );
  },
);
