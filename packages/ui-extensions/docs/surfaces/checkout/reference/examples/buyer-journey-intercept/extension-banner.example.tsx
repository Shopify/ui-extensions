import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

import {useBuyerJourneyIntercept} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [showError, setShowError] =
    useState(false);

  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      return canBlockProgress &&
        shopify.target.value.quantity > 1
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
    <s-banner tone="critical">
      This item has a limit of one per customer.
    </s-banner>
  ) : null;
}
