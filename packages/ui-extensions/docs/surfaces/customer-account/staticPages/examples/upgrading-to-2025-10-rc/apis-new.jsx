import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-text>Line item title: {shopify.target.value.merchandise.title}</s-text>
  );
}
