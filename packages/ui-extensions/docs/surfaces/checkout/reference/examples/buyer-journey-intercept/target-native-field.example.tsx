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

  return null;
}
