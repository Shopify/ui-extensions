import {useState} from 'react';
import {
  reactExtension,
  Banner,
  useBuyerJourneyIntercept,
  useCartLineTarget,
  useExtensionCapability,
  useExtensionEditor,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-item.render-after',
  () => <Extension />,
);

function Extension() {
  const [showError, setShowError] =
    useState(false);
  const {quantity} = useCartLineTarget();
  const editorType = useExtensionEditor()?.type;
  const blockProgressGranted =
    useExtensionCapability('block_progress');

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

  return (
    <>
      {editorType === 'checkout' &&
      !blockProgressGranted ? (
        <Banner
          status="warning"
          title="This app may be misconfigured"
        >
          To allow this app to block checkout,
          enable this behavior in "Checkout
          behavior" settings.
        </Banner>
      ) : null}
      {showError ? (
        <Banner>
          This item has a limit of one per
          customer.
        </Banner>
      ) : null}
    </>
  );
}
