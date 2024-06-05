import {Banner, extension} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.return-details.render-after',
  (root) => {
    root.appendChild(
      root.createComponent(
        Banner,
        undefined,
        'Your return request has been received and is processing.'
      ),
    );
  },
);
