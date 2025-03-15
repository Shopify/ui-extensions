import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-stack direction="vertical" gap="base">
      <s-text>First Text</s-text>
      <s-divider />
      <s-text>Second Text</s-text>
    </s-stack>,
    document.body,
  );
}
