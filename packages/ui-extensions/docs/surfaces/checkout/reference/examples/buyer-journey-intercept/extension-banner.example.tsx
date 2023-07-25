import {useState} from 'react';
import {
  reactExtension,
  Banner,
  useBuyerJourneyIntercept,
  useTarget,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
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
