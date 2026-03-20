import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {
  useExtensionCapability,
  useExtensionEditor,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const canBlockProgress =
    useExtensionCapability('block_progress');
  const editor = useExtensionEditor();

  if (editor?.type === 'checkout' && !canBlockProgress) {
    return (
      <s-banner tone="warning" heading="Missing permission">
        Enable "block checkout progress" in
        the checkout editor to use this
        extension.
      </s-banner>
    );
  }

  return null;
}
