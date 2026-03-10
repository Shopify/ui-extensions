import {
  reactExtension,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <View padding="base" border="base">
      View
    </View>
  );
}
