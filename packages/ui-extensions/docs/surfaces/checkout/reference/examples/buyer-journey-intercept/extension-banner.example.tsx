import {render} from 'preact';
import {useState} from 'preact/hooks';
import {
  useBuyerJourneyIntercept,
  useCartLineTarget,
} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

function Extension() {
  const [showError, setShowError] =
    useState(false);
  const {quantity} = useCartLineTarget();

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
    <s-banner>
      This item has a limit of one per customer.
    </s-banner>
  ) : null;
}
