import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {
  useBuyerJourneyIntercept,
  useExtensionEditor,
  useExtensionCapability,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const editorType = useExtensionEditor()?.type;
  const blockProgressGranted =
    useExtensionCapability('block_progress');

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

  return (
    <>
      {editorType === 'checkout' &&
      !blockProgressGranted ? (
        <s-banner
          tone="warning"
          heading="This app may be misconfigured"
        >
          To allow this app to block checkout,
          enable this behavior in "Checkout
          behavior" settings.
        </s-banner>
      ) : null}
    </>
  );
}
