import {extend} from '@shopify/checkout-ui-extensions';

extend(
  'Checkout::DeliveryAddress::RenderBefore',
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
                  message:
                    'Sorry, we can only ship to Canada',
                  // Show an error underneath the country code field
                  target:
                    '$.cart.deliveryGroups[0].deliveryAddress.countryCode',
                },
                {
                  // In addition, show an error at the page level
                  message:
                    'Please use a different address.',
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
