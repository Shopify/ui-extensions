import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

import {
  useBuyerJourneyIntercept,
  useExtensionEditor,
  useExtensionCapability,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const [showError, setShowError] =
    useState(false);
  const editorType = useExtensionEditor()?.type;
  const blockProgressGranted =
    useExtensionCapability('block_progress');

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
      {showError ? (
        <s-banner tone="critical">
          This item has a limit of one per
          customer.
        </s-banner>
      ) : null}
    </>
  );
}
