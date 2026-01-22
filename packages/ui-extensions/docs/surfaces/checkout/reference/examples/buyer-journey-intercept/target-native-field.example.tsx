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
