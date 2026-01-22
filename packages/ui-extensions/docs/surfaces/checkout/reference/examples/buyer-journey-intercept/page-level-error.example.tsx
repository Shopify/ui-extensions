import {
  reactExtension,
  Banner,
  useBuyerJourneyIntercept,
  useExtensionCapability,
  useExtensionEditor,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.delivery-address.render-before',
  () => <Extension />,
);

function Extension() {
  const address = useShippingAddress();
  const editorType = useExtensionEditor()?.type;
  const blockProgressGranted =
    useExtensionCapability('block_progress');

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

  return editorType === 'checkout' &&
    !blockProgressGranted ? (
    <Banner
      status="warning"
      title="This app may be misconfigured"
    >
      To allow this app to block checkout, enable
      this behavior in "Checkout behavior"
      settings.
    </Banner>
  ) : null;
}
