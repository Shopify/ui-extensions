import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  if (
    shopify.instructions.value.notes.canUpdateNote
  ) {
    return (
      <s-button
        onClick={() =>
          shopify.applyNoteChange({
            type: 'updateNote',
            note: 'Please include a free gift.',
          })
        }
      >
        Include a free gift with your order
      </s-button>
    );
  } else {
    return (
      <s-banner tone="warning">
        Free gifts cannot be added to this order
      </s-banner>
    );
  }
}
