/* eslint-disable react/self-closing-comp */
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return (
    <s-stack direction="inline" gap="base">
      <s-text-field label="Gift message"></s-text-field>
      <s-button variant="primary">Save</s-button>
    </s-stack>
  );
}
