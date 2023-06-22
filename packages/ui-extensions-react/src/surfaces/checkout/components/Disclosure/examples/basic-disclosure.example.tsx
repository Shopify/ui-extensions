import {
  reactExtension,
  Disclosure,
  Button,
  View,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Disclosure>
      <Button toggles="one">Toggle</Button>
      <View id="one">Content</View>
    </Disclosure>
  );
}
