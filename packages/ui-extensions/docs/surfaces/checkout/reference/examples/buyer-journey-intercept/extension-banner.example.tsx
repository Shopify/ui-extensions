import React, {useState} from 'react';
import {
  reactExtension,
  Banner,
  useBuyerJourneyIntercept,
  useTarget,
} from '@shopify/checkout-ui-extensions-react';

reactExtension(
  'Checkout::CartLineDetails::RenderAfter',
  () => <Extension />,
);

function Extension() {
  const [showError, setShowError] =
    useState(false);
  const {quantity} = useTarget();

  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      return canBlockProgress && quantity > 1
        ? {
            behavior: 'block',
            reason: 'limited stock',
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
      This item has a limit of one per customer.
    </Banner>
  ) : null;
}
