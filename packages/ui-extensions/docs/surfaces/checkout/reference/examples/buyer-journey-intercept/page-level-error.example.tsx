import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useBuyerJourneyIntercept} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  useBuyerJourneyIntercept(
    ({canBlockProgress}) => {
      return canBlockProgress &&
        shopify.shippingAddress.value
          ?.countryCode &&
        shopify.shippingAddress.value
          .countryCode !== 'CA'
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
