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
    <s-banner tone="info">
      <s-text type="strong">
        Note from buyer
      </s-text>
      <s-text>{note}</s-text>
    </s-banner>
  );
}
