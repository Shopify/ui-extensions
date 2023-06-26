import {reactExtension, View} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <View padding="base" border="base">
      View
    </View>
  );
}
