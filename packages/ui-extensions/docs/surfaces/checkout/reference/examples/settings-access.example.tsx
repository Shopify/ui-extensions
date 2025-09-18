import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-banner>
      {shopify.settings.value.banner_title}
    </s-banner>
  );
}
