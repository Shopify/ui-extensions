import {render} from 'preact';
import {
  useApplyNoteChange,
  useInstructions,
} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const applyNoteChange = useApplyNoteChange();
  const instructions = useInstructions();

  if (instructions.notes.canUpdateNote) {
    return (
      <s-button
        onClick={() =>
          applyNoteChange({
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
