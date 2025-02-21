import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-stack direction="block" gap>
      <s-text type="strong">Name:</s-text>
      <s-text>Jane Doe</s-text>
    </s-stack>,
    document.body,
  );
}
