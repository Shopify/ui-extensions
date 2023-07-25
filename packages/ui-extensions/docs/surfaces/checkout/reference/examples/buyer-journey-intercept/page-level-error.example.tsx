import {
  reactExtension,
  useBuyerJourneyIntercept,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.delivery-address.render-before',
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
