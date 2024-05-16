import {
  Banner,
  extension,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.thank-you.block.render',
  (root, {orderConfirmation}) => {
    let bannerShown = false;

    orderConfirmation.subscribe(
      (orderConfirmation) => {
        if (orderConfirmation && !bannerShown) {
          root.appendChild(
            root.createComponent(
              Banner,
              undefined,
              `Please include your order confirmation ID (${orderConfirmation.id}) in support requests`,
            ),
          );

          bannerShown = true;
        }
      },
    );
  },
);
