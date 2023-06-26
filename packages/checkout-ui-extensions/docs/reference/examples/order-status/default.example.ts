import {
  Banner,
  extend,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::OrderStatus::CustomerInformation::RenderAfter',
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
