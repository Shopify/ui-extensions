import {
  Banner,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-status.cart-line-list.render-after',
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
