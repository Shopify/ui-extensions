import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-text>Note: {shopify.note.value}</s-text>
  );
}
