import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-section heading="Section heading">Section content</s-section>,
    document.body,
  );
}
