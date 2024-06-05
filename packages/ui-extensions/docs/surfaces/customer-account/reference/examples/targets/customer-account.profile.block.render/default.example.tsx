import {
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.profile.block.render',
  () => <Extension />,
);

function Extension() {
  return <Text>I am a Profile extension</Text>;
}
