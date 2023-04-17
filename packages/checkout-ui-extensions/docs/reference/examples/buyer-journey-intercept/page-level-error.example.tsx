import React from 'react';
import {
  render,
  useBuyerJourneyIntercept,
  useShippingAddress,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const address = useShippingAddress();

  useBuyerJourneyIntercept(
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

  return null;
}
