import '@shopify/ui-extensions/preact';
import {render} from 'preact';

import {useNote} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const note = useNote();

  if (!note) {
    return null;
  }

  return (
    <s-banner heading="Order note">
      {note}
    </s-banner>
  );
}
