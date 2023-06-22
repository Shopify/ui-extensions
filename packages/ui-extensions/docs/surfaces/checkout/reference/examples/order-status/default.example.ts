import {
  Banner,
  extension,
} from '@shopify/checkout-ui-extensions';

extension(
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
