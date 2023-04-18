import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::CartLineDetails::RenderAfter',
  (root, {buyerJourney, target}) => {
    const banner = root.createComponent(Banner);

    let quantity = target.current.quantity;

    target?.subscribe((newTarget) => {
      quantity = newTarget.quantity;
    });

    buyerJourney.intercept(
      ({canBlockProgress}) => {
        return canBlockProgress && quantity > 1
          ? {
              behavior: 'block',
              reason: 'limited stock',
              perform: (result) => {
                if (result.behavior === 'block') {
                  banner.appendChild(
                    'This item has a limit of one per customer.',
                  );
                  root.appendChild(banner);
                }
              },
            }
          : {
              behavior: 'allow',
              perform: () => {
                root.removeChild(banner);
              },
            };
      },
    );
  },
);
