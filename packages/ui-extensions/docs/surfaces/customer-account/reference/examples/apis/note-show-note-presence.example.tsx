import {
  reactExtension,
  useNote,
} from '@shopify/ui-extensions-react/customer-account';
import {Text} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const note = useNote();

  return (
    <Text appearance={note ? 'success' : 'subdued'}>
      {note
        ? 'A note was included with this order.'
        : 'No note was included with this order.'}
    </Text>
  );
}
