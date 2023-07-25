import {extension} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.delivery-address.render-before',
  (root, {buyerJourney, shippingAddress}) => {
    let address = shippingAddress?.current;
    shippingAddress?.subscribe((newAddress) => {
      address = newAddress;
    });

    buyerJourney.intercept(
      ({canBlockProgress}) => {
        return canBlockProgress &&
          address?.countryCode &&
          address.countryCode !== 'CA'
          ? {
              behavior: 'block',
              reason: 'Invalid shipping country',
              errors: [
                {
                  // An error without a `target` property is shown at page level
                  message:
                    'Sorry, we can only ship to Canada',
                },
              ],
            }
          : {
              behavior: 'allow',
            };
      },
    );
  },
);
