import {
  extend,
  Banner,
} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::DeliveryAddress::RenderBefore',
  (root, {buyerJourney, shippingAddress}) => {
    const banner = root.createComponent(Banner);

    let currentShippingCountry =
      shippingAddress?.current?.countryCode;
    shippingAddress?.subscribe((newAddress) => {
      currentShippingCountry =
        newAddress?.countryCode;
    });

    buyerJourney.intercept(
      ({canBlockProgress}) => {
        return canBlockProgress &&
          currentShippingCountry !== 'CA'
          ? {
              behavior: 'block',
              reason: 'Can only ship to canada',
              perform: (result) => {
                if (result.behavior === 'block') {
                  banner.appendChild(
                    'Sorry, we can only ship to Canada',
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
