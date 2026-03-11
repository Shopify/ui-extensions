import {
  reactExtension,
  Disclosure,
  Button,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Disclosure>
      <Button toggles="one">Toggle</Button>
      <View id="one">Content</View>
    </Disclosure>
  );
}
