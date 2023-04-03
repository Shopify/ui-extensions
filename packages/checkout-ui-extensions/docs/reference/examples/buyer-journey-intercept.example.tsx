import React, {useState} from 'react';
import {
  render,
  Banner,
  useBuyerJourneyIntercept,
  useShippingAddress,
} from '@shopify/checkout-ui-extensions-react';

render(
  'Checkout::DeliveryAddress::RenderBefore',
  () => <Extension />,
);

function Extension() {
  const [showError, setShowError] =
    useState(false);
  const address = useShippingAddress();

  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      return canBlockProgress &&
        address?.countryCode !== 'CA'
        ? {
            behavior: 'block',
            reason: 'can only ship to canada',
            perform: (result) => {
              if (result.behavior === 'block') {
                setShowError(true);
              }
            },
          }
        : {
            behavior: 'allow',
            perform: () => {
              setShowError(false);
            },
          };
    },
  );

  return showError ? (
    <Banner>
      Sorry, we can only ship to Canada
    </Banner>
  ) : null;
}
