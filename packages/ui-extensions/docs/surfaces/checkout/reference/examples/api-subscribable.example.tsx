import {
  reactExtension,
  Text,
  useNote,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const note = useNote();
  return <Text>Note: {note}</Text>;
}
