import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const note = shopify.note.value;

  return (
    <s-box>
      <s-text type="strong">Order note</s-text>
      <s-text>
        {note || 'No note provided'}
      </s-text>
    </s-box>
  );
}
