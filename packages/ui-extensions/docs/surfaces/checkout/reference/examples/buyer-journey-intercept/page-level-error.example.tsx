import {render} from 'preact';
import {
  useBuyerJourneyIntercept,
  useShippingAddress,
} from '@shopify/ui-extensions/checkout/preact';

export default async () => {
  render(<Extension />, document.body);
}

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
