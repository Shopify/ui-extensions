import {
  extension,
  Banner,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.cart-line-item.render-after',
  (root, {buyerJourney, extension, target}) => {
    const orderLimitBanner =
      root.createComponent(Banner);
    const configBanner = root.createComponent(
      Banner,
      {
        status: 'warning',
        title: 'This app may be misconfigured',
      },
      `To allow this app to block checkout, enable this behavior in "Checkout behavior" settings.`,
    );

    let quantity = target.current.quantity;
    let blockProgressGranted =
      extension.capabilities.current.find(
        (capability) =>
          capability === 'block_progress',
      );
    const editorType = extension.editor.type;

    target?.subscribe((newTarget) => {
      quantity = newTarget.quantity;
    });

    extension.capabilities.subscribe(
      (newCapabilities) => {
        blockProgressGranted =
          newCapabilities.find(
            (capability) =>
              capability === 'block_progress',
          );

        if (
          editorType === 'checkout' &&
          !blockProgressGranted
        ) {
          root.appendChild(configBanner);
        } else {
          root.removeChild(configBanner);
        }
      },
    );

    buyerJourney.intercept(
      ({canBlockProgress}) => {
        return canBlockProgress && quantity > 1
          ? {
              behavior: 'block',
              reason: 'limited stock',
              perform: (result) => {
                if (result.behavior === 'block') {
                  orderLimitBanner.appendChild(
                    'This item has a limit of one per customer.',
                  );
                  root.appendChild(
                    orderLimitBanner,
                  );
                }
              },
            }
          : {
              behavior: 'allow',
              perform: () => {
                root.removeChild(
                  orderLimitBanner,
                );
              },
            };
      },
    );
  },
);
