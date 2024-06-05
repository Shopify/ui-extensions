import {
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-index.block.render',
  () => <Extension />,
);

function Extension() {
  return <Text>I am a block extension that renders in the Orders section</Text>;
}
