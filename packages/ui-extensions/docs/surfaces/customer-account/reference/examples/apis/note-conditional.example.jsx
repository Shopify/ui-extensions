import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const note = shopify.note.value;

  if (!note) {
    return null;
  }

  return (
    <s-box>
      <s-text type="strong">Order note</s-text>
      <s-text>{note}</s-text>
    </s-box>
  );
}
