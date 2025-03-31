import {
  Banner,
  Button,
  useApplyNoteChange,
  useInstructions,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const applyNoteChange = useApplyNoteChange();
  const instructions = useInstructions();

  if (instructions.notes.canUpdateNote) {
    return (
      <Button
        onPress={() =>
          applyNoteChange({
            type: 'updateNote',
            note: 'Please include a free gift.',
          })
        }
      >
        Include a free gift with your order
      </Button>
    );
  } else {
    return (
      <Banner status="warning">
        Free gifts cannot be added to this order
      </Banner>
    );
  }
}
