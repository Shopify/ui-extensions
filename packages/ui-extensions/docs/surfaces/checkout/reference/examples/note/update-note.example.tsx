import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

import {useNote} from '@shopify/ui-extensions/checkout/preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  const currentNote = useNote();
  const [note, setNote] = useState(
    currentNote ?? '',
  );

  const canUpdate =
    shopify.instructions.value.notes
      .canUpdateNote;

  async function saveNote() {
    const result = note
      ? await shopify.applyNoteChange({
          type: 'updateNote',
          note,
        })
      : await shopify.applyNoteChange({
          type: 'removeNote',
        });

    if (result.type === 'error') {
      console.error(result.message);
    }
  }

  if (!canUpdate) {
    return null;
  }

  return (
    <s-stack>
      <s-text-area
        label="Order note"
        value={note}
        onInput={(e) =>
          setNote(e.currentTarget.value)
        }
      />
      <s-button onClick={saveNote}>
        Save note
      </s-button>
    </s-stack>
  );
}
