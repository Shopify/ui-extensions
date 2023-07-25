import {
  Banner,
  extension,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'customer-account.order-details.customer-information.render-after',
  (root, {order}) => {
    let bannerShown = false;

    order.subscribe((order) => {
      if (order && !bannerShown) {
        root.appendChild(
          root.createComponent(
            Banner,
            undefined,
            `Please include your order ID (${order.id}) in support requests`,
          ),
        );

        bannerShown = true;
      }
    });
  },
);
