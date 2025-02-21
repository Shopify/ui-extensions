import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-admin-print-action src="https://example.com"></s-admin-print-action>,
    document.body,
  );
}
