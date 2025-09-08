import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (shopify.isLocationFormVisible.value) {
    return (
      <s-text>
        The customer is being asked to provide
        their location.
      </s-text>
    );
  } else {
    return (
      <s-text>
        Pickup points are being shown.
      </s-text>
    );
  }
}
